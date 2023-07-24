import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "description1" },
    { id: 2, title: "React", body: "description2" },
    { id: 3, title: "Redux", body: "description3" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm cre={createPost} />
      { posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={"Post1"} />
        )
        : 
        (<h1>No posts found</h1>)
    }
    </div>
  );
}

export default App;
