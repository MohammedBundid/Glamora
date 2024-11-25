'use client'

import CustomersPanel from '@/app/components/dashboard/CustomersPanel';
import EventsPanel from '@/app/components/dashboard/EventsPanel';
import InventoryPanel from '@/app/components/dashboard/InventoryPanel';
import OrdersPanel from '@/app/components/dashboard/OrdersPanel';
import PaymentPanel from '@/app/components/dashboard/PaymentPanel';
import ProductsPanel from '@/app/components/dashboard/ProductsPanel';
import PromotionsPanel from '@/app/components/dashboard/PromotionsPanel';
import ReportsPanel from '@/app/components/dashboard/ReportsPanel';
import SettingsPanel from '@/app/components/dashboard/SettingsPanel';
import useAdminPanelStore from '@/app/stores/panelStore'
import React from 'react'

const Page = () => {
    const { type } = useAdminPanelStore();
  return (
    <div className="flex-1 min-h-full bg-mint-900">
        {type === "productsPanel" && <ProductsPanel />}
        {type === "customersPanel" && <CustomersPanel />}
        {type === "inventoryPanel" && <InventoryPanel />}
        {type === "paymentPanel" && <PaymentPanel />}
        {type === "ordersPanel" && <OrdersPanel />}
        {type === "eventsPanel" && <EventsPanel />}
        {type === "reportsPanel" && <ReportsPanel />}
        {type === "settingsPanel" && <SettingsPanel />}
        {type === "promotionsPanel" && <PromotionsPanel />}
    </div>
  )
}

export default Page