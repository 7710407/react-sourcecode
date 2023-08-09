import "./styles/App.css";
import { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import { useCounter } from "./hooks/useCounter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "description1" },
    { id: 2, title: "React", body: "description2" },
    { id: 3, title: "Redux", body: "description3" },
  ]);

  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false) 

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  
  const [counter1, increment, decrement] = useCounter(5) 
  return (
    <div className="App">
      <div>
        <p>{counter1}</p>
        <p><button onClick={increment}>Add</button></p>
      </div>
      <MyButton onClick={() => setModal(true)}>Add Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
      
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Posts about programming"} />
    </div>
  );
}

export default App;
