import Head from "next/head";
import { createClient } from "contentful";
import PostCard from "../components/PostCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      posts: res.items,
    },
  };
}

export default function Home({ posts }) {
  return (
    // <div className="transition ease-in dark:bg-gray-800">
    <div>
      {posts.map((post) => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </div>
  );
}
