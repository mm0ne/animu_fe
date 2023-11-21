
interface AnimeArticleProps{
    description: string;
    review: string;

}

export default function AnimeArticle({description, review}: AnimeArticleProps){

    return(
        <section className="flex flex-col gap-y-3 px-4 items-start justify-start max-w-3xl h-[80vh] overflow-y-scroll text-[18px]">
            <article className="flex flex-col items-start justify-start">
                <h4 className="text-slate-200 font-bold text-2xl">Description</h4>
                <p>{description ?? "-"}</p>
            </article>
            <article className="flex flex-col items-start justify-start">
                <h4 className="text-slate-200 font-bold text-2xl">My Review</h4>
                <p dangerouslySetInnerHTML={{__html : review}} className="text-justify"></p>
            </article>
        </section>
    )
}