import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PencilIcon, TrashIcon, PlusIcon, XIcon } from "@heroicons/react/solid";
import { GiFarmTractor } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const ViewGrowing = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const deviceId = searchParams.get("device_id");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    id: null,
    pot_id: "",
    pot_type: "",
    pot_status: "",
  });

  useEffect(() => {
    if (!deviceId) return;
    axios
      .get("/view_cultivation_data.json")
      .then((response) => setData(response.data || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, [deviceId]);

  const handleHarvest = (potId) =>
    console.log(`Harvesting pot with ID: ${potId}`);
  const handleHarvestAll = () => console.log("Harvesting all pots");
  const handleViewImage = (potId) =>
    console.log(`Viewing image for pot ID: ${potId}`);
  const handleDelete = (potId) => console.log(`Deleting pot with ID: ${potId}`);
  const handleEdit = (item) => {
    setForm(item);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setForm({ id: null, pot_id: "", pot_type: "", pot_status: "" });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl flex items-center mb-6">
        <button
          className="flex items-center text-gray-700 hover:text-gray-900 mr-4"
          onClick={() => navigate(-1)} // Navigate back
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-3xl font-semibold text-gray-800">
          Devices: {deviceId}
        </h1>
      </div>

      <div className="flex gap-4 mb-6 w-full max-w-3xl items-center">
        <input
          type="text"
          placeholder="Search by Pot id, and type"
          className="p-3 w-full border rounded-lg shadow-sm"
        />
        <select className="p-3 border rounded-lg shadow-sm">
          <option value="">Filter by status</option>
        </select>
        <button
          className="bg-green-500 text-white p-3 rounded-lg shadow-md"
          onClick={handleHarvestAll}
        >
          <GiFarmTractor className="w-5 h-5" />
        </button>
        <button
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md"
          onClick={() => setModal(true)}
        >
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
              <th className="p-3 text-center">Image</th>
              <th className="p-3 text-center">Harvest</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, pot_id, pot_type, pot_status }) => (
              <tr key={id} className="border-t">
                <td className="p-3">{pot_id}</td>
                <td className="p-3">{pot_type}</td>
                <td className="p-3">{pot_status}</td>
                <td className="p-3 text-center">
                  <button
                    className="bg-gray-500 text-white p-2 rounded-lg"
                    onClick={() => handleViewImage(pot_id)}
                  >
                    <FaEye className="w-5 h-5" />
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button
                    className="bg-green-500 text-white p-2 rounded-lg"
                    onClick={() => handleHarvest(pot_id)}
                  >
                    <GiFarmTractor className="w-5 h-5" />
                  </button>
                </td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      className="bg-blue-500 text-white p-2 rounded-lg"
                      onClick={() =>
                        handleEdit({ id, pot_id, pot_type, pot_status })
                      }
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded-lg"
                      onClick={() => handleDelete(pot_id)}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {form.id ? "Edit Item" : "Add New Item"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <input
              className="w-full border p-2 mb-4"
              placeholder="Pot ID"
              value={form.pot_id}
              onChange={(e) => setForm({ ...form, pot_id: e.target.value })}
            />
            <select
              className="w-full border p-2 mb-4"
              value={form.pot_type}
              onChange={(e) => setForm({ ...form, pot_type: e.target.value })}
            >
              <option value="" disabled>
                Select Pot Type
              </option>
              <option value="POM">POM</option>
              <option value="OM">OM</option>
              <option value="AM">AM</option>
            </select>
            <select
              className="w-full border p-2 mb-4"
              value={form.pot_status}
              onChange={(e) => setForm({ ...form, pot_status: e.target.value })}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="pending">Pending</option>
              <option value="safe">Safe</option>
              <option value="danger">Danger</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                {form.id ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewGrowing;
