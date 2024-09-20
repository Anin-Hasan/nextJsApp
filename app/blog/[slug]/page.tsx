"use client";
import SingleBlogPage from "@/app/ui/singleBlogPage/SingleBlogPage";
import { MyFooter } from "@/app/ui/footer/footer";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { slug } = useParams();
  const params = { slug };
  return (
    <div>
      <SingleBlogPage params={params} />
      <MyFooter />
    </div>
  );
}
