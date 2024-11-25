import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAlertStore = create(
    persist(
        (set) => ({
            isOpen: false,
            message: "",
            type: "info", // success, error, warning, info
            duration: 3000,
            onOpen: (message, type = "success", duration = 3000) =>
                set({ isOpen: true, message, type, duration }),
            onClose: () => set({ isOpen: false, message: "", type: "success" }),
        }),
        { name: "alert" }
    )
);


export default useAlertStore;