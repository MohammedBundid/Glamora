'use client'

import { useEffect } from "react";
import useAlertStore from "../../stores/AlertStore";
import { AnimatePresence, motion } from "framer-motion";

const Alert = () => {
    const { isOpen, message, type, duration, onClose } = useAlertStore();

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose(); // Automatically close after duration
            }, duration);
            return () => clearTimeout(timer); // Cleanup timer on unmount or re-trigger
        }
    }, [isOpen, duration, onClose]);

    if (!isOpen) return null;
    const variantStyles = {
        success: 'bg-green-300 text-green-800',
        error: 'bg-red-300 text-red-800',
        warning: 'bg-yellow-500',
        info: 'bg-blue-300 text-blue-800',
        default: 'bg-gray-300 text-gray-800',
    }
  return (
    <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -50 }} 
            className={`absolute top-0 right-0 p-3 font-semibold w-[30%] ${variantStyles[type]}`}>{message}</motion.div>
        )}
    </AnimatePresence>
  )
}

export default Alert