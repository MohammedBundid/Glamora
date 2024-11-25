import { create } from "zustand";
import { account, ID } from "../lib/appwrite";
import { AuthState, User } from "../types/auth";
// import { Bounce, toast } from "react-toastify";

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isModalOpen: false,
    isModalFormOpen: false,
    isPanelModalOpen: false,
    modalFormType: "login",
    loading: false,
    setUser: (user) => set({ user }),
    setLoading: (loading) => set({ loading }),
    toggleModal: () =>
        set((state) => ({
            isModalOpen: !state.isModalOpen,
        })),
    toggleFormModal: () =>
        set((state) => ({
            isModalFormOpen: !state.isModalFormOpen,
        })),
    toggleFormType: () =>
        set((state) => ({
            modalFormType: state.modalFormType === "login" ? "register" : "login",
        })),
    togglePanelModal: () => {
        set((state) => ({
            isPanelModalOpen: !state.isPanelModalOpen
        }))
    },

    fetchUser: async () => {
        try {
            const user = await account.get();
            set({ user });
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    },

    login: async (email: string, password: string) => {
        set((state) => ({ ...state, loading:true }))
        try {
          await account.createEmailPasswordSession(email, password); // Create a session
          const session = await account.get(); // Fetch user details after login
          set({ user: session as User });
        } catch (error) {
          console.error("Login failed:", error);
          throw error; // Allow the caller to handle login errors
        }finally {
            set((state) => ({ ...state, loading:false }))
        }
      },

    logout: async () => {
        set((state) => ({ ...state, loading:true }))
        try {
            await account.deleteSession("current"); // Delete the current session
            set({ user: null }); // Clear the user from the state
        } catch (error) {
            console.error("Logout failed:", error);
            throw error;
        }finally {
            set((state) => ({ ...state, loading:false }))
        }
    },

    Register: async (name: string, email: string, password: string) => {
        set((state) => ({ ...state, loading:true }))
        try {
            const result = await account.create(ID.unique(), email, password, name);
            const session = await account.get();
            set({ user: session as User });
        } catch (error) {
            console.error("Register failed:", error);
        }finally {
            set((state) => ({ ...state, loading:false }))
        }
    }
}))

export default useAuthStore;

