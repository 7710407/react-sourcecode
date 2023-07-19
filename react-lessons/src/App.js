import './styles/App.css';
import { useState } from 'react';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'JS', body:'description1'},
    {id:2, title:'React', body:'description2'},
    {id:3, title:'Redux', body:'description3'}
    ]);

  const [posts2, setPosts1] = useState([
    {id:1, title:'JS1', body:'description1'},
    {id:2, title:'React1', body:'description2'},
    {id:3, title:'Redux1', body:'description3'}
    ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"Post1"}/>
      <PostList posts={posts2} title={"Post2"}/>
    </div>
  );
}

export default App;
