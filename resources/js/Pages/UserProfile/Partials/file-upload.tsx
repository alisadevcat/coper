import { useState, useCallback, memo, useMemo } from "react";
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
import { PreviewCard } from "./file-preview";
import { DocumentFileType } from "../Edit";

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

const FileUpload = memo(({ handleFileChange, documentFile }) => {
    const fileName = useMemo(
        () => (documentFile ? documentFile.file_path.replace("docs/", "") : ""),
        [documentFile]
    );
    const [preview, setPreview] = useState<DocumentFileType | null>(fileName|| null);
    const [error, setError] = useState<null | string>(null);
    const [file, setFile] = useState(null);

    const onDrop = useCallback(
        (acceptedFiles, rejectedFiles) => {
            if (rejectedFiles.length > 0) {
                setError(
                    "Invalid file. Allowed: PDF, JPG, JPEG, PNG (max 5MB)"
                );
                return;
            }
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                setFile(file);
                setPreview(file.name);
                handleFileChange(file);
            }
        },
        [handleFileChange]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "application/pdf": [".pdf"],
        },
        maxSize: 5 * 1024 * 1024, // 5MB
        multiple: false,
    });

    const handleRemoveFile = () => {
        setPreview(null);
        setFile(null);
    };

    return (
        <UploadCard>
            <CardContent>
                <PreviewContainer>
                    {preview && <PreviewCard
                        preview={preview}
                        onRemove={handleRemoveFile}
                    />}
                </PreviewContainer>
                <Typography variant="h6" paddingY="0.5rem">
                    Upload File
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Allowed: .pdf, .jpeg, .jpg, .png | Max size: 5MB
                </Typography>
                <DropZone {...getRootProps()} isDragActive={isDragActive}>
                    <input {...getInputProps()} />
                    <Iconify
                        width={24}
                        icon="material-symbols:download"
                        style={{ marginBottom: "0.5rem" }}
                    />
                    <p>
                        {isDragActive ? "Drop here" : "Drag & drop a file here"}
                    </p>
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
export default FileUpload;
