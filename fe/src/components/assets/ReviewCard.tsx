"use client";

import React from "react";
import { ReviewStars } from "./ReviewStars";

type ReviewCardProps = {
  comment: string;
  star: number;
  username: string;
};

export const ReviewCard = ({ comment, star, username }: ReviewCardProps) => {
  return (
    <div className="text-sm">
      <div></div>
      <div className="fkex gap-1 mt-4 mb-1">
        <h1>{username}</h1>
        <ReviewStars percent={star} size={16} />
      </div>
      <p className="text-gray-500">{comment}</p>
    </div>
  );
};
