import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler 
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const CustomLineChart = ({ data }) => { 
    const chartData = {
        labels: data?.map(item => item.date) || [], 
        datasets: [
            {
                label: "Expenses",
                data: data?.map(item => item.amount) || [], 
                borderColor: '#ef4444', 
                backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                borderWidth: 3,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#ef4444',
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true, 
                tension: 0.4, 
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: { display: false }, 
            tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#333',
                bodyColor: '#ef4444',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 10,
                callbacks: {
                    label: (context) => ` Expense: ₹${context.raw.toLocaleString()}`
                }
            }
        },
        scales: {
            x: { 
                grid: { display: false },
                ticks: { color: '#6b7280', font: { size: 12 } }
            },
            y: { 
                beginAtZero: true, 
                grid: {
                    color: '#f3f4f6',
                    borderDash: [5, 5] 
                },
                ticks: { color: '#6b7280', font: { size: 12 } }
            }
        },
    };

    return (
        <div className="relative w-full h-[320px]">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default CustomLineChart;