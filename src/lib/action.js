"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  //daten von page.jsx...\serveractiontest bekommen
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    //erstellen von new Post
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Post added to DB");
    revalidatePath("/blog"); //updatet wenn veränderung (automatisch)
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  //id ist der name von input in page.jsx
  const { id } = Object.fromEntries(formData);
  try {
    //löschen von Post
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log(`Deleted post with ID`);
    revalidatePath("/blog"); //updatet wenn veränderung (automatisch)
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};
export const handleLogout = async () => {
  "use server";
  await signOut();
};

