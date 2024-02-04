"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  // const userId = formData.get("userId");
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    console.log("Saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "Failed to add post" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("Deleted from DB");
  } catch (error) {
    console.log(error);
    return { error: "Failed to add post" };
  }
};

export const updatePost = async (formData) => {
  const { id, title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndUpdate(id, { title, desc, slug, userId });
    revalidatePath("/blog");
    console.log("Updated from DB");
  } catch (error) {
    console.log(error);
    return { error: "Failed to update post" };
  }
};
