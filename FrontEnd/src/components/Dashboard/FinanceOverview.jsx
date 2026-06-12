import CustomPieChart from "../Charts/CustomPieChart";
import { addThousandsSeparator } from "../../utils/helper";

const COLORS = ['#4338CA', '#FA2C37', '#18de43'];

const FinanceOverview = (props) => {
    const { totalBalance, totalIncome, totalExpense } = props;

    const balanceData = [
        { name: 'Total Balance', amount: totalBalance },
        { name: 'Total Expense', amount: totalExpense },
        { name: 'Total Income', amount: totalIncome },
    ]
    
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Finance Overview</h5>
            </div>
            
            <CustomPieChart
                data={balanceData}
                label="Total Balance"
                totalAmount={"\u20B9" + addThousandsSeparator(totalBalance)}
                colors={COLORS}
                showTextAnchor
            />
            
        </div>
    )
}

export default FinanceOverview;