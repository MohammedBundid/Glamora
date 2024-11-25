'use client'

import useSalesStore from "@/app/stores/salesStore";
import { useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import PanelFormModal from "../ui/PanelForm";
import useAuthStore from "@/app/stores/authStore";

const EventsPanel = () => {
  const { togglePanelModal } = useAuthStore()
  const { sales, fetchSales } = useSalesStore();

  useEffect(() => {
    fetchSales()
  },[fetchSales])

  return (
    <div className="w-full h-full p-6 bg-midnight_green-100 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-mint-600">Manage Events</h1>
        <button
          onClick={togglePanelModal}
          className="px-4 py-2 bg-mint-500 flex items-center gap-2 text-white rounded-md hover:bg-mint-500 hover:-translate-y-1 transition duration-200 shadow-md"
        >
          <FiPlusCircle />
          Add New Event
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>event name</th>
            <th>event status</th>
            <th>event description</th>
            <th>event discount</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.title}</td>
              <td>{sale.sale_status}</td>
              <td>{sale.description}</td>
              <td>{sale.discount}</td>
            </tr>
          ))}
          
        </tbody>
      </table>

      <PanelFormModal />
    </div>
  );
};

export default EventsPanel;
