import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";
import uniqid from "uniqid";
import ConsoleLogger from "../ConsoleLogger";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-6 text-lg leading-8 text-gray-600">{children}</p>
    ),
  },
};

const dentalServiceOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="flex-auto">{children}</p>
    ),
  },
};

export default function DentalServices({
  title,
  unformattedBody,
  customContentCollection,
}) {
  return (
    <section className="">
      <div className="container max-w-screen-2xl py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {title && (
            <h1 className="font-heading text-3xl font-normal text-gray-900 md:text-4xl">
              {title}
            </h1>
          )}

          {documentToReactComponents(unformattedBody, options)}
        </div>
        {customContentCollection && (
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {customContentCollection?.map((dentalService) => {
                if (
                  dentalService?.sys?.contentType?.sys?.id ===
                  "dentistryCategory"
                ) {
                  return (
                    <div
                      className="flex flex-col bg-primary-100 lg:col-span-3"
                      key={`${dentalService?.sys?.id}${uniqid()}`}
                    >
                      <dt className="text-lg flex font-semibold leading-7 text-gray-900">
                        <div className="relative mb-6 flex h-10 w-10 items-center justify-center rounded-sm bg-primary-600">
                          {dentalService?.fields?.iconSvg && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: dentalService?.fields?.iconSvg,
                              }}
                            />
                          )}
                          <div className="absolute -right-1.5 -top-1.5 h-10 w-10 border-r-2 border-t-2 border-primary-300"></div>
                        </div>
                        {dentalService?.fields?.title}
                      </dt>

                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        {documentToReactComponents(
                          dentalService?.fields?.body,
                          dentalServiceOptions
                        )}

                        <p className="mt-6">
                          <Link
                            href="/"
                            className="text-base font-semibold leading-6 text-primary-600 hover:text-primary-900"
                          >
                            Learn more <span aria-hidden="true">→</span>
                          </Link>
                        </p>
                      </dd>
                    </div>
                  );
                }

                return (
                  <div
                    className="flex flex-col"
                    key={`${dentalService?.sys?.id}${uniqid()}`}
                  >
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      <div className="relative mb-6 flex h-10 w-10 items-center justify-center rounded-sm bg-primary-600">
                        {dentalService?.fields?.iconSvg && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: dentalService?.fields?.iconSvg,
                            }}
                          />
                        )}
                        <div className="absolute -right-1.5 -top-1.5 h-10 w-10 border-r-2 border-t-2 border-primary-300"></div>
                      </div>
                      {dentalService?.fields?.title}
                    </dt>

                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      {documentToReactComponents(
                        dentalService?.fields?.body,
                        dentalServiceOptions
                      )}

                      <p className="mt-6">
                        <Link
                          href="/"
                          className="text-base font-semibold leading-6 text-primary-600 hover:text-primary-900"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </Link>
                      </p>
                    </dd>
                  </div>
                );
              })}

              <Link
                className="group flex flex-col border-2 border-primary-200 bg-primary-50 p-6 hover:border-primary-400"
                href="/"
              >
                <dt className="text-2xl font-bold leading-7 text-gray-900">
                  Request Appointment
                </dt>
                <dd className="mt-3 flex flex-auto flex-col text-lg leading-7 text-primary-900">
                  <p className="flex-auto">
                    Contact us today to request to schedule an appointment
                    today.
                  </p>
                  <div>
                    <div className="button button-base flex bg-primary-600 text-white focus:ring-primary-500 group-hover:bg-primary-500 group-hover:text-white">
                      Contact Us
                    </div>
                  </div>
                </dd>
              </Link>
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
