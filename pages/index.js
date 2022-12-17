import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Post from "../Components/Post/Post";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
        <button className="btn btn-primary mx-autp">See All Posts</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
};
