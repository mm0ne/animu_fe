
interface AnimeArticleProps{
    description: string;
    review: string;

}

export default function AnimeArticle({description, review}: AnimeArticleProps){

    return(
        <section className="flex flex-col gap-y-5 lg:gap-y-3 px-1.5 lg:px-4 text-justify items-start justify-start w-full lg:max-w-3xl h-auto lg:h-[80vh] overflow-y-scroll">
            <article className="flex flex-col items-start justify-start ">
                <h4 className="text-slate-200 font-bold text-lg md:text-xl lg:text-2xl ">Description</h4>
                <p className="text-[13px] md:text-md">{description ?? "-"}</p>
            </article>
            <article className="flex flex-col items-start justify-start">
                <h4 className="text-slate-200 font-bold text-lg md:text-xl lg:text-2xl ">My Review</h4>
                <p className="pb-2 text-[13px] md:text-md" dangerouslySetInnerHTML={{__html : review}}></p>
            </article>
        </section>
    )
}