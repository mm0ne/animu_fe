import DashboardLayout from "@/components/layout/DashboardLayout";
import Head from "next/head";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../../next-seo-config";


export default function index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NextSeo {...NEXT_SEO_DEFAULT}/>
      <BreadcrumbJsonLd
      
      itemListElements={[
        {position: 1, name: 'Home', item: 'https://animu.monemone.site'},
        {position: 1, name: 'Watched Animes', item: 'https://animu.monemone.site/anime'},
        {position: 1, name: 'Records', item: 'https://animu.monemone.site/records'},
      ]}/>
      <main className="w-full"></main>
    </>
  );
}

index.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
