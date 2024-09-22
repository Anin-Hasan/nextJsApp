import { connectToDb } from "./utils";
import { Post } from "./models";

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log("error getting all posts", error);
    // throw new Error(String("Failed to fetch posts"));
    return [];
  }
};

export const getPost = async (slug: string) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post ? post.toObject() : null;
  } catch (error) {
    console.log("error getting post", error);
    return null;
  }
};

// export const getUser = async (id: string) => {
//   try {
//     connectToDb();
//     const user = await User.findById(id);
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw new Error(String("Failed to fetch user"));
//   }
// };
// export const getUsers = async () => {
//   try {
//     connectToDb();
//     const users = await User.find();
//     return users;
//   } catch (error) {
//     console.log(error);
//     throw new Error(String("Failed to fetch users"));
//   }
// };
