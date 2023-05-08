import Button from "../Button";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { content } from "@/tailwind.config";
import uniqid from "uniqid";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-6 text-lg leading-8 text-gray-600">{children}</p>
    ),
  },
};

export default function HeroContactForm({
  id,
  title,
  subtitle,
  buttons,
  unformattedBody,
  customContentCollection,
}) {
  const emailEmbeds = customContentCollection.filter(
    (customContentItem) =>
      customContentItem?.sys?.contentType?.sys?.id === "contactFormEmbed"
  );

  const embedScript = emailEmbeds?.[0]?.fields?.script;
  const embedElement = emailEmbeds?.[0]?.fields?.element;
  const embedHeading = emailEmbeds?.[0]?.fields?.heading;

  useEffect(() => {
    eval(embedScript);
  });

  // render rich text from data
  const customBody = documentToReactComponents(unformattedBody, options);
  return (
    <section className="relative overflow-hidden bg-primary-400">
      <div className="pattern-primary-light absolute inset-0 xl:bg-fixed"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white from-30%"></div>

      <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <div className="container relative z-1 max-w-screen-2xl py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:mt-5">
            {title && (
              <h1 className="text-base font-semibold uppercase tracking-wide text-primary-600 md:text-lg">
                {title}
              </h1>
            )}

            {subtitle && (
              <div className="mt-1 font-heading text-2xl font-normal text-gray-900 md:text-3xl xl:text-4xl">
                {subtitle}
              </div>
            )}

            {customBody && <div>{customBody}</div>}

            {customContentCollection && (
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {customContentCollection?.map((customContentItem) => (
                  <div
                    className="flex gap-x-4"
                    key={`${customContentItem?.sys?.id}${uniqid()}`}
                  >
                    <dt className="flex-none">
                      <span className="sr-only">
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

            {buttons && (
              <div className="mt-8 space-x-4">
                {buttons.map((button) => (
                  <Button
                    className="button button inline-flex bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    key={button.fields.text}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
            <div className="relative mx-auto lg:mt-8 xl:mt-0">
              <div className="relative">
                <div className="relative z-1 mx-auto w-full overflow-hidden rounded bg-white shadow-xl lg:mr-0">
                  <div className="px-4 pt-6 sm:px-6">
                    {embedHeading && (
                      <p className="mb-3 text-center font-sans text-xl font-medium uppercase tracking-wide md:text-2xl">
                        {embedHeading}
                      </p>
                    )}
                    <div className="min-h-[384px]">
                      {embedScript && embedElement && (
                        <div
                          className="bg-white"
                          dangerouslySetInnerHTML={{ __html: embedElement }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 text-center sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      {" "}
                      We care about protecting your data. Read our{" "}
                      <Link
                        href="/privacy-policy"
                        className="font-bold text-gray-700 hover:underline"
                      >
                        Privacy Policy.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0">
        <svg
          className="relative -top-px fill-current text-gray-900"
          viewBox="0 0 1000 50"
        >
          <path d="M 0 0 L 0 50 L 1000 50 L 1000 0 L 950 48 L 50 48" />
          <path
            d="M 16 0 L 55 38 L 945 38 L 984 0"
            vectorEffect="non-scaling-stroke"
            fillOpacity="0"
            strokeWidth="4"
            className="stroke-current text-primary-600"
          />
        </svg>
      </div>
    </section>
  );
}
