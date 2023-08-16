import React from "react";
import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate()
  const dynamicNavigation = (id) => { 
    navigate(`/posts/${id}`)
  }

  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => dynamicNavigation(props.post.id)}>Open</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
