import Card from "../components/Cards/Card";
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
    if (posts.length === 0) {
      fetchData();
    }
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
      <div className="header">
        <div className="logo">sincerely, yours</div>
        <div className="signature">Taguhi Karakashyan</div>
        <div className="write-post">Write a new post</div>
        {posts.map((item) => {
          return <div key={item.id}>
            <Card
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
