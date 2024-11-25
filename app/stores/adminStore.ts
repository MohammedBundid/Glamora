import { create } from "zustand";
import Admin from "../types/admin";
import { config, database, ID } from "../lib/appwrite";

const useAdminStore = create<Admin>((set) => ({
    loading: false,
    setLoading: (loading) => set({ loading }),

    createEvent: async (data) => {
        console.log(data)
        set((state) => ({ ...state, loading:true }))
        try {
            await database.createDocument(
                config.databaseId,
                config.collecionSales,
                ID.unique(),
                data
            )
        } catch (error) {
            console.error('error creating event', error.message)
        }finally {
            set((state) => ({ ...state, loading:false }))
        }
    }

}))

export default useAdminStore;