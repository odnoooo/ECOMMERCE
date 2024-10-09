"use client";
import { api } from "@/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
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

interface DataContextType {
  carousel: string[];
  saveProduct: string[];
  categories: categoryDataType[];
  setSaveProduct: React.Dispatch<React.SetStateAction<string[]>>;
  setCarousel: Dispatch<SetStateAction<string[]>>;
}
const DataContext = createContext<DataContextType>({} as DataContextType);

const carouselData = ["/image (11)", "/image (12)", "/image (13)"];

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [carousel, setCarousel] = useState<string[]>(carouselData);
  const [saveProduct, setSaveProduct] = useState<string[]>([]);
  const [categories, setCategories] = useState<categoryDataType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get("/category");
        setCategories(response.data.categories);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "Login failed.");
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    };
    getCategories();
  }, []);

  return (
    <DataContext.Provider
      value={{ saveProduct, setSaveProduct, carousel, setCarousel, categories }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
// export const useData = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error("useData must be used within a DataProvider");
//   }
//   return context;
// };
