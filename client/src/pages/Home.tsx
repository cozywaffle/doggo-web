import { FC, useMemo, useState } from "react";
import axios from "../utils/axios";
import Post from "../components/Post";
import { IPost } from "../redux/slices/types";

const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>();

  const fetchPosts = async () => {
    const { data } = await axios.get("/posts");

    setPosts(data);
  };

  useMemo(fetchPosts, []);

  return (
    <section className="flex flex-col justify-center items-center p-4 space-y-6">
      {posts ? (
        posts.map((post, index) => (
          <Post
            props={{
              imageUrl: post.imageUrl,
              username: post.user.username,
              tags: post.tags,
              userId: post.user._id,
              postIndex: index,
              updatedAt: post.updatedAt,
              title: post.title,
              text: post.text,
              postId: post._id,
              viewsCount: post.viewsCount,
            }}
          />
        ))
      ) : (
        <>
          <h1>Couldn't find any posts :/</h1>
          <h1>Try again later!</h1>
        </>
      )}
    </section>
  );
};

export default Home;
