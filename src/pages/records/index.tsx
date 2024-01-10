import DashboardLayout from "@/components/layout/DashboardLayout";
import Head from "next/head";
import { FaLastfm } from "react-icons/fa6";
import Link from "next/link";

export default function records() {
  return (
    <>
      <Head>
        <title>Aster | Records Collection</title>
        <meta
          name="description"
          content="My digital and physical records collection"
        />
      </Head>
      <main className="w-full overflow-y-hidden h-[93.5vh] flex items-center justify-center">
            <section className="flex flex-col items-center justify-start gap-y-4">
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-sky-500 font-semibold"> Under Construction!</h2>
                <Link href="https://www.last.fm/user/nod4saken" className="flex items-center justify-between gap-x-3 btn bg-red-700 text-white hover:text-amber-300">
                
                <FaLastfm size={30}/>
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
