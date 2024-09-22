import PostCard from "../ui/postcard/postCard";
import { getPosts } from "@/lib/data";

//function for blog page
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  if (!res.ok) {
    console.log("error at blog page and blog API endpoint.");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  // console.log(posts);

  return (
    <div className="flex flex-wrap gap-4 m-20">
      {posts.map((post: any) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
