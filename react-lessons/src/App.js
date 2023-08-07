import "./styles/App.css";
import { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "description1" },
    { id: 2, title: "React", body: "description2" },
    { id: 3, title: "Redux", body: "description3" },
  ]);

  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false) 

  const sortedPosts = useMemo(() => {
    console.log('sortedPost function worked');
    if (filter.sort) { 
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;    
  }, [filter.sort, posts])

  const sortedAndSearchedPosts  = useMemo(()=> {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  
  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Add Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm cre={createPost} /></MyModal>
      
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
