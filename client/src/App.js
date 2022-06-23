import React, { useState } from "react";
import "./App.css";

const initialPosts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar: "./images/avatar1.png",
      username: "Test User",
    },
  },
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar: "./images/avatar2.png",
      username: "Test User 2",
    },
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div className="container">
      <div className="feed">
        {posts.map((post, i) => (
          <div key={post.id} className="post">
            <div className="header">
              <img src={post.user.avatar} alt="avatar" />
              <h2>{post.user.username}</h2>
            </div>
            <p className="content">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
