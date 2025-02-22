import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid";
import axios from "axios";

const ViewCultivation = () => {
  const [searchParams] = useSearchParams();
  const deviceId = searchParams.get("device_id");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/view_cultivation_data.json");
        
        console.log("Fetched data:", response.data); // Debugging log
        const responseData = response.data;

        // Ensure responseData is an array, or extract it if it's inside an object
        setData(Array.isArray(responseData) ? responseData : responseData.cultivations || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (deviceId) {
      fetchData();
    }
  }, [deviceId]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Cultivation Management
      </h1>

      <div className="flex gap-4 mb-6 w-full max-w-3xl items-center">
        <button className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Pot ID</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Index</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map(({ id, pot_id, pot_type, pot_status, pot_index }) => (
                <tr key={id} className="border-t">
                  <td className="p-3">{pot_id}</td>
                  <td className="p-3">{pot_type}</td>
                  <td className="p-3">{pot_status}</td>
                  <td className="p-3">{pot_index}</td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="bg-blue-500 text-white p-2 rounded-lg shadow hover:bg-blue-600 transition">
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-600 transition">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCultivation;
