'use client'

import useMediaStore from "@/app/stores/mediaStore";
import Image from "next/image";
import { useRef } from "react";
import { FiUpload } from "react-icons/fi";

const FileUploader = () => {
    const { isUploading, mediaUrl, uploadMedia } = useMediaStore();
    const uploadRef = useRef<HTMLInputElement>(null);

    // Trigger the hidden file input when the upload button is clicked
    const handleClick = () => {
        uploadRef.current?.click();
    };

    // Handle file upload when a file is selected
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            try {
                await uploadMedia(file); // Upload the file using the store's `uploadMedia` method
                if (mediaUrl) {
                    onFileUpload(mediaUrl); // Send the mediaUrl to the parent
                }
            } catch (error) {
                console.error('file upload failed', error.message)
            }
        }
    };

    return (
        <div className="w-full h-[200px] space-x-4 rounded-lg border-2 border-dotted hover:border-blue_munsell-700 duration-200 flex justify-center items-center">
            {/* Hidden File Input */}
            <input
                type="file"
                onChange={handleFileChange}
                disabled={isUploading}
                className="hidden"
                ref={uploadRef}
            />

            {/* Upload Button */}
            <div
                className="border px-8 py-4 rounded-md hover:bg-mint-300 duration-200"
                onClick={handleClick}
            >
                <FiUpload size={48} className="text-mint-600 hover:cursor-pointer" />
            </div>

            {/* Upload Progress */}
            {isUploading && (
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-mint-600">Uploading... </p>
                    <div className="w-[100px] h-4 border rounded-full duration-200 bg-mint-600 animate-pulse"></div>
                </div>
            )}

            {/* Uploaded File Preview */}
            {mediaUrl && (
                <div className="mt-4">
                    <p className="text-mint-600 duration-200">Upload Complete:</p>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
