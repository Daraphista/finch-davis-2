import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p class="mt-6 text-lg leading-8 text-gray-600">{children}</p>
    ),
  },
};

const dentalServiceOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p class="flex-auto">{children}</p>,
  },
};

export default function DentalServices({
  title,
  unformattedBody,
  customContentCollection,
}) {
  return (
    <div class="">
      <div class="container max-w-screen-2xl py-12 md:py-16 lg:py-20">
        <div class="mx-auto max-w-2xl lg:mx-0">
          {title && (
            <h1 class="font-heading text-3xl font-normal text-gray-900 md:text-4xl">
              {title}
            </h1>
          )}

          {documentToReactComponents(unformattedBody, options)}
        </div>
        {customContentCollection && (
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {customContentCollection?.map((dentalService) => (
                <div class="flex flex-col">
                  <dt class="text-lg font-semibold leading-7 text-gray-900">
                    <div class="relative mb-6 flex h-10 w-10 items-center justify-center rounded-sm bg-primary-600">
                      {dentalService?.fields?.iconSvg && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: dentalService?.fields?.iconSvg,
                          }}
                        />
                      )}
                      <div class="absolute -right-1.5 -top-1.5 h-10 w-10 border-r-2 border-t-2 border-primary-300"></div>
                    </div>
                    {dentalService?.fields?.title}
                  </dt>

                  <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    {documentToReactComponents(
                      dentalService?.fields?.body,
                      dentalServiceOptions
                    )}

                    <p class="mt-6">
                      <a
                        href="#"
                        class="text-base font-semibold leading-6 text-primary-600 hover:text-primary-900"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}

              <a
                class="flex flex-col border-2 border-primary-200 bg-primary-50 p-6 hover:border-primary-400"
                href="#"
              >
                <dt class="text-2xl font-bold leading-7 text-gray-900">
                  Request Appointment
                </dt>
                <dd class="mt-3 flex flex-auto flex-col text-lg leading-7 text-primary-900">
                  <p class="flex-auto">
                    Contact us today to request to schedule an appointment
                    today.
                  </p>
                  <div>
                    <div
                      href="#"
                      class="button button-base flex bg-primary-600 text-white hover:bg-primary-500 hover:text-white focus:ring-primary-500"
                    >
                      Contact Us
                    </div>
                  </div>
                </dd>
              </a>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}
