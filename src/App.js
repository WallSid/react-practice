import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPost] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3'},
    {id: 4, title: 'JavaScript 4', body: 'Description 4'},
  ])
  const [posts2, setPost2] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Python2', body: 'Description 2'},
    {id: 3, title: 'Python3', body: 'Description 3'},
    {id: 4, title: 'Python4', body: 'Description 4'},
  ])

  return (
    <div className="App">
      <form action="submit">
        <input type="text" placeholder="Post name"/>
        <input type="text" placeholder="Post description"/>
        <MyButton>Create post</MyButton>
      </form>
        <PostList posts={posts} title='Posts about JS'/>
        <PostList posts={posts2} title='Posts about Python'/>
    </div>
  );
}

export default App;
