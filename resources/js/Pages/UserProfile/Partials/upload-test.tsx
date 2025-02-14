import { useForm } from "@inertiajs/react";
import defaultImg from "assets/images/blank-profile-picture.webp";

const ImageUploadFormTest = ({ imageUrl }) => {
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