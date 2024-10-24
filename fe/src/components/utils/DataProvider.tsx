"use client";

import { api } from "@/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";

interface categoryDataType {
  _id: string;
  name: string;
}
interface productDataType {
  _id: string;
  name: string;
  description: string;
  code: string;
  price: number;
  discountPercent: number;
  qty: {
    free?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
    "2xl"?: number;
    "3xl"?: number;
  };
  category: string[];
  images: string[];
}

interface DataContextType {
  carousel: string[];
  saveProduct: string[];
  categories: categoryDataType[];
  products: productDataType[];
  setSaveProduct: React.Dispatch<React.SetStateAction<string[]>>;
  setCarousel: Dispatch<SetStateAction<string[]>>;
  setCategories: Dispatch<SetStateAction<categoryDataType[]>>;
  setProducts: Dispatch<SetStateAction<productDataType[]>>;
  createProduct:(name:string, description:string, productCode:string,images:string[],price:number,discountPercent:number,category:string, qty:object)=>Promise<void>;
}

const DataContext = createContext<DataContextType>({} as DataContextType);

const carouselData = ["/image (11)", "/image (12)", "/image (13)"];

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [carousel, setCarousel] = useState<string[]>(carouselData);
  const [saveProduct, setSaveProduct] = useState<string[]>([]);
  const [categories, setCategories] = useState<categoryDataType[]>([]);
  const [products, setProducts] = useState<productDataType[]>([]);
  const router=useRouter();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get("/getCategories");
        setCategories(response.data.categories);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "getCategories failed.");
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/getProducts");
        setProducts(response.data.products);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "getProducts failed.");
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    };
    getProducts();
  }, []);

  const createProduct=async(name:string,description:string,productCode:string,images:string[],price:number,discountPercent:number,category:string, qty:object)=>{
    try{
      await api.post("/product", {name, description,productCode, images,price, discountPercent,category,qty})
      toast.success("Бүтээгдэхүүн амжилттай нэмэгдлээ")
      router.push("/admin/product")
    }catch(error){
      console.log(error)
      if(error instanceof AxiosError){
        toast.error(error.response?.data?.message||"Failed to logout")
      }else{
        toast.error("Тодорхойгүй алдаа гарлаа")
      }
    }
  }

  return (
    <DataContext.Provider
      value={{
        saveProduct,
        setSaveProduct,
        carousel,
        setCarousel,
        categories,
        setCategories,
        products,
        setProducts,
        createProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
