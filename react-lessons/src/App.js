import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "description1" },
    { id: 2, title: "React", body: "description2" },
    { id: 3, title: "Redux", body: "description3" },
  ]);

  const [title, setTitle] = useState("1")
  const [body, setBody] = useState("2")
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
    // console.log(newPost)
  }

  return (
    <div className="App">
      <form>
        <MyInput 
        onChange={(e)=>setTitle(e.target.value)} 
        value={title} 
        type='text' 
        placeholder="post name" />
        <MyInput 
        onChange={(e)=>setBody(e.target.value)} 
        value={body} 
        type='text' 
        placeholder="post description" />
      <MyButton onClick={addNewPost}>Add</MyButton>
      </form>
      <PostList posts={posts} title={"Post1"} />
    </div>
  );
}

export default App;
