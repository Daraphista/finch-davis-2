import Link from "next/link";
import { getHeaderData, getMetaData, getFooterData } from "@/lib/api";
import "../styles/globals.css";
import "../styles/blend.css";
import "../styles/colors.css";
import "../styles/header.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Error({ headerData, metaData, footerData }) {
  return (
    <>
      {/* Temporary banner so that the header can be seen */}
      <div className="h-[95px] bg-gray-900"></div>

      <Header data={headerData} metaData={metaData} />

      <main>
        <section className="relative bg-transparent">
          <div className="container relative z-1 max-w-screen-lg pb-12 pt-12 text-center md:pb-12 md:pt-12 lg:pb-16 lg:pt-16 xl:pb-20 xl:pt-20">
            <div className="">
              <h2
                className="text-theme-title font-heading text-4xl font-extrabold md:text-5xl"
                color="text-theme-title"
              >
                Wait a second...
              </h2>
              <div className="prose-bg-primary-lighter prose mx-auto mt-6 md:prose-lg">
                We&apos;re sorry, this page doesn&apos;t exist. You can{" "}
                <Link
                  href="/"
                  className="text-theme-title-primary font-bold text-primary-600 underline"
                >
                  explore the rest of our site.
                </Link>
                .
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const headerData = await getHeaderData();
  const metaData = await getMetaData();
  const footerData = await getFooterData();

  return {
    props: {
      headerData,
      metaData,
      footerData,
    },
  };
}
