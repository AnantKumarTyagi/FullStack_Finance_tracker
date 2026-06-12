import { useState, useEffect } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ['#4338CA', '#18de43', '#076B1A', '#4F39F6'];

const RecentIncomeWithChart = (props) => {
    const { data, totalIncome } = props;

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const dataArr = data?.map((item) => ({
            name: item?.source,
            amount: item?.amount,
        }));
        setChartData(dataArr);
    }, [data]);

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Last 60 Days Income</h5>
            </div>
            
            <CustomPieChart
                data={chartData}
                label="Total Income"
                totalAmount={"\u20B9"+`${totalIncome}`}
                showTextAnchor
                colors={COLORS}
            />
             
        </div>
    );
};
export default RecentIncomeWithChart;