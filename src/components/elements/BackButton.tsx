import { useRouter } from "next/router";
import {BiArrowBack} from "react-icons/bi"
import React from "react";


export default function BackButton() {
    const {back} = useRouter()
    return <div onClick={() => back()} className="rounded-full p-4 text-slate-200 cursor-pointer hover:text-white font-[900] hover:bg-neutral transition-all duration-100 h-[3.5em]">
            <BiArrowBack size={25}/>
    </div>
}