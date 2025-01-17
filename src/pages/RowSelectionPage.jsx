import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RowSelectionPage() {
    const navigate = useNavigate();
    const [rowsData, setRowsData] = useState([]);  

    useEffect(() => {
        // Simulate API Call
        const fetchData = async () => {
            try {
                // mock data 
                const data = [
                    { id: 1, name: "Row 01", status: "Available" },
                    { id: 2, name: "Row 02", status: "In Use" },
                    { id: 3, name: "Row 03", status: "Available" },
                    { id: 4, name: "Row 04", status: "Maintenance" },
                    { id: 5, name: "Row 05", status: "Maintenance" },
                ];
                setRowsData(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white min-h-screen p-8">
            <h2 className="text-4xl font-bold mx-10 my-4">APPLICATION</h2>
            <div className="grid grid-cols-4 gap-6">
                {rowsData.map((row) => (
                    <div
                        key={row.id}
                        onClick={() => navigate(`/potselection?row=${row.id}`)}
                        className="border rounded-lg text-center p-8 cursor-pointer hover:bg-gray-200 transition"
                    >
                        <p className="font-bold text-xl">{row.name}</p>
                        <p className="text-sm text-gray-500">{row.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RowSelectionPage;



// RowSelectionPage