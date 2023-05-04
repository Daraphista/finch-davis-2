import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p class="mt-6 text-lg leading-8 text-gray-600">{children}</p>
    ),
  },
};

export default function FooterCallToAction({
  title,
  subtitle,
  unformattedBody,
  customContentCollection,
  buttons,
}) {
  return (
    <div class="relative isolate border-t border-primary-200 bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-primary-50 ring-1 ring-primary-900/10 lg:w-1/2"></div>
            {title && (
              <h1 class="text-base font-semibold uppercase tracking-wide text-primary-600 md:text-lg">
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 class="mt-1 font-heading text-2xl font-normal text-gray-900 md:text-3xl xl:text-4xl">
                {subtitle}
              </h2>
            )}
            {documentToReactComponents(unformattedBody, options)}
            {customContentCollection && (
              <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {customContentCollection?.map((customContentItem) => (
                  <div class="flex gap-x-4">
                    <dt class="flex-none">
                      <span class="sr-only">
                        {customContentItem?.fields?.title}
                      </span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: customContentItem?.fields?.iconSvg,
                        }}
                      />
                    </dt>
                    <dd className="max-w-[200px]">
                      {customContentItem?.fields?.subtitle}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
        <form
          action="#"
          method="POST"
          class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last-name"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div class="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone-number"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div class="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autocomplete="tel"
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div class="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-end">
              <button
                type="submit"
                class="rounded-sm bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="absolute bottom-0 left-0 right-0 z-1">
        <svg
          class="w-full fill-current text-gray-900"
          viewBox="0 -50 1000 120"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 Q 500 100 1000 0 L 1000 100 L 0 100" />
        </svg>
      </div>
    </div>
  );
}
