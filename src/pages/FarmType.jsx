import { useState, useEffect } from "react";
import axios from "axios";
import { PencilIcon, TrashIcon, PlusIcon, XIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const FarmType = () => {
  const [farmTypes, setFarmTypes] = useState([]);  
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ type_id: "", type_name: "" });
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/farm_types.json");  
        if (Array.isArray(response.data)) {
          setFarmTypes(response.data);
        } else {
          console.error("Error: farm_types.json is not an array", response.data);
          setFarmTypes([]);
        }
      } catch (error) {
        console.error("Error fetching farm types:", error);
        setFarmTypes([]);
      }
    };
    fetchData();
  }, []);
  

   
  const handleAddEdit = () => {
    setFarmTypes((prevFarmTypes) =>
      form.type_id
        ? prevFarmTypes.map((item) => (item.type_id === form.type_id ? form : item))
        : [...prevFarmTypes, { ...form }]
    );
    closeModal();
  };

   
  const handleEdit = (item) => {
    setForm(item);
    setModal(true);
  };

   const handleDelete = (type_id) => {
    setFarmTypes((prevFarmTypes) => prevFarmTypes.filter((item) => item.type_id !== type_id));
  };

   
  const closeModal = () => {
    setModal(false);
    setForm({ type_id: "", type_name: "" });
  };

   
  const filteredFarmTypes = farmTypes.filter(
    ({ type_id, type_name }) =>
      type_id.toLowerCase().includes(search.toLowerCase()) ||
      type_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Farm Type Management</h1>

      
      <div className="flex gap-4 mb-6 w-full max-w-3xl items-center">
        <input
          type="text"
          placeholder="Search by Type ID or Name"
          className="p-3 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setModal(true)}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

 
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Type ID</th>
              <th className="p-3 text-left">Farm Type Name</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFarmTypes.map(({ type_id, type_name }) => (
              <tr key={type_id} className="border-t">
                <td className="p-3">{type_id}</td>
                <td className="p-3">{type_name}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      className="bg-blue-500 text-white p-2 rounded-lg shadow hover:bg-blue-600 transition"
                      onClick={() => handleEdit({ type_id, type_name })}
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-600 transition"
                      onClick={() => handleDelete(type_id)}
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
                {form.type_id ? "Edit Farm Type" : "Add New Farm Type"}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Type ID"
              className="w-full p-2 border rounded mb-3"
              value={form.type_id}
              onChange={(e) => setForm({ ...form, type_id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Farm Type Name"
              className="w-full p-2 border rounded mb-3"
              value={form.type_name}
              onChange={(e) => setForm({ ...form, type_name: e.target.value })}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {form.type_id ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmType;
