import Link from "next/link"
import { FaCat } from "react-icons/fa"

interface NavbarProps {
    toggle_label: string
}

export default function Navbar({toggle_label}:NavbarProps) {
    return (
        <div className="navbar">
            <div className="flex-none">
                <label htmlFor={toggle_label} className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <Link href="/" className="flex items-center gap-x-1 btn btn-ghost">
                <FaCat className=" w-7 h-7 xl:w-9 xl:h-9 mb-2" />
                <h1 className="text-xl font-bold normal-case">{"Aster's Corner"}</h1>
            </Link>
        </div>
    )
}