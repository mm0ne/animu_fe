import DashboardLayout from "@/components/layout/DashboardLayout";
import Head from "next/head";
import { FaLastfm } from "react-icons/fa6";
import Link from "next/link";
import { NEXT_SEO_DEFAULT } from "../../../next-seo-config";
import { NextSeo } from "next-seo";

export default function records() {
  const updatedSEO = {
    ...NEXT_SEO_DEFAULT,
    title: "Records Collection",
    description: "Aster's digital and physical records collection",
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://animu.monemone.site/records',
        title: 'Records Collection',
        description: "Aster's digital and physical records collection",
        siteName: 'Aster\'s Corner',
      }
  };

  return (
    <>
      <Head>
        <title>Records Collection</title>
        <meta
          name="description"
          content="Aster's digital and physical records collection"
        />
      </Head>
      <NextSeo {...updatedSEO}/>
      <main className="w-full overflow-y-hidden h-[93.5vh] flex items-center justify-center">
        <section className="flex flex-col items-center justify-start gap-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-sky-500 font-semibold">
            {" "}
            Under Construction!
          </h2>
          <Link
            href="https://www.last.fm/user/mm0ne"
            className="flex items-center justify-between gap-x-3 btn bg-red-700 text-white hover:text-amber-300"
          >
            <FaLastfm size={30} />
            <p className="text-lg font-semibold">visit my last.fm</p>
          </Link>
        </section>
      </main>
    </>
  );
}

records.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
