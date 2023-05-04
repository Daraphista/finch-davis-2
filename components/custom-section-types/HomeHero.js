import Button from "../Button";

export default function HomeHero({ title, subtitle, buttons, media }) {
  return (
    <section class="relative overflow-hidden bg-primary-400">
      <div class="pattern-primary-light absolute inset-0 xl:bg-fixed"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-white from-30%"></div>

      <div class="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div class="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <div class="container relative z-10 max-w-screen-2xl py-12 md:py-16 lg:py-20 xl:py-28 2xl:pt-32">
        <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="">
            {title && (
              <h1 class="text-lg font-semibold uppercase tracking-wide text-primary-600 md:text-xl xl:text-2xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 class="mt-3 font-heading text-4xl font-normal text-primary-950 md:text-5xl xl:text-6xl">
                {subtitle}
              </h2>
            )}

            {buttons && (
              <div class="mt-8">
                {buttons?.map((button) => (
                  <Button
                    class="button button-lg md:button-xl inline-flex bg-primary-600 text-white hover:bg-primary-500 focus:ring-primary-500"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    url={button.fields.url}
                    key={button.fields.text}
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <figure class="aspect-h-9 aspect-w-16 overflow-hidden rounded-sm">
              <img
                class="h-full w-full object-cover object-center"
                src="https://fluxconsole.com/files/view/235810"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      <div class="absolute inset-0">
        <svg
          class="absolute bottom-0 right-0 h-[70%] w-[70%] fill-current text-primary-500"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill-opacity="0.15"
        >
          <path d="M 0 1000 Q 250 250 1000 0 L 1000 1000 Z" />
        </svg>
        <svg
          class="absolute bottom-0 right-0 h-3/5 w-3/5 fill-current text-primary-500"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill-opacity="0.25"
        >
          <path d="M 0 1000 Q 250 250 1000 0 L 1000 1000 Z" />
        </svg>
        <svg
          class="absolute bottom-0 right-0 h-1/2 w-1/2 fill-current text-primary-500"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill-opacity="0.4"
        >
          <path d="M 0 1000 Q 250 250 1000 0 L 1000 1000 Z" />
        </svg>
      </div>

      <div class="relative z-1">
        <svg
          class="w-full fill-current text-white"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 Q 500 100 1000 0 L 1000 100 L 0 100" />
        </svg>
        <svg
          class="absolute bottom-0 left-0 right-0 stroke-current text-primary-200"
          viewBox="0 -10 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 Q 500 100 1000 0"
            fill="none"
            stroke-width="2"
            vector-effect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>
  );
}
