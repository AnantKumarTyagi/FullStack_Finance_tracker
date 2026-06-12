import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const CustomBarChart = ({ data = [] }) => {

    const backgroundColors = data.map((_, index) => 
        index % 2 === 0 ? '#4338ca' : '#cfbefb'
    );

    const chartData = {
        labels: data.map(item => item.date), 
        datasets: [
            {
                data: data.map(item => item.amount), 
                backgroundColor: backgroundColors,
                borderRadius: 10, 
                borderSkipped: 'bottom', 
                hoverBackgroundColor: '#FA2C37', 
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#ffffff', 
                titleColor: '#1e40af', 
                bodyColor: '#111827', 
                borderColor: '#d1d5db',
                borderWidth: 1,
                padding: 12,
                displayColors: false, 
                titleFont: { size: 12, weight: 'bold' },
                bodyFont: { size: 14, weight: '500' },
                callbacks: {
                    title: (tooltipItems) => {
                        return tooltipItems[0].label;
                    },
                    label: (context) => {
                        return `Amount: ₹ ${context.raw}`; 
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                border: { display: false },
                ticks: {
                    color: '#555',
                    font: { size: 12 }
                }
            },
            y: {
                grid: { display: false },
                border: { display: false },
                ticks: {
                    color: '#555',
                    font: { size: 12 }
                }
            }
        }
    };

    return (
        <div className="bg-white mt-6">
            <div className="relative w-full h-[300px]">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default CustomBarChart;