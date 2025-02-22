import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import ChangeNameModal from "../components/ChangeNameModal";
import FarmTypeModal from "../components/FarmTypeModal";
import EditMushroomTypeModal from "../components/EditMushroomTypeModal";
function Masterdata() {
    const navigate = useNavigate();
    const [selectedFarm, setSelectedFarm] = useState("โรงปลูก 1");
    const [isFarmTypeModalOpen, setIsFarmTypeModalOpen] = useState(false);
    const [isEditMushroomModalOpen, setIsEditMushroomModalOpen] = useState(false);
    // const [isChangeNameModalOpen, setIsChangeNameModalOpen] = useState(false); 
    const [farmTypes, setFarmTypes] = useState([
        { id: "01", name: "โรงปลูก 1" },
        { id: "02", name: "โรงเพาะ 2" }
    ]);




    return (
        <div>
            <div className="bg-gray-100 py-6 min-h-screen">
                <h2 className="text-4xl font-bold mx-10 my-4">SYSTEM OVERVIEW</h2>
                <div className=" flex items-center justify-center">
                    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Container: Dashboard Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Temperature Card */}
                            <div className="bg-blue-500 dashboard-card">
                                <div className="dashboard-header">
                                    <span>Temperature</span>

                                </div>
                                <div className="dashboard-value">34.00°C</div>
                            </div>

                            {/* Humidity Card */}
                            <div className="bg-green-500 dashboard-card">
                                <div className="dashboard-header">
                                    <span>Humidity</span>

                                </div>
                                <div className="dashboard-value">20.00%</div>
                            </div>

                            {/* Air Pressure Card */}
                            <div className="bg-yellow-500 dashboard-card">
                                <div className="dashboard-header">
                                    <span>Air pressure</span>

                                </div>
                                <div className="dashboard-value">1.00</div>
                                <span className="dashboard-unit">mS/cm</span>
                            </div>

                            {/* Online Status Card */}
                            <div className="bg-red-500 dashboard-card">
                                <div className="dashboard-header">
                                    <span>Online</span>

                                </div>
                                <div className="dashboard-value">5</div>
                            </div>
                        </div>

                        {/* Right Container: Watering Section */}
                        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col justify-between">

                            {/* Dropdown Farm Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium font-title text-gray-500 mb-2">
                                    Farm-name :
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedFarm}
                                        onChange={(e) => {
                                            setSelectedFarm(e.target.value);
                                        }}
                                        className="w-full h-12 px-4 rounded-md bg-gray-50 border font-title border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 appearance-none"
                                    >
                                        {farmTypes.map((farm) => (
                                            <option key={farm.id} value={farm.name}>
                                                {farm.name}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                            </div>

                              {/* Dropdown Farm Name */}
                              <div className="mb-4">
                                <label className="block text-sm font-medium font-title text-gray-500 mb-2">
                                    Farm-name :
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedFarm}
                                        onChange={(e) => {
                                            setSelectedFarm(e.target.value);
                                        }}
                                        className="w-full h-12 px-4 rounded-md bg-gray-50 border font-title border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 appearance-none"
                                    >
                                        {farmTypes.map((farm) => (
                                            <option key={farm.id} value={farm.name}>
                                                {farm.name}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                            </div>

                              {/* Dropdown Farm Name */}
                              <div className="mb-4">
                                <label className="block text-sm font-medium font-title text-gray-500 mb-2">
                                    Farm-name :
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedFarm}
                                        onChange={(e) => {
                                            setSelectedFarm(e.target.value);
                                        }}
                                        className="w-full h-12 px-4 rounded-md bg-gray-50 border font-title border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 appearance-none"
                                    >
                                        {farmTypes.map((farm) => (
                                            <option key={farm.id} value={farm.name}>
                                                {farm.name}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                            </div>




                            {isFarmTypeModalOpen && (
                                <FarmTypeModal
                                    isOpen={isFarmTypeModalOpen}
                                    onClose={() => setIsFarmTypeModalOpen(false)}
                                    farmTypes={farmTypes}
                                    setFarmTypes={setFarmTypes}
                                />
                            )}

                            {isEditMushroomModalOpen && (
                                <EditMushroomTypeModal
                                    isOpen={isEditMushroomModalOpen}
                                    onClose={() => setIsEditMushroomModalOpen(false)}
                                />
                            )}

                            <div>
                            </div>

                            {/* Buttons */}
                            <div className="space-y-4">

                                <button onClick={() => setIsEditMushroomModalOpen(true)} className="bt-card">
                                    Edit Type Mushroom
                                </button>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Masterdata;