"use client";

import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

type ReviewStarsProps = {
  percent: number;
  size: number;
};

export const ReviewStars = ({ percent, size }: ReviewStarsProps) => {
  const fullStars = Math.floor(percent);
  const halfStars = percent % 1 >= 0.5;

  return (
    <div className="flex gap-2 text-yellow-300">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={index} style={{ width: size, height: size }} />
      ))}
      {halfStars && <FaStarHalf style={{ width: size, height: size }} />}
    </div>
  );
};
