import Link from "next/link";
import uniqid from "uniqid";

export default function Default({
  id,
  title,
  subtitle,
  customContentCollection,
}) {
  return (
    <section id={id} className="relative bg-transparent text-lg">
      <div className="container relative z-1 mx-auto w-full max-w-screen-xl py-12 text-center lg:py-16">
        {title && (
          <h2 className="text-base font-normal uppercase tracking-wide text-primary-900 md:text-lg">
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className="mt-1 font-heading text-2xl font-semibold text-gray-900 md:text-3xl xl:text-4xl">
            {subtitle}
          </h3>
        )}

        {customContentCollection && (
          <div className="mt-8 grid grid-cols-1 items-start gap-x-6 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {customContentCollection?.map((practiceArea) => (
              <Link
                className="group aspect-h-1 aspect-w-4 block w-full overflow-hidden rounded-sm md:aspect-w-6 lg:aspect-h-2 lg:aspect-w-3"
                href="/"
                key={uniqid()}
              >
                <div className="absolute bg-primary-900">
                  <img
                    className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
                    src="https://cochranfirm.com/wp-content/uploads/2021/03/Personal-Injury.png"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-primary-800/90 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-950 opacity-50 transition group-hover:opacity-0"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <p className="font-heading text-start text-2xl text-white">
                      {practiceArea?.fields?.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
