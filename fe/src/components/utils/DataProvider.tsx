// "use client";
// import { api } from "@/axios";
// import { AxiosError } from "axios";
// import { toast } from "react-toastify";
// import {
//   createContext,
//   Dispatch,
//   SetStateAction,
//   PropsWithChildren,
//   useContext,
//   useState,
//   useEffect,
// } from "react";

// interface categoryDataType {
//   _id: string;
//   name: string;
// }

// interface DataContextType {
//   carousel: string[];
//   saveProduct: string[];
//   categories: categoryDataType[];
//   setSaveProduct: React.Dispatch<React.SetStateAction<string[]>>;
//   setCarousel: Dispatch<SetStateAction<string[]>>;
// }
// const DataContext = createContext<DataContextType>({} as DataContextType);

// const carouselData = ["/image (11)", "/image (12)", "/image (13)"];

// export const DataProvider = ({ children }: PropsWithChildren) => {
//   const [carousel, setCarousel] = useState<string[]>(carouselData);
//   const [saveProduct, setSaveProduct] = useState<string[]>([]);
//   const [categories, setCategories] = useState<categoryDataType[]>([]);

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const response = await api.get("/category");
//         setCategories(response.data.categories);
//       } catch (error: unknown) {
//         console.log(error);
//         if (error instanceof AxiosError) {
//           toast.error(error.response?.data?.message || "Login failed.");
//         } else {
//           toast.error("An unknown error occurred.");
//         }
//       }
//     };
//     getCategories();
//   }, []);


//   return (
//     <DataContext.Provider
//       value={{ saveProduct, setSaveProduct, carousel, setCarousel, categories,setCategories }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };
// export const useData = () => {
//   return useContext(DataContext);
// };

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
interface productDataType{
  _id:string;
  name:string;
  description:string;
  code:string;
  price:number;
  discountPercent:number;
  qty: {
    free?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
    "2xl"?: number;
    "3xl"?: number;
  };
  category:string[];
  images:string[];
}

interface DataContextType {
  carousel: string[];
  saveProduct: string[];
  categories: categoryDataType[];
  products:productDataType[];
  setSaveProduct: React.Dispatch<React.SetStateAction<string[]>>;
  setCarousel: Dispatch<SetStateAction<string[]>>;
  setCategories: Dispatch<SetStateAction<categoryDataType[]>>;  
  setProducts:Dispatch<SetStateAction<productDataType[]>>;// Add this line
}

const DataContext = createContext<DataContextType>({} as DataContextType);

const carouselData = ["/image (11)", "/image (12)", "/image (13)"];

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [carousel, setCarousel] = useState<string[]>(carouselData);
  const [saveProduct, setSaveProduct] = useState<string[]>([]);
  const [categories, setCategories] = useState<categoryDataType[]>([]);
  const[products,setProducts]=useState<productDataType[]>([])

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

  useEffect(()=>{
    const getProducts=async()=>{
      try{
        const response=await api.get("/getProducts");
        setProducts(response.data.products);
      }catch(error:unknown){
        console.log(error);
        if(error instanceof AxiosError){
          toast.error(error.response?.data?.message || "getProducts failed.")
        }else{
          toast.error("An unknown error occurred.")
        }
      }
    };
    getProducts();
  },[]);

  return (
    <DataContext.Provider
      value={{
        saveProduct,
        setSaveProduct,
        carousel,
        setCarousel,
        categories,
        setCategories, 
        products,setProducts, 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
