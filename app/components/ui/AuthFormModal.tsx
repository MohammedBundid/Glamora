import useAuthStore from "@/app/stores/authStore"
import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PulseLoader } from "react-spinners";
import { Bounce, toast, ToastContainer } from "react-toastify";
import useAlertStore from "../../stores/AlertStore";


const AuthFormModal = () => {
    const { isModalFormOpen, modalFormType, toggleFormType, toggleModal, toggleFormModal, loading, login, Register } = useAuthStore();
    const { onOpen } = useAlertStore();
    
    const schema = z.object({
        name: z.string().min(5, "Name is too short").optional(),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password is too short"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
      });
    
    const onSubmit = async (data: { email: string; password: string; name?: string }) => {
        // console.log(data)
        try {
            if (modalFormType === "login") {
                await login(data.email, data.password);
                onOpen("Login successful!", "success"); // Pass message and type
                toggleFormModal();
                toggleModal();
            } else {
                await Register(data.name!, data.email, data.password);
                onOpen("Registration successful!", "success"); // Pass message and type
                toggleFormModal();
                toggleModal();
            }
        } catch (error) {
            console.error(error);
            onOpen(error.message, "error");
        }
    
    };


  return (
    <AnimatePresence>
        {isModalFormOpen && (
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="absolute -bottom-[400px] right-0 sm:right-[30%] z-20 w-full sm:w-[450px] h-[400px] sm:h-[400px] bg-blue_munsell-300  py-2 px-4 flex flex-col"
            >
                    {modalFormType === 'login' ? (
                        <div className="flex space-x-4 mx-auto">
                            <p className="text-lg font-bold text-center border-b-2 pb-2 duration-200 hover:cursor-pointer">login</p>
                            <p className="text-lg font-bold text-center hover:cursor-pointer " onClick={toggleFormType}>register</p>
                        </div>
                    ): (
                        <div className="flex space-x-4 mx-auto">
                            <p className="text-lg font-bold text-center hover:cursor-pointer" onClick={toggleFormType}>login</p>
                            <p className="text-lg font-bold text-center border-b-2 pb-2 duration-200 hover:cursor-pointer">register</p>
                        </div>
                    )}
                    
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-1 w-full h-full">
                {modalFormType !== 'login' && (
                    <>
                        <label htmlFor="name" className=" font-semibold ml-auto">Username</label>
                        <input {...register("name")} placeholder="Name" className="px-4 py-2 rounded-md" />
                        {errors.name && <p className="text-red-200 font-semibold">{errors.name.message}</p>}
                    </>
                )}

                <label htmlFor="email" className=" font-semibold ml-auto">Email</label>
                <input {...register("email")} type="email" placeholder="Email" className="px-4 py-2 rounded-md" />
                {errors.email && <p className="text-red-200 font-semibold">{errors.email.message}</p>}

                <label htmlFor="password" className=" font-semibold ml-auto">Password</label>
                <input {...register("password")} type="password" placeholder="Password" className="px-4 py-2 rounded-md" />
                {errors.password && <p className="text-red-200 font-semibold">{errors.password.message}</p>}

                <button disabled={loading} type="submit" className="px-4 py-2 rounded-md bg-midnight_green-500 text-white hover:bg-midnight_green-400 duration-200">
                    {loading ? <PulseLoader color="#fff" size={8} /> : 'Submit'}
                </button>
                </form>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default AuthFormModal