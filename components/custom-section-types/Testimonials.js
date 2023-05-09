export default function Testimonials({ title, subtitle }) {
  return (
    <section className="relative isolate border-b border-primary-200/90">
      <div className="pattern-primary-light absolute inset-0 xl:bg-fixed"></div>
      <div className="absolute left-0 right-0 top-0 h-[10vw] bg-gradient-to-b from-white"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-200 to-primary-50 opacity-90"></div>
      <div className="container relative z-1 max-w-screen-2xl py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {title && (
            <h1 className="text-base font-semibold uppercase tracking-wide text-primary-600 md:text-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="mt-1 font-heading text-2xl font-normal text-gray-900 md:text-3xl xl:text-4xl">
              {subtitle}
            </h2>
          )}
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 grid-rows-1 gap-4 text-sm leading-6 text-gray-900 sm:mt-14 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden rounded sm:block sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-primary-900/10 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>
                “Integer id nunc sit semper purus. Bibendum at lacus ut arcu
                blandit montes vitae auctor libero. Hac condimentum dignissim
                nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel
                et proin. Non hendrerit in vel ac diam.”
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">Brenna Goyette</div>
                <div className="text-gray-600">Patient Testimonial</div>
              </div>
            </figcaption>
          </figure>

          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-span-2">
              <figure className="rounded bg-white p-6 shadow-lg ring-1 ring-primary-900/10">
                <blockquote className="text-gray-900">
                  <p>
                    “Laborum quis quam. Dolorum et ut quod quia. Voluptas
                    numquam delectus nihil. Aut enim doloremque et ipsam.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Leslie Alexander</div>
                    <div className="text-gray-600">Patient Testimonial</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="rounded bg-white p-6 shadow-lg ring-1 ring-primary-900/10">
                <blockquote className="text-gray-900">
                  <p>
                    “Laborum quis quam. Dolorum et ut quod quia. Voluptas
                    numquam delectus nihil. Aut enim doloremque et ipsam.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Leslie Alexander</div>
                    <div className="text-gray-600">Patient Testimonial</div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="space-y-8 xl:row-start-1">
              <figure className="rounded bg-white p-6 shadow-lg ring-1 ring-primary-900/10">
                <blockquote className="text-gray-900">
                  <p>
                    “Aut reprehenderit voluptatem eum asperiores beatae id. Iure
                    molestiae ipsam ut officia rem nulla blanditiis.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Lindsay Walton</div>
                    <div className="text-gray-600">Patient Testimonial</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-start-1">
              <figure className="rounded bg-white p-6 shadow-lg ring-1 ring-primary-900/10">
                <blockquote className="text-gray-900">
                  <p>
                    “Voluptas quos itaque ipsam in voluptatem est. Iste eos
                    blanditiis repudiandae. Earum deserunt enim molestiae ipsum
                    perferendis recusandae saepe corrupti.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Tom Cook</div>
                    <div className="text-gray-600">Patient Testimonial</div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="space-y-8 xl:row-span-2">
              <figure className="rounded bg-white p-6 shadow-lg ring-1 ring-primary-900/10">
                <blockquote className="text-gray-900">
                  <p>
                    “Molestias ea earum quos nostrum doloremque sed. Quaerat
                    quasi aut velit incidunt excepturi rerum voluptatem minus
                    harum.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Leonard Krasner</div>
                    <div className="text-gray-600">Patient Testimonial</div>
                  </div>
                </figcaption>
              </figure>

              <figure className="rounded bg-white p-6 shadow-lg ring-1 ring-primary-900/10">
                <blockquote className="text-gray-900">
                  <p>
                    “Laborum quis quam. Dolorum et ut quod quia. Voluptas
                    numquam delectus nihil. Aut enim doloremque et ipsam.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Leslie Alexander</div>
                    <div className="text-gray-600">Patient Testimonial</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
