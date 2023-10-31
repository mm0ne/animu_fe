import { Quicksand } from "next/font/google";

const quicksand = Quicksand({subsets: ["latin"]})


interface BaseLayoutProps {
    children? : React.ReactNode
}

export default function BaseLayout({children}: BaseLayoutProps){
    return(
        <main className={`${quicksand.className} w-full text-white`}>
            {children}
        </main>
    )
}