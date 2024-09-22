import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card } from "flowbite-react";

type Props = {
  post: any;
};

const PostCard = async (props: Props) => {
  const { title, desc, slug, img } = props.post;
  const slicedTitle = title.length > 5 ? `${title.slice(0, 10)}` : title;
  const slicedDesc = desc.length > 5 ? `${desc.slice(0, 80)}...` : desc;

  return (
    <div>
      <Card
        className="max-w-sm mb-8 p-10"
        renderImage={() => (
          <Image
            width={500}
            height={500}
            src={img}
            alt="image 1"
            className="rounded-lg"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-2 ">
          {slicedTitle}
        </h5>
        <p className="font-normal text-gray-700 ">{slicedDesc}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 py-2 w-36 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </Card>
    </div>
  );
};

export default PostCard;
