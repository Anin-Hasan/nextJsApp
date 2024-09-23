"use server";
import { signIn, signOut } from "@/lib/auth";
import { connectToDb } from "./utils";
import { User } from "./models";

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleGithubLogout = async () => {
  await signOut();
};

export const register = async (formData: any) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat)
    return { error: "Password does not matched." };
  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists." };
    }

    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db.");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong to saving user." };
  }
};

export const login = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log(error);
    return { error: "something went wrong to login user." };
  }
};
