import SingleBlogPage from "@/app/ui/singleBlogPage/SingleBlogPage";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <SingleBlogPage params={params} />
    </div>
  );
}
