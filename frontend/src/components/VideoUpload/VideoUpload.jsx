import { useRef, useState } from "react";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function VideoUpload() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const videoFileInputRef = useRef(null);

  const [videoFile, setVideoFile] = useState();

  const handleVideoFileChange = (evt) => {
    const video = evt.target.files;
    if (video.length > 0) {
      setVideoFile(video[0]);
      console.log("Video select:", video[0]);
    } else {
      setMessage("Please select a valid video file");
    }
  };

  const handleVideoDrop = (evt) => {
    const video = e.dataTransfer.files;
    if (video.length > 0) {
      setVideoFile(video[0]);
      console.log("Video dropped:", video[0]);
    } else {
      setMessage("Please drop a valid video file");
    }
  };

  const [thumbnail, setThumbnail] = useState(null);

  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const thumbnailFileInputRef = useRef(null);

  const handleThumbnailFileChange = (evt) => {
    const image = evt.target.files;
    if (image.length > 0) {
      setThumbnail(image[0]);
      setThumbnailPreview(URL.createObjectURL(image[0]));
      console.log("Image dropped:", image[0]);
    } else {
      setMessage("Please drop a valid image file");
    }
  };

  const handleThumbnailDrop = (evt) => {
    const image = e.dataTransfer.files;
    if (image.length > 0) {
      setThumbnail(image[0]);
      setThumbnailPreview(URL.createObjectURL(image[0]));
      console.log("Image dropped:", image[0]);
    } else {
      setMessage("Please drop a valid image file");
    }
  };

  const { register, handleSubmit } = useForm();

  const handleVideoUpload = (data) => {
    console.log(data);
    setMessage("");
  };

  return (
    <div className="h-full overflow-auto border bg-[#fff]">
      <div className="flex items-center justify-between border-b p-4 bg-pink-400">
        <h2 className="text-xl font-semibold">Upload Videos</h2>

        <Button type="submit">Save</Button>
      </div>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4 bg-blue-400">
        <div
          className="w-full rounded-2xl border-2 border-dashed border-[#d1d3d4] px-4 py-12 text-center bg-orange-400"
          onClick={() => videoFileInputRef.current.click()}
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={handleVideoDrop}
        >
          <span className="mb-4 inline-block w-24 rounded-full bg-black p-5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              ></path>
            </svg>
          </span>
          <h6 className="mb-2 font-semibold">Upload video</h6>
          <p className="mb-2">Click to upload or drag and drop</p>
          <p className="text-gray-400">Maximum file size: 100 MB</p>
          <p className="text-gray-400">
            Your videos will be private untill you publish them
          </p>
          <input
            type="file"
            name="videoFile"
            accept="video/mp4, video/avi, video/mov, video/webm"
            className="hidden sr-only"
            ref={videoFileInputRef}
            required="true"
            onChange={handleVideoFileChange}
          />
        </div>

        <div
          className="relative h-80 w-full rounded-2xl border-2 border-dashed border-[#d1d3d4] text-center bg-red-400"
          onClick={() => thumbnailFileInputRef.current.click()}
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={handleThumbnailDrop}
        >
          <div className="absolute -z-20 h-full w-full bg-orange-400 text-center">
            <span className="mb-4 inline-block w-24 rounded-full bg-black p-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-image-up"
              >
                <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                <path d="m14 19.5 3-3 3 3" />
                <path d="M17 22v-5.5" />
                <circle cx="9" cy="9" r="2" />
              </svg>
            </span>
            <h6 className="mb-2 font-semibold">Upload thumbnail</h6>
            <p className="mb-2">Click to upload or drag and drop</p>
            <p className="text-gray-400">Maximum file size: 10 MB</p>
          </div>

          <div className="absolute z-20 h-full rounded-2xl bg-pink-400 w-full">
            <input
              type="file"
              name="thumbnail"
              accept="image/jpeg, image/png"
              className="hidden"
              ref={thumbnailFileInputRef}
              required="true"
              onChange={handleThumbnailFileChange}
            />
            <img
              src={`${thumbnailPreview}`}
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(handleVideoUpload)}>
          <div className="w-full bg-green-400">
            <Input
              label="Title*"
              placeholder="Enter video title here"
              {...register("title", {
                required: "Title is needed.",
                minLength: {
                  value: 50,
                  message: "Title must be at least 50 characters long.",
                },
                maxLength: {
                  value: 75,
                  message: "Title cannot be longer than 75 characters.",
                },
              })}
            />
          </div>
          <div className="w-full bg-green-400">
            <label
              htmlFor="desc"
              className="mb-3 inline-block pl-1 text-base font-normal text-[#2d2d2d]"
            >
              Description
              <sup>*</sup>
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 80,
                  message: "Description must be at least 80 characters",
                },
                maxLength: {
                  value: 150,
                  message: "Description cannot be longer than 150 characters",
                },
              })}
              id="desc"
              className="h-40 resize-none   
            w-full rounded-xl border border-[#C8C8C8] bg-[#FCFCFC] px-5 py-2.5 text-base font-normal text-black outline-none duration-200 placeholder:font-light placeholder:text-[#7c7b7d] focus:border-black"
            ></textarea>
          </div>
          <div>
            <Button type="submit">Upload</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
