import { useState, useEffect } from "react";
import axios from "axios";
import {
  PencilIcon,
  EyeIcon,
  TrashIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Cultivation = () => {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    id: null,
    device_name: "",
    mushroom_farm_name: "",
  });
  const [search, setSearch] = useState("");
  const [selectedFarm, setSelectedFarm] = useState("");
  const [devices, setDevices] = useState([]);
  const [farms, setFarms] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [devicesRes, farmsRes, cultivationRes] = await Promise.all([
          axios.get("./devices.json"),
          axios.get("./farms.json"),
          axios.get("./cultivation_data.json"),
        ]);

        setDevices(devicesRes.data || []);
        setFarms(farmsRes.data || []);

        // Map `device_id` to `device_name` before setting items
        const deviceMap = devicesRes.data.reduce(
          (acc, { device_id, device_name }) => {
            acc[device_id] = device_name;
            return acc;
          },
          {}
        );

        const mappedItems = cultivationRes.data.map((item) => ({
          ...item,
          device_name: deviceMap[item.device_id] || "Unknown Device",
        }));

        setItems(mappedItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddEdit = () => {
    setItems((prevItems) =>
      form.id
        ? prevItems.map((item) => (item.id === form.id ? form : item))
        : [...prevItems, { ...form, id: Date.now() }]
    );
    closeModal();
  };

  const handleEdit = (item) => {
    setForm(item);
    setModal(true);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const closeModal = () => {
    setModal(false);
    setForm({ id: null, device_name: "", mushroom_farm_name: "" });
  };

  const filteredItems = items.filter(
    ({ device_name, mushroom_farm_name }) =>
      (selectedFarm === "" ||
        selectedFarm === "All Farms" ||
        mushroom_farm_name === selectedFarm) &&
      (device_name.toLowerCase().includes(search.toLowerCase()) ||
        mushroom_farm_name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Cultivation Management
      </h1>

      <div className="flex gap-4 mb-6 w-full max-w-3xl items-center">
        <input
          type="text"
          placeholder="Search by Device Name or Farm Name"
          className="p-3 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          value={selectedFarm}
          onChange={(e) => setSelectedFarm(e.target.value)}
        >
          <option value="All Farms">All Farms</option>
          {farms.map(({ farm_name }, index) => (
            <option key={index} value={farm_name}>
              {farm_name}
            </option>
          ))}
        </select>

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
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Device Name</th>
              <th className="p-3 text-left">Mushroom Farm Name</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(
              ({ id, device_id, device_name, mushroom_farm_name }) => (
                <tr key={id} className="border-t">
                  <td className="p-3">{id}</td>
                  <td className="p-3">{device_name}</td>
                  <td className="p-3">{mushroom_farm_name}</td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="bg-blue-500 text-white p-2 rounded-lg shadow hover:bg-blue-600 transition"
                        onClick={() =>
                          handleEdit({ id, device_name, mushroom_farm_name })
                        }
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-600 transition"
                        onClick={() => handleDelete(id)}
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                      <button
                        className="bg-green-500 text-white p-2 rounded-lg shadow hover:bg-green-600 transition"
                        onClick={() =>
                          navigate(
                            `/mushroom-cultivation/view/?device_id=${device_id}`
                          )
                        }
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
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

            <select
              className="w-full p-2 border rounded mb-3"
              value={form.device_name}
              onChange={(e) =>
                setForm({ ...form, device_name: e.target.value })
              }
            >
              {devices.map(({ device_name }, index) => (
                <option key={index} value={device_name}>
                  {device_name}
                </option>
              ))}
            </select>

            <select
              className="w-full p-2 border rounded mb-3"
              value={form.mushroom_farm_name}
              onChange={(e) =>
                setForm({ ...form, mushroom_farm_name: e.target.value })
              }
            >
              {farms.map(({ farm_name }, index) => (
                <option key={index} value={farm_name}>
                  {farm_name}
                </option>
              ))}
            </select>

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
                {form.id ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cultivation;
