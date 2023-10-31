import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react";


interface SearchProps{
    search_for: string
}

export default function SearchBar({search_for}: SearchProps){
    const [isFocus, setIsFocus] = useState<boolean>(false);


    return(
        <div className="relative max-w-lg w-full" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>
            <MagnifyingGlass size={27} className={"absolute right-3 top-3 " + (isFocus ? " text-gray-700" : " text-slate-200 ")}/>
            <input name={search_for} type="text" placeholder={`Search ${search_for}`} className={"input input-bordered input-accent w-full max-w-lg transision-all duration-100 " + (isFocus ? " bg-slate-200 opacity-80 text-black placeholder-black" : "")} />
        </div>
    )
}