import Script from "next/script";

export default function Instagram() {
  return (
    <section>
      <div className="container max-w-screen-xl py-12 text-center md:py-16 lg:py-20">
        <div>
          <h1 className="text-base font-semibold uppercase tracking-wide text-primary-600 md:text-lg">
            Follow us on Instagram
          </h1>
          <h2 className="mt-1 font-heading text-2xl font-normal text-gray-900 md:text-3xl xl:text-4xl">
            Reprehenderit ea duis nisi ad commodo
          </h2>
        </div>

        <div className="mt-10">
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></Script>
          <div className="elfsight-app-22ac765d-29ef-4e1c-a064-67e09f96c58d"></div>
        </div>
      </div>
    </section>
  );
}
