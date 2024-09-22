import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (
  request: any,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching post");
  }
};
