'use client'

import useAuthStore from "@/app/stores/authStore"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import FileUploader from "./FileUploader"
import useAdminStore from "@/app/stores/adminStore"
import { PulseLoader } from "react-spinners"
import useMediaStore from "@/app/stores/mediaStore"
import useAlertStore from "@/app/stores/AlertStore"

const PanelFormModal = () => {
    const { isPanelModalOpen, togglePanelModal} = useAuthStore()
    const { createEvent, loading } = useAdminStore();
    const { mediaUrl } = useMediaStore()
    const { onOpen } = useAlertStore()

    const schema = z.object({
        name: z.string().min(5, 'Event name is too short'),
        description: z.string().max(50, 'Event description is too long'),
        discount: z.number().min(10, 'Discount amount is too low').max(90, 'Discount cannot exceed 90%'),
        status: z.enum(['active', 'off', 'draft', 'expired']),
        expiry_date: z.string().refine((val) => {
            const selectedDate = new Date(val);
            const today = new Date();
            return selectedDate > today;
        }, { message: 'Expiry date must be in the future' })
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
        const salesData = {
            title: data.name,
            description: data.description,
            sale_status: data.status,
            discount: data.discount,
            expiry_date: new Date(data.expiry_date),
            mediaUrl: mediaUrl || 'some cdn string',
        };

        try {
            await createEvent(salesData);
            onOpen("event created", "success")
            togglePanelModal(); 
        } catch (error) {
            console.error('Event creation failed:', error);
            onOpen(error.message, "error")
        }
    };

    return (
        <AnimatePresence>
            {isPanelModalOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="w-full h-full overflow-auto absolute top-0 bg-midnight_green-100 left-0 p-2"
                >
                    <button onClick={togglePanelModal} className="px-4 w-24 py-2 rounded-md bg-red-400 text-red-950 font-medium float-end">Close</button>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-3/4 mx-auto min-h-full">
                        <label htmlFor="name" className="text-white">Event Name</label>
                        <input
                            {...register('name')}
                            type="text"
                            placeholder="e.g Summer Sale"
                            className="p-2 rounded-md"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                        <label htmlFor="description" className="text-white">Event Description</label>
                        <textarea
                            {...register('description')}
                            rows={5}
                            placeholder="e.g Big summer sale on apparel!"
                            className="p-2 rounded-md resize-none"
                        />
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                        <label htmlFor="status" className="text-white">Event Status</label>
                        <select
                            {...register('status')}
                            className="p-2 rounded-md"
                        >
                            <option value="active">Active</option>
                            <option value="off">Off</option>
                            <option value="draft">Draft</option>
                            <option value="expired">Expired</option>
                        </select>

                        <label htmlFor="discount" className="text-white">Event Discount</label>
                        <input
                            {...register('discount', {valueAsNumber: true})}
                            type="number"
                            placeholder="e.g 15"
                            className="p-2 rounded-md"
                            min="10"
                            max="90"
                        />
                        {errors.discount && <p className="text-red-500">{errors.discount.message}</p>}

                        <label htmlFor="expiry_date" className="text-white">Expiry Date</label>
                        <input
                            {...register('expiry_date')}
                            type="date"
                            className="p-2 rounded-md"
                        />
                        {errors.expiry_date && <p className="text-red-500">{errors.expiry_date.message}</p>}

                        <FileUploader />

                        <button disabled={loading} type="submit" className="bg-mint-400 hover:bg-mint-600 duration-200 text-white p-2 rounded-md mt-4">
                            {loading ? <PulseLoader size={8} color="#fff" /> : 'Submit Event'}
                        </button>
                    </form>
                </motion.div>   
            )}
        </AnimatePresence>
    );
};

export default PanelFormModal;