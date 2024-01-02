import SearchBar from "@/components/elements/SearchBar";
import FilterSelect, { OptionValue } from "@/components/elements/FilterSelect";
import { useRouter } from "next/router";
import { FormEvent } from "react";

interface SearchFilterProp{
    search_for: string,
    selects: OptionValue[]
    submitHandler: (e: FormEvent<HTMLFormElement>) => void
}

export default function SearchWithFilter({search_for, selects, submitHandler}: SearchFilterProp){
    const router = useRouter();
    return(
        <form onSubmit={e => submitHandler(e)} className="flex flex-col md:flex-row gap-y-2 gap-x-4 items-center justify start w-full">
            <FilterSelect options={selects}/>
            <SearchBar search_for={search_for}/>
            <input type="submit" hidden />
        </form>
    )
}