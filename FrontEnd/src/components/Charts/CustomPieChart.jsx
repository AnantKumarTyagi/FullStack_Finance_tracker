import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomPieChart = (props) => {
    const { data = [], label, totalAmount, colors, showTextAnchor } = props;

    const chartData = {
        labels: data.map(item => item.name),
        datasets: [
            {
                data: data.map(item => item.amount),
                backgroundColor: colors,
                borderWidth: 0,
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%', 
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#333',
                bodyColor: '#666',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 10,
                callbacks: {
                    label: (context) => ` ${context.label}: ₹${context.raw.toLocaleString('en-IN')}`
                }
            }
        },
    };

    return (
        <div className="relative w-full h-[380px] flex items-center justify-center">
            <Doughnut data={chartData} options={options} />

            {showTextAnchor && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
                    <span className="text-sm text-gray-500">{label}</span>
                    <span className="text-2xl font-bold text-gray-800">{totalAmount}</span>
                </div>
            )}

        </div>
    );
};

export default CustomPieChart;