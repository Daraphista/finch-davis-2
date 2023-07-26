import Button from "../Button";
import Media from "../Media";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="prose mt-3 bg-transparent xl:prose-lg">{children}</p>
    ),
  },
};

export default function Overview({
  id,
  title,
  subtitle,
  unformattedBody,
  media,
  buttons,
  codeEmbed,
}) {
  return (
    <section className="relative">
      <div className="container relative z-1 max-w-screen-xl py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            {title && (
              <h2 className="font-heading text-3xl font-semibold text-gray-900 md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="mt-3 text-lg font-normal text-primary-900 md:text-2xl">
                {subtitle}
              </h3>
            )}

            <div className="prose mt-6 xl:prose-lg">
              {unformattedBody && (
                <div>{documentToReactComponents(unformattedBody, options)}</div>
              )}
            </div>

            {buttons && (
              <div className="mt-6">
                {buttons?.map((button) => (
                  <Button
                    className="button inline-flex border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white focus:ring-primary-500"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    key={button.fields.text}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <figure className="rounded-sm overflow-clip">
              <Media media={media} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
