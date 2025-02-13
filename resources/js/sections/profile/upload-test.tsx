import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ImageUpload } from "./image-upload";// Adjust the import path
import { Button, Box } from "@mui/material";
import defaultImg from "../../../assets/images/blank-profile-picture.webp";
import { router } from '@inertiajs/react'

const ImageUploadFormTest = ({ imageUrl }) => {
 console.log(imageUrl, 'regrd')
    const { data, setData, post, progress } = useForm({
      image: null,
    })

    function submit(e) {
      e.preventDefault()
      post('/upload-image')
    }

    return (
      <form onSubmit={submit}>
        <img src={imageUrl || defaultImg} alt="" />
        <input type="file" onChange={e => setData('image', e.target.files[0])} />
        {progress && (
          <progress value={progress.percentage} max="100">
            {progress.percentage}%
          </progress>
        )}
        <button type="submit">Submit</button>
      </form>
    )
};

export default ImageUploadFormTest;