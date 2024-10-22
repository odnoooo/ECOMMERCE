"use client";

import api from "axios";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

interface AddProductImagesProps {
  images: string[];
  setImages: (images: string[]) => void;
}

export const AddProductImages = ({
  images,
  setImages,
}: AddProductImagesProps) => {
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) handleUpload(files[0]);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const newImageUrl = res.data.secure_url as string;
      setImages([...images, newImageUrl]);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };
  // const handleRemoveImage = (imageURL: string) => {
  //   setImages(images.filter((img) => img !== imageURL));
  // };

  const handleRemoveImage=async(imageURL:string)=>{
    try{
      await api.delete(`/images/delete`,{data:{url:imageURL}});

      setImages(images.filter(img=>img!==imageURL));
    }catch(error){
      console.error("Image deletion failed:",error);
    }
  }

  return (
    <div>
      <div className="p-4 space-y-4 bg-white rounded-xl">
        <p>Бүтээгдэхүүний зураг</p>
        <div className="p-4 h-[130px] w-full border grid grid-cols-4 gap-4 items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-32 h-32 rounded overflow-hidden group"
            >
              <Image
                src={image}
                fill
                objectFit="cover"
                alt={`Uploaded image ${index + 1}`}
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-gray-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleRemoveImage(image)}
              >
                x
              </button>
            </div>
          ))}
          {images.length < 4 && (
            <label className="flex items-center justify-center w-32 h-32 border rounded-lg cursor-pointer">
              {uploading && images.length === 3 ? (
                <div className="h-5 w-5 border-2 rounded-full border-b-black animate-spin"></div>
              ) : (
                <div className="p-1 bg-gray-300 rounded-full">
                  <FaPlus />
                </div>
              )}
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}

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
              onClick={(e) => (e.currentTarget.value = "")}
            />
          </div>
        </div>
        <button
          type="button"
          // onClick={handleUpload}
          disabled={uploading}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};
