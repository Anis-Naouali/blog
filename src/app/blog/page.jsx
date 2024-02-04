import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";
// Fetch data from an API

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();

  // Fetch data without an API
// const posts = await getPosts();



  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
