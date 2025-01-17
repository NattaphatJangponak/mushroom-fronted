import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PotSelectionPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showImage, setShowImage] = useState(false);

    // get query parameter  URL 
    const searchParams = new URLSearchParams(location.search);
    const rowId = searchParams.get('row') || "1"; // Default เป็น "1"

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            {/* Header */}
            <h2 className="text-4xl font-bold mx-10 my-4 ">Pot Selection for Row {rowId}</h2>

            {/* Layout Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Grid for Pot */}
                <div className="col-span-8 grid grid-cols-4 gap-4">
                    {[...Array(16).keys()].map((num) => (
                        <div
                            key={num}
                            onClick={() => alert(`Selected Pot ${num + 1} in Row ${rowId}`)}
                            className="border rounded-lg text-center p-8 cursor-pointer hover:bg-gray-200 transition shadow-md"
                        >
                            <p className="font-bold text-xl">{String(num + 1).padStart(2, '0')}</p>
                        </div>
                    ))}
                </div>

                {/* Sidebar Card */}
                <div className="col-span-4">
                    <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6">
                        {/* ID Section */}
                        {/* Input ID */}



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
                                <div className="relative flex items-center">
                                    {/* SVG Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                                    >
                                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                    </svg>

                                    {/* Input */}
                                    <input
                                        id="ID"
                                        type="text"
                                        placeholder="Enter ID"
                                        value={`0${rowId}`}
                                        readOnly
                                        className="w-full h-12 pl-10 pr-4 rounded-md bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Buttons */}
                        <div className="space-y-4">
                            <button
                                className="bt-card"
                                onClick={() => setShowImage(true)}
                            >
                                Show Img
                            </button>
                            <button
                                className="bt-card"
                                onClick={() => navigate('/application')}
                            >
                                Status Mashroom
                            </button>
                        </div>

                        {/* Show Image */}
                        {showImage && (
                            <div className="mt-6 flex justify-center">
                                <img
                                    src="/Image/mushroomex.png"
                                    alt="Mushroom"
                                    className="w-40 h-40 border-4 border-gray-200 rounded-md"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PotSelectionPage;


