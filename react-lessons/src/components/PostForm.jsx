import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";

const PostForm = ({ cre }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    // setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });

    const newPost = {
      ...post,
      id: Date.now(),
    };
    cre(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="post name"
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type="text"
        placeholder="post description"
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  );
};

export default PostForm;
