"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { useState } from "react"

 export const ChatDialog=()=>{
    const [message,setMessage]=useState("")
    return(<>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-red-500">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 bg-white">
        <DialogHeader>
          <DialogTitle className="rounded-t-md mb-4 p-4 bg-gray-300 text-black flex gap-6 items-center">
          <FaArrowLeft />
          <div className="flex items-center gap-2">
            <div className=" relative w-10 h-10 rounded-full border">
            <Image src={"/image 1174.png"} alt="" fill className="object-cover rounded-full"
            />
            </div>
           
            <p className="text-black">UserName</p>
            </div>
            
           </DialogTitle>
        </DialogHeader>
       
        <DialogFooter className="border-b py-2 px-4 bg-gray-300 text-black flex gap-4 items-center rounded-b-md">
        <AiFillPicture size={28} className="cursor-pointer"/>
        <Input placeholder="Message" value={message} className="rounded-full" onChange={(e)=>setMessage(e.target.value)}/>
        {message?(<IoIosSend size={28} className="cursor-pointer"/>):( <AiFillLike size={28} className="cursor-pointer"/>)}
       
        
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>)

 }