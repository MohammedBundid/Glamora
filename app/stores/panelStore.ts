import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAdminPanelStore = create(
  persist(
    (set) => ({
      active: true, // Whether the admin panel is active
      type: "productsPanel", // Default panel type
      setActive: (active) => set({ active }), // Method to update 'active'
      setType: (type) => set({ type }), // Method to update 'type'
    }),
    {
      name: "admin-panel-store", // Name for persistence
    }
  )
);

export default useAdminPanelStore;
