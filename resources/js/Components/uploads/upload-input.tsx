import { useState, useCallback } from "react";
import { router } from "@inertiajs/react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid2";
import {
    Box,
    Button,
    Typography,
    Snackbar,
    Alert,
    IconButton,
    CircularProgress,
    Card,
    CardContent,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Iconify } from "../iconify";
import defaultmg from "../../../assets/images/blank-profile-picture.webp";

const UploadBox = styled(Box)({
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    transition: "border 0.3s ease",
    "&:hover": { border: "2px dashed #1976d2" },
});

const PreviewCard = styled(Card)({
    margin: "10px",
    position: "relative",
});



const validateFile = (file) => {
    const validTypes = [".pdf", ".jpg", ".jpeg", ".png"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (
        !validTypes.some((type) => file.name.toLowerCase().endsWith(type))
    ) {
        throw new Error(
            "Invalid file type. Supported types: PDF, JPG, JPEG, PNG"
        );
    }
    if (file.size > maxSize) {
        throw new Error("File size exceeds 5MB limit");
    }
};

const DocumentUpload = ({ documentPath }) => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "info",
    });


    const onDrop = useCallback(
        (acceptedFiles) => {
            try {
                const newFiles = acceptedFiles.map((file) => {
                    validateFile(file);
                    return {
                        file,
                        preview: file.type.startsWith("image/")
                            ? URL.createObjectURL(file)
                            : null,
                    };
                });

                const totalSize = [...files, ...newFiles].reduce(
                    (sum, item) => sum + item.file.size,
                    0
                );
                if (totalSize > 15 * 1024 * 1024) {
                    throw new Error("Total upload size exceeds 15MB limit");
                }

                setFiles((prev) => [...prev, ...newFiles]);
            } catch (error) {
                setAlert({
                    open: true,
                    message: error.message,
                    severity: "error",
                });
            }
        },
        [files]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
    });

    const handleRemoveFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleUpload = () => {
        if (files.length === 0) return;

        setUploading(true);
        const formData = new FormData();
        files.forEach(({ file }) => formData.append("files[]", file));

        router.post("/upload", formData, {
            forceFormData: true,
            onSuccess: () => {
                setAlert({
                    open: true,
                    message: "Documents uploaded successfully!",
                    severity: "success",
                });
                setFiles([]);
            },
            onError: (errors) => {
                setAlert({
                    open: true,
                    message:
                        errors?.message || "Upload failed. Please try again.",
                    severity: "error",
                });
            },
            onFinish: () => setUploading(false),
        });
    };

    return (
        <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
            <Typography variant="h4" gutterBottom>
            Please upload your ID document
            </Typography>
            <Typography gutterBottom>
                You can upload your id, passport or driving license
            </Typography>


            <Grid container spacing={2}>
                {files.map((file, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <PreviewCard>
                            <CardContent>
                                {file.preview ? (
                                    <img
                                        src={file.preview}
                                        alt={file.file.name}
                                        style={{
                                            width: "100%",
                                            height: 140,
                                            objectFit: "cover",
                                        }}
                                    />
                                ) : (
                                    <Iconify
                                        width={40}
                                        icon="mdi:file-outline"
                                    />
                                )}
                                <Typography noWrap>{file.file.name}</Typography>
                                <Typography
                                    variant="caption"
                                    color="textSecondary"
                                >
                                    {(file.file.size / (1024 * 1024)).toFixed(
                                        2
                                    )}
                                    MB
                                </Typography>
                                <IconButton
                                    size="small"
                                    onClick={() => handleRemoveFile(index)}
                                    sx={{
                                        position: "absolute",
                                        top: 5,
                                        right: 5,
                                    }}
                                >
                                    <Iconify icon="material-symbols:close" />
                                </IconButton>
                            </CardContent>
                        </PreviewCard>
                    </Grid>
                ))}
            </Grid>


            <UploadBox {...getRootProps()} sx={{ mb: 3 }}>
                <input {...getInputProps()} />
                <Iconify
                    width={40}
                    icon="material-symbols:download"
                    color="#757575"
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    {isDragActive
                        ? "Drop files here"
                        : "Drag & drop files or click to select"}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 1 }}
                >
                    Supported formats: PDF, JPG, JPEG, PNG (Max 5MB per file)
                </Typography>
            </UploadBox>

            {files.length > 0 && (
                <Button
                    variant="contained"
                    onClick={handleUpload}
                    disabled={uploading}
                    sx={{ mt: 3 }}
                    startIcon={
                        uploading ? <CircularProgress size={20} /> : null
                    }
                >
                    {uploading ? "Uploading..." : "Upload Documents"}
                </Button>
            )}

            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                onClose={() => setAlert({ ...alert, open: false })}
            >
                <Alert onClose={() => setAlert({ ...alert, open: false })}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default DocumentUpload;

