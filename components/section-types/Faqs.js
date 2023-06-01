import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import uniqid from "uniqid";

const customContentOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-base leading-7 text-gray-600">{children}</p>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="ml-7 list-disc text-base leading-7 text-gray-600">
        {children}
      </li>
    ),
  },
};

export default function Faqs({ title, subtitle, customContentCollection }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div>
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
          </div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {customContentCollection.map((customContentItem) => (
              <Disclosure as="div" key={uniqid()} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="font-heading text-base font-semibold leading-7">
                          {customContentItem?.fields?.title}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-4 space-y-5 pr-12">
                      {documentToReactComponents(
                        customContentItem?.fields?.body,
                        customContentOptions
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
