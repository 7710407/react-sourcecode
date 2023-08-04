import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "description1" },
    { id: 2, title: "React", body: "description2" },
    { id: 3, title: "Redux", body: "description3" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function getSortedPosts() { 
    console.log('sortedPost function worked');
    if (selectedSort) { 
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const sortedPosts = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  
  const sortPosts = (sort) => { 
    setSelectedSort(sort);
    // console.log(sort);
  }
  
  return (
    <div className="App">
      <PostForm cre={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MyInput 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search"
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Sorted by'
        options={[
          {value: 'title', name: "By Name"},
          {value: 'body', name: "By Description"}
        ]}
      />
      { posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title={"Posts about programming"} />
        )
        : 
        (<h1>No posts found</h1>)
    }
    </div>
  );
}

export default App;
