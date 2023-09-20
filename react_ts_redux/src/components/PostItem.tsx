import React from "react";
import { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleUpdate = () => { 
    const title = prompt('title...') || ''
    update({...post, title})
  }
  
  const handleRemove = (event: React.MouseEvent) => { 
    event.stopPropagation()
    remove(post)
  }

  return (
    <div className="container">
      <div className="post" onClick={handleUpdate}>
        {post.id}.{post.title}
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
