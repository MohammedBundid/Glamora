import { create } from "zustand";

const usePanelModalStore = create((set) => ({
    isPanelModalOpen: false,
    togglePanelModal: () => {
        set((state) => ({
            isPanelModalOpen: !state.isPanelModalOpen
        }))
    }
}))

export default usePanelModalStore;