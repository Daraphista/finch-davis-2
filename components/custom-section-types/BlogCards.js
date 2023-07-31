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
              ></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
