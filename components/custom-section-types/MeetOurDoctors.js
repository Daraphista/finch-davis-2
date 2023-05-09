import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import uniqid from "uniqid";
import Image from "next/image";

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
      <p className="mt-6 text-base leading-7 text-gray-600">{children}</p>
    ),
  },
};

export default function MeetOurDoctors({
  title,
  unformattedBody,
  customContentCollection,
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          )}

          {unformattedBody &&
            documentToReactComponents(unformattedBody, options)}
        </div>
        {customContentCollection && (
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {customContentCollection?.map((customContentItem) => (
              <li
                className="flex flex-col gap-6 xl:flex-row"
                key={`${customContentItem?.sys?.id}${uniqid()}`}
              >
                <Image
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                  src={`https:${customContentItem?.fields?.media?.fields?.file?.url}`}
                  height={
                    customContentItem?.fields?.media?.fields?.file?.details
                      ?.image?.height
                  }
                  width={
                    customContentItem?.fields?.media?.fields?.file?.details
                      ?.image?.width
                  }
                  alt=""
                />
                <div className="flex-auto">
                  {customContentItem?.fields?.title && (
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {customContentItem?.fields?.title}
                    </h3>
                  )}
                  {customContentItem?.fields?.subtitle && (
                    <p className="text-base leading-7 text-gray-600">
                      {customContentItem?.fields?.subtitle}
                    </p>
                  )}
                  {customContentItem?.fields?.body &&
                    documentToReactComponents(
                      customContentItem?.fields?.body,
                      customBodyOptions
                    )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
