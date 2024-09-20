import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  post: any;
};

const PostCard = async (props: Props) => {
  const { title, body, id } = props.post;
  const slicedTitle = title.length > 5 ? `${title.slice(0, 10)}` : title;
  const slicedBody = body.length > 5 ? `${body.slice(0, 80)}...` : body;
  return (
    <div>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow my-8">
        <Link href="#">
          <Image
            src="/pic-1.jpg"
            width={500}
            height={500}
            alt="Post image"
            className="rounded-lg"
          />
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {slicedTitle}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {slicedBody}
          </p>
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </div>
      </div>
    </div>
  );
};

export default PostCard;
