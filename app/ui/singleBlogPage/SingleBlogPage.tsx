import React from "react";
import Image from "next/image";
import { getPost } from "@/lib/data";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    console.log("error at blog page and blog API endpoint.");
  }
  return res.json();
};

type Props = { params: any };

const SingleBlogPage = async (props: Props) => {
  const { slug } = props.params;
  const post = await getData(slug);

  return (
    <>
      <div className="m-20 flex gap-10">
        <div>
          <Image
            src={`${post.img}`}
            alt="pict-1"
            height={500}
            width={500}
            className="rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-2xl">{post.title}</h1>
          <div className="flex gap-4">
            <h1 className="font-semibold">Author:</h1>
            <p>Mondol</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold">Published:</h1>
            <p>09-07-24</p>
          </div>
          <div>
            <p>{post.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
