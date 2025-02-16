import { useState, useCallback, memo } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { useDropzone } from "react-dropzone";
import { Iconify } from "@/Components/iconify";
import defaultImg from "assets/images/blank-profile-picture.webp";

const UploadCard = styled(Card)({
    maxWidth: 500,
    margin: "1rem auto",
    padding: "1rem",
});

const DropZone = styled(Box)(({ theme, isDragActive }) => ({
    border: `2px dashed ${isDragActive ? theme.palette.primary.main : "#ccc"}`,
    borderRadius: "4px",
    padding: "1.5rem",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: isDragActive ? "#f5f5f5" : "transparent",
}));

const PreviewContainer = styled(Box)({
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    "& img": {
        maxWidth: "100%",
        maxHeight: "400px",
        objectFit: "contain",
    },
});

export const ImageUpload = memo(({ handleImageChange, imageUrl }) => {
    const [preview, setPreview] = useState(imageUrl || defaultImg);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback(
        (acceptedFiles, rejectedFiles) => {
            if (rejectedFiles.length > 0) {
                setError("Please upload a valid file under 3MB");
                return;
            }
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                const previewUrl = URL.createObjectURL(file);
                setPreview(previewUrl);
                handleImageChange(file); // Pass the file to the parent component
            }
        },
        [handleImageChange]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpg", ".jpeg", ".png", ".gif"],
        },
        maxSize: 3 * 1024 * 1024,
        multiple: false,
    });

    return (
        <UploadCard>
            <CardContent>
                <PreviewContainer>
                    <img src={preview} alt="Preview" />
                </PreviewContainer>
                <Typography variant="h6" paddingY="0.5rem">
                    Upload Your Photo
                </Typography>
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ pt: "1rem" }}
                >
                    Allowed: .jpeg, .jpg, .png, .gif max size of 3 Mb
                </Typography>
                <DropZone {...getRootProps()} isDragActive={isDragActive}>
                    <input {...getInputProps()} />
                    <Iconify
                        width={24}
                        icon="material-symbols:download"
                        style={{ marginBottom: "0.5rem" }}
                    />
                    <Typography>
                        {isDragActive ? "Drop here" : "Drag & drop files here"}
                    </Typography>
                </DropZone>

                <Snackbar
                    open={!!error}
                    autoHideDuration={4000}
                    onClose={() => setError(null)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert
                        onClose={() => setError(null)}
                        severity="error"
                        variant="filled"
                    >
                        {error}
                    </Alert>
                </Snackbar>
            </CardContent>
        </UploadCard>
    );
});
