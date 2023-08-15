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
import { getPagesArray, getPageCount } from "./utils/pages"

function App() {
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  // const [isPostLoading, setIsPostsLoading] = useState(false)

  let pagesArray = getPagesArray(totalPages)
  console.log(pagesArray)
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
    // setTotalPages(totalCount)
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    // setPage(page)
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePage = (page) => { 
    setPage(page)
    fetchPosts(limit, page)
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
      {postError && <h1>Something went wrong {postError}</h1>}
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
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}>
            {p}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
