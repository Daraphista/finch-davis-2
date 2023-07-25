import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import ogImage from "../../public/og-image.png";
import uniqid from "uniqid";
import {
  formatDateAndTime,
  formatMachineReadableDateTime,
} from "@contentful/f36-datetime";
import { formatAuthorName } from "@/lib/blog";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-4 text-lg leading-8 text-gray-600">{children}</p>
    ),
  },
};

export default function BlogCards({ customContentCollection }) {
  return (
    <section>
      <div className="container max-w-screen-xl py-12 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {customContentCollection?.map((blog) => (
            <article
              className="flex flex-col items-start justify-between transition-transform group-hover:scale-105"
              key={blog?.sys?.id}
            >
              <Link
                className="group w-full overflow-clip rounded-sm shadow-lg transition-shadow hover:shadow-2xl"
                href={`/news/${blog?.fields?.slug}`}
              >
                <div className="relative flex w-full">
                  {blog?.fields?.image ? (
                    <Image
                      src={`https:${blog?.fields?.image?.fields?.file?.url}`}
                      width={
                        blog?.fields?.image?.fields?.file?.details?.image?.width
                      }
                      height={
                        blog?.fields?.image?.fields?.file?.details?.image
                          ?.height
                      }
                      alt=""
                      className="w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                  ) : (
                    <Image
                      src={ogImage}
                      alt=""
                      className="w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                  )}
                </div>

                <div className="max-w-xl p-6">
                  <div className="group relative">
                    <h3 className="mt-3 line-clamp-2 font-heading text-lg font-semibold leading-6 text-primary-900">
                      {blog?.fields?.title}
                    </h3>

                    {blog?.fields?.authors?.map((author, index) => {
                      if (index === blog?.fields?.authors.length) {
                        return (
                          author && (
                            <span className="sr-only" key={uniqid()}>
                              {author},{" "}
                            </span>
                          )
                        );
                      }
                      return (
                        author && (
                          <span className="sr-only" key={uniqid()}>
                            {author}
                          </span>
                        )
                      );
                    })}

                    <div className="mt-2 text-sm italic text-gray-500">
                      {blog?.fields?.date && (
                        <time
                          time={formatMachineReadableDateTime(
                            blog?.fields?.date,
                            "day"
                          )}
                        >
                          {formatDateAndTime(blog?.fields?.date, "day")}
                        </time>
                      )}
                      {blog?.fields?.authors && (
                        <>
                          {" "}
                          <span>by </span>
                          {blog?.fields?.authors?.map((author, index) => {
                            return formatAuthorName(
                              author,
                              blog?.fields?.authors,
                              index
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
