import { useState } from "react";
import { router } from "@inertiajs/react";
import Grid from "@mui/material/Grid2";
import {
    Box,
    Button,
    Typography,
    Snackbar,
    Alert,
    CircularProgress,
} from "@mui/material";

import FileDropzone from "./file-drop-zone";
import { PreviewCard } from "./file-preview-card";

const DocumentUpload = () => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

    const handleFilesSelected = (newFiles) => {
        setFiles((prev) => [...prev, ...newFiles]);
    };

    const handleFileError = (errorMessage) => {
        setAlert({ open: true, message: errorMessage, severity: "error" });
    };

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
                setAlert({ open: true, message: "Documents uploaded successfully!", severity: "success" });
                setFiles([]);
            },
            onError: (errors) => {
                setAlert({ open: true, message: errors.message || "Upload failed. Please try again.", severity: "error" });
            },
            onFinish: () => setUploading(false),
        });
    };

    return (
        <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Please upload your ID document
            </Typography>
            <Typography gutterBottom>You can upload your ID, passport, or driving license.</Typography>

            <Grid container spacing={2}>
                {files.map((file, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <PreviewCard file={file} index={index} onRemove={handleRemoveFile} />
                    </Grid>
                ))}
            </Grid>

            <FileDropzone onFilesSelected={handleFilesSelected} onError={handleFileError} />

            {files.length > 0 && (
                <Button
                    variant="contained"
                    onClick={handleUpload}
                    disabled={uploading}
                    sx={{ mt: 3 }}
                    startIcon={uploading ? <CircularProgress size={20} /> : null}
                >
                    {uploading ? "Uploading..." : "Upload Documents"}
                </Button>
            )}

            <Snackbar open={alert.open} autoHideDuration={6000} onClose={() => setAlert({ ...alert, open: false })}>
                <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default DocumentUpload;