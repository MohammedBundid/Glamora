import { create } from "zustand";
import Media from "../types/media";
import { config, ID, storage } from "../lib/appwrite";

const useMediaStore = create<Media>((set) => ({
    isUploading: false,
    mediaUrl: "",

    // Setters
    setUploading: (uploading: boolean) =>
        set(() => ({
            isUploading: uploading,
        })),
    
    setMediaUrl: (url: string) =>
        set(() => ({ mediaUrl: url })),

    // Upload Media Function
    uploadMedia: async (file: File) => {
        set({ isUploading: true });

        try {
            // Start upload and listen for progress events
            const response = await storage.createFile(
                config.storeMediabucketId,
                ID.unique(),
                file,
            );

            // After successful upload, set the file URL
            const fileUrl = storage.getFileView(config.storeMediabucketId, response.$id);
            set({ mediaUrl: fileUrl });

        } catch (error) {
            console.error("Error uploading file:", error.message);
        } finally {
            set({ isUploading: false });
        }
    },
}));

export default useMediaStore;
