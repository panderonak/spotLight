import { useRef, useState } from "react";
import { Button, Input, TextArea } from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import videoService from "../../API/video";
import { showModal } from "../../features/videoUploadSlice";
import { useDispatch } from "react-redux";
import { startUploading } from "../../features/videoUploadSlice";
import { uploadComplete } from "../../features/videoUploadSlice";

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

  const dispatch = useDispatch();

  const controller = new AbortController();

  dispatch(startUploading({ controller }));

  const handleVideoUpload = async (data) => {
    console.log(data);
    setMessage("");
    setLoading(false);
    dispatch(startUploading());
    try {
      setLoading(true);
      const videoUploadResponse = await videoService.uploadVideo({
        ...data,
        videoFile,
        thumbnail,
        signal: controller.signal,
      });
      if (videoUploadResponse.success) {
        setMessage("Your video has been uploaded successfully.");
        dispatch(uploadComplete());
      }
    } catch (error) {
      if (error.name === "AbortError") {
        setMessage("Upload canceled."); // If aborted, show cancel message
      } else {
        setMessage(error.message); // Other errors
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full overflow-auto border bg-[#f9fbfc] m-10 rounded-xl shadow-sm drop-shadow-md">
      <div className="flex items-center justify-between p-6 bg-[#f9fbfc]">
        <h2 className="text-2xl font-semibold ">Upload Video</h2>
      </div>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4 bg-[#f9fbfc] mt-12">
        <div
          className="w-full rounded-2xl border-2 border-dashed border-[#d1d3d4] px-4 py-12 text-center bg-white hover:border-[#2b94ce] hover:bg-[#f2f8ff] duration-200 transition-all"
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
          className="relative h-80 w-full rounded-2xl border-2 border-dashed border-[#d1d3d4] text-center bg-white hover:border-[#2b94ce] hover:bg-[#f2f8ff] duration-200 transition-all"
          onClick={() => thumbnailFileInputRef.current.click()}
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={handleThumbnailDrop}
        >
          <div
            className={`${
              thumbnailPreview ? "-z-20" : "z-20"
            } absolute h-full w-full  text-center flex justify-center items-center`}
          >
            <div>
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
          </div>

          <div
            className={`${
              thumbnailPreview ? "z-20" : "-z-20"
            } absolute  h-full rounded-2xl bg-pink-400 w-full`}
          >
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
        <form
          onSubmit={handleSubmit(handleVideoUpload)}
          className="bg-[#f9fbfc]"
        >
          <div className="space-y-8">
            <Input
              label="Title*"
              placeholder="Enter video title here"
              {...register("title", {
                required: true,
              })}
            />

            <TextArea
              label="Description*"
              placeholder="Enter video description here"
              {...register("description", {
                required: true,
              })}
            />
            <div className="py-3 flex justify-end pr-10 pb-11 pt-4">
              <Button type="submit">Upload</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
