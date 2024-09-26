import { useState } from "react";
import { auth } from "../lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="submit"> Create an account</button>
      </form>
    </div>
  );
};

export default Signup;
