import "./styles/App.css"
import { useState, useMemo, useEffect } from "react"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MyModal from "./UI/MyModal/MyModal"
import MyButton from "./UI/button/MyButton"
import { usePosts } from "./hooks/usePosts"
import useCounter from "./hooks/useCounter"
import Loader from "./UI/Loader/Loader"
import { useFetching } from "./hooks/useFetching"
import PostService from "./API/PostService"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  // const [isPostLoading, setIsPostsLoading] = useState(false)
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts(response)
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    console.log("use effect")
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  
  const { counter1:arsen, increment, decrement } = useCounter(5) 
  return (
    <div className="App">
      <div>
        <p>{arsen}</p>
        <p><button onClick={increment}>Add</button></p>
        <p><button onClick={decrement}>Sub</button></p>
      </div>
      <MyButton onClick={() => setModal(true)}>Add Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
      
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Something went wrong</h1>}
      {isPostLoading ? (
        <div style={{
          display: "flex", justifyContent: "center",
          marginTop: 50
        }}
        >
          <Loader />
      </div>
      ) : (          
        <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Posts about programming"} />
      )}
    </div>
  );
}

export default App;
