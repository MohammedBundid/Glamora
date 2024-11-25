'use client'

import useAuthStore from "@/app/stores/authStore";
import Link from "next/link"
import { useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu"
import AuthModal from "./AuthModal";
import AuthFormModal from "./AuthFormModal";
import useAlertStore from "../../stores/AlertStore";
import Alert from "./Alert";

const Navbar = () => {
    const { fetchUser, user, toggleModal } = useAuthStore();
    const { isOpen, message, type } = useAlertStore();


    useEffect(() => {
        fetchUser()
    },[fetchUser])
  return (
    <div className="flex justify-between p-3 text-carolina_blue-500 items-center relative">

        <div className="text-3xl capitalize font-bold">
            <Link href={'/'}>glamora</Link>
        </div>

        <nav className="text-lg flex items-center space-x-4">
            <Link href={'/'}>home</Link>
            <Link href={'/'}>shop</Link>
            <Link href={'/'} className="flex items-center space-x-2">
                <LuShoppingCart />
                <span>cart</span>
            </Link>
         
            <button onClick={toggleModal} className="px-4 py-1 rounded-md border border-carolina_blue-500 hover:bg-carolina_blue-500 hover:text-white duration-200">account</button>
        </nav>

        <AuthModal />
        <AuthFormModal />
        <Alert />

    </div>
  )
}

export default Navbar