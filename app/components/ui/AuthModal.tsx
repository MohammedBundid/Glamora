import useAuthStore from "@/app/stores/authStore";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const AuthModal = () => {
    const { user, fetchUser, logout, isModalOpen, toggleFormModal } = useAuthStore();
  return (
    
    <AnimatePresence>
        {isModalOpen && (
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="absolute -bottom-[250px] right-0 z-20 w-[350px] h-[250px] bg-mint-800 rounded-es-lg p-4 flex flex-col"
            >

                <div className="flex items-center">
                    <div className="w-20 h-20 bg-midnight_green-500 rounded-full">

                    </div>

                    {user ? (
                        <div className="ml-4 text-midnight_green-500">
                            <h1 className="text-xl font-bold">{user.name}</h1>
                            <p>{user.email}</p>
                        </div>
                    ) : (
                        <div className="ml-4 text-lg font-semibold text-midnight_green-500 capitalize">
                            <p>login/signup</p>
                            <p>to access your account</p>
                        </div>

                    )}
                </div>

                {user ? (
                    <div className="flex mt-auto space-x-4 items-center">
                            <button className="px-4 py-1 bg-midnight_green-500 text-mint-900 rounded-md hover:bg-mint-500 font-medium duration-200">profile</button>
                            <button onClick={logout} className="px-4 py-1 bg-midnight_green-500 rounded-md  hover:bg-red-200 duration-200 hover:text-black font-medium">logout</button>
                            {user.labels?.includes("admin") && (
                                <Link href={'/dashboard/admin'} className="px-4 py-1 bg-midnight_green-500 rounded-md hover:bg-mint-500 duration-200 hover:text-black font-medium">admin panel</Link>
                            )}
                    </div>
                ): (
                    <button onClick={toggleFormModal} className="px-4 py-1 bg-midnight_green-500 rounded-md mt-auto w-1/2 mx-auto hover:bg-green-300 duration-200 hover:text-black font-medium">login/signup</button>
                )}
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default AuthModal