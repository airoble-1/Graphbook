import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      text: postContent,
      user: {
        avatar: "./images/avatar2.png",
        username: "Fake User",
      },
    };
    setPosts([newPost, ...posts]);
    setPostContent("");
  };

  return (
    <div className="container">
      <Helmet>
        <title>Graphbook - Feed</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="postForm">
        <form onSubmit={handleSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write your custom post!"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
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
