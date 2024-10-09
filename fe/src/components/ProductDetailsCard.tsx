"use client";

import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "next/navigation";
import { api } from "@/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  ProductPieces,
  ProductCard,
  ReviewStars,
  CreateReview,
} from "./assets";
import { ReviewCard } from "./assets/ReviewCard";
import { useData } from "./utils/dataProvider";
import ProductSizesButton from "./assets/ProductSizesButton";

interface productType {
  _id: string;
  name: string;
  price: number;
  discountPercent: number;
  description: string;
  qty: {
    free?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
    "2xl"?: number;
    "3xl"?: number;
  };
  images: string[];
}
interface reviewType {
  _id: string;
  user: {
    name: string;
  };
  star: number;
  comment: string;
}
export const ProductDetailsCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<productType | null>(null);
  const [products, setProducts] = useState<productType[]>([]);
  const [reviews, setReviews] = useState<reviewType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get(`/product/${id}`);
        setProduct(response.data.product);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error("an unknown error occurred.");
        }
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get(`/product`);
        setProducts(response.data.products);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.messsage || "Login failed.");
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await api.get(`/review/product/{${id}`);
        setReviews(response.data.review);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "Login failed.");
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    };
    getReviews();
  }, []);

  const { saveProduct, setSaveProduct } = useData();
  const [chooseImage, setChooseImage] = useState(0);
  const [chooseSize, setChooseSize] = useState<string>("");
  const [pieces, setPieces] = useState<number>(1);
  const [showReview, setShowReview] = useState<boolean>(false);
  const chooseSizePieces: number =
    product?.qty?.[chooseSize as keyof typeof product.qty] || 0;

  const stringPrice = (price: number) => {
    return (
      (price * pieces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮"
    );
  };

  const initialValue = 0;
  const productReviewStarNumber =
    reviews.reduce(
      (accumulator, currentValue) => accumulator + currentValue.star,
      initialValue
    ) / reviews.length;
  const productReviewStar = Number(productReviewStarNumber.toFixed(1));
  const handleSave = () => {
    setSaveProduct((prevProducts) => [...prevProducts, id as string]);
  };
  const handleRemoveSave = () => {
    const newSaveProduct = saveProduct.filter((product) => product !== id);
    setSaveProduct(newSaveProduct);
  };

  return (
    <div className=" w-[1040px] m-auto min-h-screen">
      <div className=" flex gap-4 h-[560px] mt-12">
        <div className="flex justify-between items-center flex-1">
          <div className="space-y-2">
            {product?.images.map((image, index) =>
              index < 6 ? (
                <div
                  key={index}
                  onClick={() => setChooseImage(index)}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className={`h-16 w-16 rounded cursor-pointer ${
                    chooseImage === index ? "border border-black" : null
                  }`}
                ></div>
              ) : null
            )}
          </div>
          <div
            style={{
              backgroundImage: `url(${product?.images[chooseImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[521px] w-[422px] rounded-xl cursor-move"
          ></div>
          <div></div>
        </div>
        <div className="flex-1 p-4 mt-12">
          <div className=" flex flex-col gap-3 h-[320px]">
            <div></div>
            <div className="space-y-2">
              <div className="border border-blue-500 h-8 rounded-2xl w-[100px] flex items-center justify-center">
                Шинэ
              </div>
              <div className="flex gap-4 items-center">
                <h1>{product?.name}</h1>
                {saveProduct?.includes(id as string) ? (
                  <FaRegHeart onClick={handleRemoveSave} />
                ) : (
                  <FaHeart onClick={handleSave} />
                )}
              </div>
              <p>{product?.description}</p>
            </div>
            <ProductSizesButton
              sizes={product?.qty}
              chooseSize={chooseSize}
              setChooseSize={setChooseSize}
            />
            <ProductPieces
              chooseSizePieces={chooseSizePieces}
              pieces={pieces}
              setPieces={setPieces}
            />
          </div>
          <div>
            <p>{stringPrice(product?.price || 0)}</p>
            <button className="bg-blue-500 rounded-2xl text-white px-4">
              Сагсанд нэмэх
            </button>
          </div>
          <div>
            <div>
              <p>Үнэлгээ</p>
              <button onClick={() => setShowReview(!showReview)}>
                Бүгдийг {showReview ? "хураах" : "харах"}
              </button>
            </div>
            <div className="flex gap-2">
              <ReviewStars
                percent={!productReviewStar ? 5 : productReviewStar}
                size={18}
              />
              <p>{productReviewStar ? productReviewStar : "5.0"}</p>
              <p className="text-gray-500">({reviews.length})</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-[55px] font-light h-[744px]">
          <CreateReview productId={id} />
          <div>
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                star={review.star}
                username={review.user.name}
                comment={review.comment}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="text-3xl font-semibold mb-6">Холбоотой бараа</p>
        <div className="grid grid-cols-4 gap-5">
          {products
            .slice(0, 8)
            .map((product, index) =>
              index <= 7 ? (
                <ProductCard
                  key={index}
                  id={product._id}
                  title={product.name}
                  images={product.images}
                  price={product.price}
                  discount={product.discountPercent}
                />
              ) : null
            )}
        </div>
      </div>
    </div>
  );
};
