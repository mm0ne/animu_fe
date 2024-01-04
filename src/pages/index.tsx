import DashboardLayout from "@/components/layout/DashboardLayout";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Aster | Home</title>
        <meta
          name="description"
          content={
            'Welcome to Aster\'s corner! This entire webapp is purposely made as an archive and to showcase some "artworks". The current version release only has animes, I will expand the feature and data later along the way.'
          }
        />
      </Head>
      <main className="w-full h-full"></main>
    </>
  );
}

index.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
