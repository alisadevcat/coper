import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { Iconify } from "@/Components/iconify";

const UploadBox = styled(Box)({
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    transition: "border 0.3s ease",
    "&:hover": { border: "2px dashed #1976d2" },
});

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const VALID_FILE_TYPES = ["pdf", "jpg", "jpeg", "png"];

const FileDropzone = ({ onFileSelected, onError }) => {
    const onDrop = useCallback((acceptedFiles) => {
        try {
            const newFiles = acceptedFiles.map((file) => {
                const extension = file.name.split(".").pop().toLowerCase();
                if (!VALID_FILE_TYPES.includes(extension)) {
                    throw new Error("Invalid file type. Allowed: PDF, JPG, JPEG, PNG.");
                }
                if (file.size > MAX_FILE_SIZE) {
                    throw new Error("File size exceeds 5MB limit.");
                }

                return {
                    file,
                    preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
                };
            });
            if (newFiles.length > 0) {
                const file = newFiles[0];
                onFileSelected(file);
            }

        } catch (error) {
            onError(error.message); // Pass error to the parent component
        }
    }, [onFilesSelected, onError]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop,  accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "application/pdf": [".pdf"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
});

    return (
        <UploadBox {...getRootProps()} sx={{ mb: 3 }}>
            <input {...getInputProps()} />
            <Iconify width={40} icon="material-symbols:download" color="#757575" />
            <Typography variant="h6" sx={{ mt: 2 }}>
                {isDragActive ? "Drop files here" : "Drag & drop files or click to select"}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Supported formats: PDF, JPG, JPEG, PNG (Max 5MB per file)
            </Typography>
        </UploadBox>
    );
};

export default FileDropzone;
