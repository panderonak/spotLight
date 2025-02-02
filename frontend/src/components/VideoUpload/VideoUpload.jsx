import { useRef, useState } from "react";
import { Input } from "../../components";
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

  const [thumbnailPreview, setThumbnailPreview] = useState(
    "https://picsum.photos/200"
  );

  const thumbnailFileInputRef = useRef(null);

  const handleThumbnailFileChange = (evt) => {
    const image = evt.target.files;
    if (image.length > 0) {
      setThumbnail(image[0]);
      console.log("Image dropped:", image[0]);
    } else {
      setMessage("Please drop a valid image file");
    }
  };

  const handleThumbnailDrop = (evt) => {
    const image = e.dataTransfer.files;
    if (image.length > 0) {
      setThumbnail(image[0]);
      console.log("Image dropped:", image[0]);
    } else {
      setMessage("Please drop a valid image file");
    }
  };

  const { register, handleSubmit } = useForm();

  const uplaodVideo = () => {};

  return (
    <div class="h-full overflow-auto border bg-[#fff]">
      <div class="flex items-center justify-between border-b p-4 bg-pink-400">
        <h2 class="text-xl font-semibold">Upload Videos</h2>
        <button class="group/btn mr-1 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
          Save
        </button>
      </div>
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4 bg-blue-400">
        <div
          class="w-full rounded-2xl border-2 border-dashed border-[#d1d3d4] px-4 py-12 text-center bg-orange-400"
          onClick={() => videoFileInputRef.current.click()}
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={handleVideoDrop}
        >
          <span class="mb-4 inline-block w-24 rounded-full bg-black p-5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              ></path>
            </svg>
          </span>
          <h6 class="mb-2 font-semibold">Upload video</h6>
          <p class="mb-2">Click to upload or drag and drop</p>
          <p class="text-gray-400">Maximum file size: 100 MB</p>
          <p class="text-gray-400">
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
          class="w-full rounded-2xl border-2 border-dashed border-[#d1d3d4] px-4 py-12 text-center"
          onClick={() => thumbnailFileInputRef.current.click()}
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={handleThumbnailDrop}
        >
          <span class="mb-4 inline-block w-24 rounded-full bg-black p-5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-image-up"
            >
              <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
              <path d="m14 19.5 3-3 3 3" />
              <path d="M17 22v-5.5" />
              <circle cx="9" cy="9" r="2" />
            </svg>
          </span>
          <h6 class="mb-2 font-semibold">Upload thumbnail</h6>
          <p class="mb-2">Click to upload or drag and drop</p>
          <p class="text-gray-400">Maximum file size: 10 MB</p>

          <input
            type="file"
            name="thumbnail"
            accept="image/jpeg, image/png"
            className="hidden"
            ref={thumbnailFileInputRef}
            required="true"
            onChange={handleThumbnailFileChange}
          />
        </div>

        <div class="w-full bg-green-400">
          <Input
            label="Title*"
            placeholder="Enter video title here"
            {...register("title", {
              minLength: 50,
              maxLength: 75,
              required: true,
            })}
          />
        </div>
        <div class="w-full bg-green-400">
          <label for="desc" class="mb-1 inline-block">
            Description
            <sup>*</sup>
          </label>
          <textarea
            id="desc"
            class="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
