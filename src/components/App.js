import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from './ArticleList';

console.log(blogData);

function App() {
  const blogPosts = [
    {
      title: "First Post",
      date: "August 5, 2024",
      preview: "This is the preview of the first post.",
    },
    {
      title: "Second Post",
      date: "August 6, 2024",
      preview: "This is the preview of the second post.",
    },
  ];

  return (
    <div className="App">
      <Header name="My Blog" />
      <About
        image="https://via.placeholder.com/215"
        about="Welcome to my blog!"
      />
      <ArticleList posts={blogPosts} />
    </div>
  );
}

export default App;
