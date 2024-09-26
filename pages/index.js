import { useEffect, useState } from "react";
import { auth } from "../lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Home = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      fetchPosts();
    });
    return () => unsubscribe();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div>
      <h1>Welcome {user ? user.email : "Guest"}</h1>
      {!user ? (
        <div className="btn-box">
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      ) : (
        <div className="btn-box">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <h2>Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
