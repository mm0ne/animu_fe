import NotFound from "@/components/module/NotFound";
import BackButton from "@/components/elements/BackButton";
import Head from "next/head";



export default function PageNotFound(){

    return(
        <section className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
            <Head>
                <title>404 | Page not found</title>
                <meta name='description' content="Sorry couldn't find the page you are looking for"/>
            </Head>
            <div className="flex items-center justify-start ">
                <BackButton/>
                <p className="w-full">Go back?</p>
            </div>
            
            <NotFound rem_h={20} rem_w={20} textSize_px={70} notFoundText="Not Found"/>
        </section>
    )
}