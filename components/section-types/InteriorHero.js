import Button from "../Button";
import Media from "../Media";

export default function InteriorHero({ title }) {
  return (
    <section className="relative overflow-hidden bg-primary-400">
      <div className="pattern-primary-light absolute inset-0 xl:bg-fixed"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white from-30%"></div>

      <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-8 pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-40">
        <div className="flex justify-center lg:mt-8">
          {title && (
            <h1 className="mt-3 font-heading text-4xl font-normal text-primary-950 md:text-5xl xl:text-6xl">
              {title}
            </h1>
          )}
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
