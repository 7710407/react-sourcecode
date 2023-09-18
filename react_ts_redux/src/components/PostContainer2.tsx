import { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
// import PostItem from "./PostItem";

const PostContainer2 = () => {
  const [limit, setLimit] = useState(5);

  const {
    // data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(limit);

  useEffect(()=>{
    setTimeout(()=>{
        setLimit(7)
    }, 7000)
  })
  
  return (
    <div>
      <div className="post_list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        {/* {posts && posts.map((post) => <PostItem key={post.id} post={post} />)} */}
      </div>
    </div>
  );
};

export default PostContainer2;
