import Button from "../Button";
import Media from "../Media";

export default function HomeHero({ title, subtitle, buttons, media }) {
  return (
    <section className="relative overflow-hidden bg-primary-400">
      <div className="pattern-primary-light absolute inset-0 xl:bg-fixed"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white from-30%"></div>

      <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>

      <div class="absolute inset-0 z-10">
        <div class="relative h-full w-full xl:container xl:max-w-screen-2xl">
          <img
            alt=""
            width="3000"
            height="2453"
            decoding="async"
            data-nimg="1"
            class="absolute -right-[20vw] bottom-0 max-h-[648px] w-[75vw] sm:-right-[10vw] sm:w-[60vw] xl:-right-[5vw] xl:h-[95%] xl:w-auto"
            srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5a65o1927eh3%2FMBuRVTWjLFDFpHWkRG5lb%2F36133974a13a55913ba00568239f258e%2FHero_Image.webp&amp;w=3840&amp;q=75 1x"
            src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5a65o1927eh3%2FMBuRVTWjLFDFpHWkRG5lb%2F36133974a13a55913ba00568239f258e%2FHero_Image.webp&amp;w=3840&amp;q=75"
          />
        </div>
      </div>

      <div className="container relative z-10 max-w-screen-2xl py-12 md:py-16 lg:py-20 xl:py-28 2xl:pt-32">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="">
            {title && (
              <h1 className="text-lg font-semibold uppercase tracking-wide text-primary-600 md:text-xl xl:text-2xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 className="mt-3 font-heading text-4xl font-normal text-primary-950 md:text-5xl xl:text-6xl">
                {subtitle}
              </h2>
            )}

            {buttons && (
              <div className="mt-8">
                {buttons?.map((button) => (
                  <Button
                    className="button button-lg md:button-xl inline-flex bg-primary-600 text-white hover:bg-primary-500 focus:ring-primary-500"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    url={button.fields.url}
                    key={button.fields.text}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 right-0 h-[70%] w-[70%] fill-current text-primary-500"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fillOpacity="0.15"
        >
          <path d="M 0 1000 Q 250 250 1000 0 L 1000 1000 Z" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 h-3/5 w-3/5 fill-current text-primary-500"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fillOpacity="0.25"
        >
          <path d="M 0 1000 Q 250 250 1000 0 L 1000 1000 Z" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 h-1/2 w-1/2 fill-current text-primary-500"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fillOpacity="0.4"
        >
          <path d="M 0 1000 Q 250 250 1000 0 L 1000 1000 Z" />
        </svg>
      </div>

      <div className="relative z-1">
        <svg
          className="w-full fill-current text-white"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 Q 500 100 1000 0 L 1000 100 L 0 100" />
        </svg>
        <svg
          className="strokeCurrent absolute bottom-0 left-0 right-0 text-primary-200"
          viewBox="0 -10 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 Q 500 100 1000 0"
            fill="none"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>
  );
}
