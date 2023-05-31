import Button from "../Button";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p class="flex-auto">{children}</p>,
  },
};

export default function Blurb({
  id,
  title,
  subtitle,
  body,
  customContentCollection,
  buttons,
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
          <div class="mx-auto mt-12 max-w-2xl lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {customContentCollection?.map((customContentItem) => (
                <div class="flex flex-col">
                  <dt class="text-lg font-semibold leading-7 text-gray-900">
                    {customContentItem?.fields?.title}
                  </dt>
                  <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    {documentToReactComponents(
                      customContentItem?.fields?.body,
                      options
                    )}
                  </dd>
                </div>
              ))}
            </dl>
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
