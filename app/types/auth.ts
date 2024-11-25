import { Models } from "appwrite";

export type User = Models.Account<{
    role?: "admin" | "user"; // Add role-based access if needed
  }>;
  
  export interface AuthState {
    user: User | null;
    isModalOpen: boolean;
    isModalFormOpen: boolean;
    isPanelModalOpen: boolean;
    modalFormType: "login" | "register";
    loading: boolean;
    setUser: (user: User | null) => void;
    fetchUser: () => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    Register: (name: string, email: string, password: string) => Promise<void>;
    toggleModal: () => void;
    toggleFormType: () => void;
    togglePanelModal: () => void;
    setLoading: (loading: boolean) => void;
  }