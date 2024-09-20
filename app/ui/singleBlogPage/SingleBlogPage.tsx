import React from "react";
import Image from "next/image";

type Props = { params: any };

const getData = async (slug: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const data = res.json();
  if (!res.ok) {
    throw new Error("Data Fetching Problem  ");
  }
  return data;
};

const SingleBlogPage = async (props: Props) => {
  const { slug } = props.params;
  const post = await getData(slug);
  const { title, body } = post;
  return (
    <>
      <div className="m-20 flex gap-10">
        <div>
          <Image
            src="/pic-1.jpg"
            alt="pict-1"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-2xl">{title}</h1>
          <div className="flex gap-4">
            <h1 className="font-semibold">Author:</h1>
            <p>Mondol</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold">Published:</h1>
            <p>09-07-24</p>
          </div>
          <div>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
