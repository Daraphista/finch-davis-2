import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Media from "../Media";
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

const customBodyOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="max-w-prose text-base leading-7 text-gray-600">
        {children}
      </p>
    ),
  },
};

export default function StagesOfPeriodontalDisease({
  title,
  unformattedBody,
  customContentCollection,
  media,
}) {
  return (
    <section className="">
      <div className="container max-w-screen-2xl py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {title && (
            <h2 className="font-heading text-3xl font-semibold text-gray-900 md:text-4xl">
              {title}
            </h2>
          )}

          {documentToReactComponents(unformattedBody, options)}
        </div>
        {customContentCollection && (
          <div className="mx-auto mt-16 max-w-2xl space-y-8 lg:max-w-none">
            {customContentCollection?.map((customContentItem) => (
              <dl
                className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 rounded-sm bg-primary-100 p-8 lg:max-w-none lg:grid-cols-3"
                key={uniqid()}
              >
                <div className="relative">
                  <Media media={media} />
                </div>
                <div className="row-start-2 lg:col-span-2 lg:col-start-2 lg:row-start-1">
                  {customContentItem?.fields?.title && (
                    <p className="font-heading text-xl font-semibold text-gray-900">
                      {customContentItem?.fields?.title}
                    </p>
                  )}
                  {customContentItem?.fields?.body && (
                    <div className="mt-6 flex flex-auto flex-col space-y-4 ">
                      {documentToReactComponents(
                        customContentItem?.fields?.body,
                        customBodyOptions
                      )}
                    </div>
                  )}
                </div>
              </dl>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
