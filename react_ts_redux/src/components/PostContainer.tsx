import { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(30);

  const {
    data: posts,
    error,
    isLoading,
    // refetch,
  } = postAPI.useFetchAllPostsQuery(limit);

  const [createPost] = postAPI.useCreatePostMutation()
  const [deletePost] = postAPI.useDeletePostMutation()
  const [updatePost] = postAPI.useUpdatePostMutation()
  
  const handleCreate = async () => {
    const title = prompt('title...')
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => { 
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => { 
    updatePost(post)
  }

  useEffect(() => {
    setTimeout(() => {
      setLimit(40);
    }, 3000);
  });

  return (
    <div>
      {/* <button onClick={() => refetch()}>Refetch</button> */}
      <div className="post_list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        {posts && posts.map((post) => (
          <PostItem
            remove={handleRemove}
            update={handleUpdate}
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
