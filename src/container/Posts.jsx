import Box from "../components/Box/Box";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./Posts.css";

const getIntialPosts = () => {
  const storedPosts = localStorage.getItem("posts");
  const savedPosts = JSON.parse(storedPosts);
  return savedPosts || [];
};

const Posts = () => {
  const [posts, setPosts] = useState(getIntialPosts());
  const setLocalStorage = () => {
    const storedPosts = JSON.stringify(posts);
    localStorage.setItem("posts", storedPosts);
  };
  useEffect(() => {
    setLocalStorage();
  }, [posts]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deletePosts = (id) => {
    setPosts([
      ...posts.filter((post) => {
        return post.id !== id;
      }),
    ]);
  };

  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      userId: Math.floor(Math.random() * 10) + 1,
      title: "",
      body: "",
    };
    const unshitPost = posts.unshift(newPost)
    setPosts([...posts, unshitPost]);
  };

  const updatePosts = (id, updatedTitle, updatedBody) => {
   
    setPosts(
      posts.map(post => {
        console.log(id);
        console.log(post);
        if (post.id === id) {
          post.title = updatedTitle
          post.body = updatedBody
        }
        return post
      })
    )
  }

  return (
    posts && (
      <div className="global-section">
        <h1>Posts</h1>
        {posts.map((item) => {
          return <div key={item.id}>
            <Box 
              onDelete={deletePosts} 
              onEdit={updatePosts}
              title={item.title}
              body={item.body}
              id={item.id}
            />
            
          </div>;
        })}
        <span className="add-btn" onClick={addPost}>
              <FontAwesomeIcon icon={faCirclePlus} />
            </span>
      </div>
    )
  );
};

export default Posts;
