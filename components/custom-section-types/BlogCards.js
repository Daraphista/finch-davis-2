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

        </div>
      </div>
    </section>
  );
}
