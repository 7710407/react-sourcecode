import { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(5);

  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, {pollingInterval: 1000});

  useEffect(() => {
    setTimeout(() => {
      setLimit(4);
    }, 3000);
  });

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>
      <div className="post_list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
