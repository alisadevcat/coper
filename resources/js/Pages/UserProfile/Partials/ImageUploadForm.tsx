import { memo } from "react";
import { route } from "ziggy-js";
import Grid from "@mui/material/Grid2";
import { ImageUpload } from "@/Components/uploads/image-upload";
import { Button, Box } from "@mui/material";
import { usePage, useForm } from "@inertiajs/react";
import { FlashMessageType } from "@/types";
import { Transition } from "@headlessui/react";

type imageDataType = {
    imageData: {
        file_url: string;
    };
};

const ImageUploadForm = ({ imageData }) => {
    const { flash } = usePage<{ flash: FlashMessageType }>().props;
    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            image: null,
        });
    const { file_url } = imageData;

    const handleImageChange = (file) => {
        setData("image", file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("upload.image"), {
            onSuccess: () => {
                console.log("Image uploaded successfully!");
            },
            onError: (errors) => {
                console.error("Error uploading image:", errors);
            },
        });
    };

    return (
        <Grid size={{ xs: 12 }}>
            <form onSubmit={handleSubmit}>
                <ImageUpload
                    handleImageChange={handleImageChange}
                    imageUrl={file_url}
                />
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
                            {processing ? "Uploading..." : "Upload Image"}
                        </Button>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p>Image Uploaded</p>
                        </Transition>
                    </Box>
                </Grid>
            </form>
        </Grid>
    );
};

export default memo(ImageUploadForm);
