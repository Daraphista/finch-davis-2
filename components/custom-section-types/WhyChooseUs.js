import Button from "../Button";
import uniqid from "uniqid";

export default function WhyChooseUs({
  title,
  subtitle,
  body,
  customContentCollection,
  buttons,
}) {
  return (
    <section className="overflow-hidden">
      <div className="container max-w-screen-2xl py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center 2xl:border 2xl:p-12">
          <div className="px-6 md:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div>
                {title && (
                  <h1 className="text-base font-semibold uppercase tracking-wide text-primary-600 md:text-lg">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <h2 className="mt-1 font-heading text-2xl font-normal text-gray-900 md:text-3xl xl:text-4xl">
                    {subtitle}
                  </h2>
                )}
                {body && (
                  <div className="prose mt-4 max-w-lg xl:prose-lg">{body}</div>
                )}
              </div>

              {customContentCollection && (
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-lg">
                  {customContentCollection?.map((customContentItem) => (
                    <div
                      className="relative pl-9"
                      key={`${customContentItem?.sys?.id}${uniqid()}`}
                    >
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {customContentItem?.fields?.title}{" "}
                      </dt>
                      {customContentItem?.fields?.subtitle && (
                        <dd className="inline">
                          {customContentItem?.fields?.subtitle}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              )}

              {buttons && (
                <div className="mt-8 flex space-x-3">
                  {buttons?.map((button, index) => {
                    if (index === 0) {
                      return (
                        <Button
                          className="button inline-flex bg-primary-600 text-white hover:bg-primary-500 hover:text-white focus:ring-primary-500"
                          text={button.fields.text}
                          pageRef={button.fields.page}
                          url={button.fields.url}
                          key={button.fields.text}
                        />
                      );
                    }
                    return (
                      <Button
                        className="button inline-flex border-primary-400 text-primary-700 hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500"
                        text={button.fields.text}
                        pageRef={button.fields.page}
                        url={button.fields.url}
                        key={button.fields.text}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <figure className="aspect-h-9 aspect-w-16 overflow-hidden rounded-sm lg:aspect-h-3 lg:aspect-w-4">
              <img
                className="h-full w-full object-cover object-center"
                src="https://via.placeholder.com/1600x1200"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
