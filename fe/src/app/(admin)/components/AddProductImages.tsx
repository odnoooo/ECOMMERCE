"use client";

import axios from "axios";
import { useState, ChangeEvent } from "react";

export const AddProductImages = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Save selected files to state
      await handleUpload(selectedFiles); // Start upload immediately
    }
  };

  const handleUpload = async (selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    const uploadedImageUrls: string[] = [];

    try {
      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append("ProductImage", file); // Append file to formData

        const response = await axios.post(
          "http://localhost:3001/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const uploadedImageUrl = response.data.url; // Get image URL from response
        uploadedImageUrls.push(uploadedImageUrl); // Save image URL
      }

      setImageUrls((prevImageUrls) => [...prevImageUrls, ...uploadedImageUrls]); // Update image URLs state
    } catch (error) {
      console.error("Error uploading images:", error); // Handle errors
    } finally {
      setUploading(false); // Set uploading state to false
    }
  };

  return (
    <div>
      <div className="p-4 space-y-4 bg-white rounded-xl">
        <p>Бүтээгдэхүүний зураг</p>
        <div className="p-4 h-[130px] w-full border grid grid-cols-4 gap-4 items-center">
          {files.map((file, index) => (
            <img
              key={index}
              className="h-[100px] w-[100px] border border-dashed rounded"
              src={URL.createObjectURL(file)}
              alt={`Uploaded preview ${index + 1}`}
            />
          ))}

          <div className="h-10 w-10 rounded-full border flex items-center justify-center cursor-pointer">
            <label htmlFor="image-upload" className="cursor-pointer">
              +
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
              key={files.length} // This ensures the input resets after file selection
            />
          </div>
        </div>
        <button
          onClick={() => handleUpload(files)}
          disabled={uploading}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};
