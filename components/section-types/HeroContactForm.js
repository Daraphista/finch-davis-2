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
