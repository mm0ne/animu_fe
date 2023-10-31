
interface AnimeArticleProps{
    description: string;
    review: string;

}

export default function AnimeArticle({description, review}: AnimeArticleProps){

    return(
        <section className="flex flex-col gap-y-3 px-4 items-start justify-start max-w-xl h-[75vh] overflow-y-scroll">
            <article className="flex flex-col items-start justify-start">
                <h4 className="text-slate-200 font-bold text-lg">Description</h4>
                <p>{description ?? "-"}</p>
            </article>
            <article className="flex flex-col items-start justify-start">
                <h4 className="text-slate-200 font-bold text-lg">My Review</h4>
                <p dangerouslySetInnerHTML={{__html : review}} className="text-justify"></p>
            </article>
        </section>
    )
}