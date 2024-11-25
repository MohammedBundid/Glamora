interface Media {
    isUploading: boolean;
    mediaUrl: string;
    setUploading: (uploading: boolean) => void;
    setMediaUrl: (url: string) => void;
    uploadMedia: (file: File) => void;
}

export default Media