import PostCard from "../ui/postcard/postCard";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-wrap gap-4 m-20">
      {posts.map((post: any) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
