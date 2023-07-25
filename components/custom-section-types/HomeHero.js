import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Button from "../Button";
import Media from "../Media";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="prose prose-lg prose-primary-invert mt-6 md:prose-xl">
        {children}
      </p>
    ),
  },
};

export default function HomeHero({ title, unformattedBody, media, buttons }) {
  return (
    <section className="relative bg-primary-900">
      <div className="pattern-primary absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>

      <div className="relative"></div>
      <div className="container relative z-1 max-w-screen-2xl py-12 md:py-16 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="max-w-xl lg:mt-8">
            {title && (
              <h1 className="font-heading text-5xl font-semibold text-white md:text-6xl xl:text-7xl">
                {title}
              </h1>
            )}

            {unformattedBody && (
              <div className="prose prose-lg prose-primary-invert mt-6 md:prose-xl">
                {documentToReactComponents(unformattedBody, options)}
              </div>
            )}

            {buttons && (
              <div className="mt-8">
                {buttons?.map((button) => (
                  <Button
                    className="button button bg-secondary-600 inline-flex border-white text-white hover:bg-white hover:text-primary-700 focus:ring-primary-700"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    key={button.fields.text}
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <figure className="aspect-[16/9] overflow-clip rounded-sm">
              <Media media={media} />
            </figure>
          </div>
        </div>
      </div>
      <div className="relative isolate">
        <svg
          className="absolute bottom-0 left-0 right-0 fill-current text-primary-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 300"
          fillOpacity="0.15"
        >
          <path d="M 0 300 L 1000 0 L 1000 300 Z" />
          <path d="M 0 500 L 1000 0 L 1000 300 Z" />
        </svg>
        <svg
          className="relative z-1 w-full fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 50"
        >
          <path d="M 0 0 Q 500 50 1000 0 L 1000 50 L 0 50" />
        </svg>
      </div>
    </section>
  );
}
