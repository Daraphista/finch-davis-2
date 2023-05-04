export default function WhyChooseUs({ title }) {
  return (
    <section class="overflow-hidden">
      <div class="container max-w-screen-2xl py-12 md:py-16 lg:py-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center 2xl:border 2xl:p-12">
          <div class="px-6 md:px-0 lg:pr-4">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <div>
                {title && (
                  <h1 class="text-base font-semibold uppercase tracking-wide text-primary-600 md:text-lg">
                    {title}
                  </h1>
                )}
                <h2 class="mt-1 font-heading text-2xl font-normal text-gray-900 md:text-3xl xl:text-4xl">
                  Treating dental patients in Baton Rouge since 1984
                </h2>
                <div class="prose mt-4 max-w-lg xl:prose-lg">
                  <p>
                    Drs. Robin Levy and Steven Vutera continue the history of
                    offering premium dental care in Baton Rouge.
                  </p>
                </div>
              </div>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-lg">
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg
                      class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Safety.
                  </dt>
                  <dd class="inline">
                    Our #1 priority is and always will be the safety of our
                    patients and our team
                  </dd>
                </div>

                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg
                      class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Family-Friendly.
                  </dt>
                  <dd class="inline">
                    Levy and Vutera Family Dentistry is a family-friendly
                    practice for children, teenagers, and adults.
                  </dd>
                </div>

                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg
                      class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                      <path
                        fill-rule="evenodd"
                        d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Professional Treatment.
                  </dt>
                  <dd class="inline">
                    We are committed to providing the highest level of
                    preventative and cosmetic dental treatment.
                  </dd>
                </div>
              </dl>
              <div class="mt-8 flex space-x-3">
                <a
                  href="#"
                  class="button inline-flex bg-primary-600 text-white hover:bg-primary-500 hover:text-white focus:ring-primary-500"
                >
                  Meet Our Team
                </a>
                <a
                  href="#"
                  class="button inline-flex border-primary-400 text-primary-700 hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500"
                >
                  Patient Info
                </a>
              </div>
            </div>
          </div>
          <div class="sm:px-6 lg:px-0">
            <figure class="aspect-h-9 aspect-w-16 overflow-hidden rounded-sm lg:aspect-h-3 lg:aspect-w-4">
              <img
                class="h-full w-full object-cover object-center"
                src="https://via.placeholder.com/1600x1200"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
