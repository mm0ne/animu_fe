import NotFound from "@/components/module/NotFound";
import BackButton from "@/components/elements/BackButton";



export default function PageNotFound(){

    return(
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="flex items-center justify-start">
                <BackButton/>
                <p className="w-full">Go back?</p>
            </div>
            
            <NotFound rem_h={20} rem_w={20} textSize_px={70} notFoundText="Not Found"/>
        </section>
    )
}