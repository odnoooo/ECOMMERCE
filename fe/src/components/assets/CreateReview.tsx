"use client";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { ReviewStars } from "./ReviewStars";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "@/axios";
import { useAuth } from "../utils/AuthProvider";

interface CreateReviewProps {
  productId: string | string[];
}
export const CreateReview = ({ productId }: CreateReviewProps) => {
  const [star, setStar] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const { user } = useAuth();
  const token = user.token;

  const CreateReview = async () => {
    try {
      const response = await api.post(
        "/review",
        { productId, star, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Login failed.");
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };
  const handleCreate = () => {
    if (comment === "") return;
    setComment("");
    setStar(5);
    CreateReview();
  };
  return (
    <div
      className={`bg-gray-100 p-6 rounded-lg text-sm space-y-6 mt-6 ${
        !user?._id ? "hidden" : null
      }`}
    >
      <div className="space-y-2">
        <p>Одоор үнэлэх</p>
        <ReviewStars percent={star} size={24} />
      </div>
      <div className="space-y-2">
        <p>Сэтгэгдэл үлдээх:</p>
        <Textarea className="bg-white h-24" placeholder="Энд бичнэ үү" />
      </div>
      <button
        onClick={handleCreate}
        className="px-9 py-2 bg-blue-500 rounded-full text-white"
      >
        {" "}
        Үнэлэх
      </button>
    </div>
  );
};
