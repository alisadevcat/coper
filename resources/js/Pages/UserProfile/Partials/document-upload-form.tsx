import { route } from "ziggy-js";
import Grid from "@mui/material/Grid2";
import FileUpload from "../../../Components/uploads/document-upload";
import { Button, Box, Typography } from "@mui/material";
import { usePage, useForm } from "@inertiajs/react";
import { FlashMessageType } from "@/types";
import { Transition } from "@headlessui/react";
import { DocumentFileType } from "../Edit";

export type DocumentUploadFormProps = {
    documentData: DocumentFileType;
};
const DocumentUploadForm = ({ documentData }: DocumentUploadFormProps) => {
    const { flash } = usePage<{ flash: FlashMessageType }>().props;
    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            file: null,
        });

    const handleFileChange = (file) => {
        console.log(file, "file1", data);
        setData("file", file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("upload.document"), {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                console.log("File uploaded successfully!");
            },
            onError: (errors) => {
                console.error("Error uploading file:", errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h5" paddingBottom="1rem">
                        Documents
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                <FileUpload
                    handleFileChange={handleFileChange}
                    documentFile={documentData}
                />
                </Grid>
                <Grid container justifyContent="flex-end" size={{ xs: 12 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={processing}
                            sx={{ mt: 2 }}
                        >
                            {processing ? "Uploading..." : "Upload Document"}
                        </Button>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p>File Uploaded</p>
                        </Transition>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default DocumentUploadForm;
