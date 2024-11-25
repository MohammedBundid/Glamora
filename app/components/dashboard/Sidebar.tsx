'use client'

import useAdminPanelStore from "@/app/stores/panelStore";
import { FiShoppingCart, FiUsers, FiBox, FiBarChart2, FiSettings, FiPackage, FiGift, FiCreditCard, FiCalendar } from "react-icons/fi";

const Sidebar = () => {
    const { type, setType } = useAdminPanelStore();

    const handleType = (panelType: string) => {
        setType(panelType)
    }

    return (
        <div className="flex flex-col space-y-2 bg-midnight_green-500 min-h-full p-4 text-white w-1/4">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <nav className="flex flex-col space-y-2">
                <button onClick={() => handleType('productsPanel')} className={`dash-tab group ${type === 'productsPanel' ? 'active' : ''}`}>
                    <FiShoppingCart className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Products</span>
                </button>
                <button onClick={() => handleType('customersPanel')} className={`dash-tab group ${type === 'customersPanel' ? 'active' : ''}`}>
                    <FiUsers className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Customers</span>
                </button>
                <button onClick={() => handleType('inventoryPanel')} className={`dash-tab group ${type === 'inventoryPanel' ? 'active' : ''}`}>
                    <FiBox className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Inventory</span>
                </button>
                <button onClick={() => handleType('ordersPanel')} className={`dash-tab group ${type === 'ordersPanel' ? 'active' : ''}`}>
                    <FiPackage className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Orders</span>
                </button>
                <button onClick={() => handleType('eventsPanel')} className={`dash-tab group ${type === 'eventsPanel' ? 'active' : ''}`}>
                    <FiCalendar className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>events</span>
                </button>
                <button onClick={() => handleType('promotionsPanel')} className={`dash-tab group ${type === 'promotionsPanel' ? 'active' : ''}`}>
                    <FiGift className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Promotions & Discounts</span>
                </button>
                <button onClick={() => handleType('paymentPanel')} className={`dash-tab group ${type === 'paymentPanel' ? 'active' : ''}`}>
                    <FiCreditCard className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Payment</span>
                </button>
                <button onClick={() => handleType('reportsPanel')} className={`dash-tab group ${type === 'reportsPanel' ? 'active' : ''}`}>
                    <FiBarChart2 className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Reports</span>
                </button>
                <button onClick={() => handleType('settingsPanel')} className={`dash-tab group ${type === 'settingsPanel' ? 'active' : ''}`}>
                    <FiSettings className="text-lg dash-icon group-hover:animate-bounce" />
                    <span>Settings</span>
                </button>
            </nav>
        </div>
    )
}

export default Sidebar;
