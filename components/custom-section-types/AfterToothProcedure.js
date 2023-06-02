import Button from "../Button";
import Media from "../Media";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import uniqid from "uniqid";

const customBodyOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="max-w-prose text-base leading-7 text-gray-600">
        {children}
      </p>
    ),
  },
};

export default function AfterToothProcedure({
  id,
  title,
  subtitle,
  body,
  customContentCollection,
  buttons,
  media,
}) {
  return (
    <section id={id} className="relative bg-transparent text-lg">
      <div className="relative z-1 mx-auto w-full max-w-screen-lg px-4 pb-6 pt-12 md:pb-6 md:pt-12 lg:pb-8 lg:pt-16 xl:pb-10 xl:pt-20">
        {title && (
          <h2 className="font-heading text-2xl font-semibold text-gray-900 md:text-3xl xl:text-4xl">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-theme-title-primary mt-3 font-heading text-xl font-medium md:text-2xl">
            {subtitle}
          </p>
        )}

        {body && <div className="prose mx-auto mt-6 xl:prose-lg">{body}</div>}

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
        {buttons && (
          <div className="mt-6 flex justify-center gap-4">
            {buttons.map((button) => (
              <Button
                className="button inline-flex rounded-md border-2 border-transparent bg-blue-600 px-6 py-2 text-white hover:cursor-pointer hover:bg-blue-500 focus:ring-blue-500"
                text={button.fields.text}
                pageRef={button.fields.page}
                key={button.fields.text}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
