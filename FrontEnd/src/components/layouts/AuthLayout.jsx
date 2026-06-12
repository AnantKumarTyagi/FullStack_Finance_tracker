import React from 'react';
import CARD_2 from '../../assets/images/image.png';
import { LuTrendingUpDown, LuChartBar } from 'react-icons/lu';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 bg-white">
            <div className="mb-10 flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center shadow-md">
                        <LuChartBar className="text-white text-lg" />
                    </div>
                <h2 className="text-xl font-semibold text-slate-900 tracking-tight">
                    Finance Tracker
                </h2></div>
            
                {children}
            </div>


            <div className="hidden md:block w-[40vw] h-screen bg-slate-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
                
                
                <div className="w-48 h-48 rounded-[40px] bg-blue-900 absolute -top-7 -left-5 shadow-2xl" />
                
               
                <div className="w-48 h-56 rounded-[40px] border-[20px] border-green-500 absolute top-[30%] -right-10 opacity-80" />
                
                
                <div className="w-48 h-48 rounded-[40px] bg-blue-600 absolute -bottom-7 -left-5 shadow-2xl" />

                
                <div className="grid grid-cols-1 z-20 relative mt-4">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track Your Income & Expenses"
                        value="430,000"
                        color="bg-blue-600" 
                    />
                </div>

                
                <img
                    src={CARD_2}
                    className="w-64 lg:w-[90%] absolute bottom-10 shadow-2xl rounded-2xl z-10 border border-slate-200"
                    alt="Dashboard Preview"
                />
            </div>
        </div>
    );
}

export default AuthLayout;

const StatsInfoCard = (props) => {
    const { icon, label, value, color } = props;

    return (
        <div className="flex gap-6 bg-white p-4 rounded-xl shadow-lg shadow-blue-900/5 border border-gray-100 z-20 relative">
            <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-md`}>
                {icon}
            </div>
            <div>
                <h6 className="text-xs text-slate-500 mb-1 font-medium">{label}</h6>
                <span className="text-[20px] font-semibold text-slate-800">
                    <span className="text-slate-400 mr-1">₹</span>{value}
                </span>
            </div>
        </div>
    )
};