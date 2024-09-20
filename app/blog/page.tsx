import PostCard from "../ui/postcard/postCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  if (!res.ok) {
    throw new Error("Data Fetching Problem  ");
  }
  return data;
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className="flex flex-wrap justify-between m-20">
      {posts.map((post: any) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
