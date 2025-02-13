import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ImageUpload } from "./image-upload";// Adjust the import path
import { Button, Box } from "@mui/material";
import defaultImg from "../../../assets/images/blank-profile-picture.webp";
import { router } from '@inertiajs/react'

const ImageUploadForm = ({ photoFile }) => {
    // const previewImage = photoFile ? photoFile : defaultImg;
    const [preview, setPreview] = useState(defaultImg);

    // Initialize Inertia's useForm
    const { data, setData, post, processing, errors } = useForm({
        image: null, // This will hold the uploaded file
    });

    // Handle file change in the ImageUpload component
    const handleImageChange = (file) => {
        setData("image", file); // Update the form data with the new file
        setPreview(URL.createObjectURL(file)); // Set the preview URL
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("upload-image"), {
            onSuccess: () => {
                // Handle success (e.g., show a success message)
                console.log("Image uploaded successfully!");
            },
            onError: (errors) => {
                // Handle errors (e.g., display validation errors)
                console.error("Error uploading image:", errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ImageUpload
                handleImageChange={handleImageChange}
                photoFile={photoFile}
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
        </form>
    );
};

export default ImageUploadForm;