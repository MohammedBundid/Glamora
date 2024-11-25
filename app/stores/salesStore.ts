import { create } from "zustand";
import { config, database } from "../lib/appwrite";
import { Sale, SalesState } from "../types/sales";

const useSalesStore = create<SalesState>((set) => ({
    sales: [],
    fetchSales: async () => {
        try {
            const response = await database.listDocuments(config.databaseId, config.collecionSales);
            const sales: Sale[] = response.documents.map((doc) => ({
                id: doc.$id,
                title: doc.title,
                description: doc.description,
                discount: doc.discount,
                sale_status: doc.sale_status,
                mediaUrl: doc.mediaUrl
            }));
            set({ sales }); 
        } catch (error) {
            console.error("Error fetching sales:", error);
        }
        
    },
    fetchSaleBanner: async () => {

    },
    setSales: (sales: Sale[]) => set({ sales }),
}))

export default useSalesStore;