import React from 'react'

function SystemOverView() {
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
                                    <button class="group relative bt-arrow">
                                        <div class="ml-1 transition group-hover:translate-x-1">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="dashboard-value">00.00°C</div>
                            </div>

                            {/* Humidity Card */}
                            <div className="bg-green-500 dashboard-card">
                                <div className="dashboard-header">
                                    <span>Humidity</span>
                                    <button class="group relative bt-arrow">
                                        <div class="ml-1 transition group-hover:translate-x-1">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="dashboard-value">00.00%</div>
                            </div>

                            {/* Air Pressure Card */}
                            <div className="bg-yellow-500 dashboard-card">
                                <div className="dashboard-header">
                                    <span>Air pressure</span>
                                    <button class="group relative bt-arrow">
                                        <div class="ml-1 transition group-hover:translate-x-1">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="dashboard-value">0.00</div>
                                <span className="dashboard-unit">mS/cm</span>
                            </div>

                            {/* Online Status Card */}
                            <div className="bg-red-500 dashboard-card">
                                <div className="dashboard-header">
                                    <span>Online</span>
                                    <button class="group relative bt-arrow">
                                        <div class="ml-1 transition group-hover:translate-x-1">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="dashboard-value">0</div>
                            </div>
                        </div>

                        {/* Right Container: Watering Section */}
                        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold">Watering</h3>
                                    <div class="m-4">

                                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="space-y-4">
                                <button className="bt-card">
                                    Edit Type Mushroom
                                </button>
                                <button className="bt-card">
                                    Change Status
                                </button>
                                <button className="bt-card">
                                    Change Name
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SystemOverView