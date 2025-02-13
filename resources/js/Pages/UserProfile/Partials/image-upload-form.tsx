import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ImageUpload } from "@/Components/uploads/image-upload";
import { Button, Box } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { FlashMessageType } from "@/types";

type imageUrlType = {
    imageUrl: string;
};

const ImageUploadForm = ({ imageUrl }: imageUrlType) => {
    const { flash } = usePage<{ flash: FlashMessageType }>().props;
    const { data, setData, post, processing, errors } = useForm({
        image: null,
    });

    const handleImageChange = (file) => {
        setData("image", file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("upload-image"), {
            onSuccess: () => {
                console.log("Image uploaded successfully!");
            },
            onError: (errors) => {
                console.error("Error uploading image:", errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ImageUpload
                handleImageChange={handleImageChange}
                imageUrl={imageUrl}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={processing}
                sx={{ mt: 2 }}
            >
                {processing ? "Uploading..." : "Upload Image"}
            </Button>
            {flash.message && <div>{flash.message}</div>}
        </form>
    );
};

export default ImageUploadForm;
