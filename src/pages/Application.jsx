import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';

const growthRecords = [
    { day: "Grow 01", value: 1.0 },
    { day: "Grow 02", value: 2.5 },
    { day: "Grow 03", value: 1.8 },
    { day: "Grow 02", value: 1.2 },
    { day: "Grow 01", value: 1.6 },
    { day: "Grow 02", value: 2.8, highlight: true }, // จุดไฮไลต์
    { day: "Grow 03", value: 1.9 },
    { day: "Grow 02", value: 2.0 },
    { day: "Grow 01", value: 1.5 },
];

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-4 shadow-md rounded-md border border-gray-300">
                <p className="text-gray-700 font-semibold">{`Grow ${payload[0].payload.day}`}</p>
                <p className="text-blue-500 font-bold">{`Value: ${payload[0].value}`}</p>
                <p className="text-gray-500">Monday, April 22nd</p>
            </div>
        );
    }
    return null;
}
function Application() {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            {/* Header */}
            <h2 className="text-4xl font-bold mx-10 my-4">Mushroom Overview</h2>
            {/* Layout Grid */}
            <div className="grid grid-cols-12 gap-8">
                {/* Sidebar: Image, Status Input, Buttons */}
                <div className="col-span-4 bg-white shadow-md rounded-lg p-6 text-center">
                    {/* Mushroom Image */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="/Image/mushroomex.png" // Path รูปภาพ
                            alt="Mushroom"
                            className="w-40 h-40 border-4 border-gray-200  rounded-md"
                        />
                    </div>

                    {/* Status Input */}
                    <div className="mb-4">
                        <div className="group w-full max-w-md mx-auto">
                            {/* Label */}
                            <label
                                htmlFor="ID"
                                className="block text-sm font-medium text-gray-500 mb-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                            >
                                ID
                            </label>

                            {/* Input Group */}
                            <div className="relative flex items-start">
                                {/* SVG Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"
                                >
                                    <path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48l0 164.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5L192 112c0-26.5-21.5-48-48-48z" />
                                </svg>

                                {/* Input */}
                                <input
                                    id="ID"
                                    type="text"
                                    placeholder="Enter ID"
                                    className="w-full h-12 pl-10 pr-4 rounded-md bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
                                />
                            </div>
                        </div>
                    </div>




                    {/* Buttons */}
                    <div className="space-y-4">
                        <button className="bt-card">
                            Harvest
                        </button>
                        <button className="bt-card">
                            Change Pot
                        </button>
                    </div>
                </div>

                {/* Main Content: Line Chart */}
                <div className="col-span-8 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Growth Efficiency</h2>
                    <div className="flex justify-center">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                data={growthRecords}
                                margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" tick={{ fontSize: 14, fontWeight: 'bold' }} />
                                <YAxis />
                                <Tooltip content={<CustomTooltip />} />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8884d8"
                                    dot={({ cx, cy, payload }) => (
                                        <Dot
                                            cx={cx}
                                            cy={cy}
                                            r={payload.highlight ? 6 : 4} // highlight
                                            fill={payload.highlight ? '#2563eb' : '#d1d5db'}
                                            stroke={payload.highlight ? '#1e3a8a' : 'none'}
                                        />
                                    )}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-center mt-6">
                        The growth efficiency is <span className="font-bold">30%</span> Better compared to last month
                    </p>

                    {/* Button: Details */}
                    <div className="mt-4 flex justify-center">
                        <button className="bg-black text-white py-2 px-6 rounded-md font-semibold hover:bg-gray-800">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;
