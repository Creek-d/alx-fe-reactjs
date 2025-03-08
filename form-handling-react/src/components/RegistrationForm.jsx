import { useState } from "react";

const RegistrationForm = () => {
  // Separate state variables for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("User Registered:", { username, email, password });
      alert("Form submitted successfully!");

      // Reset form after submission
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <label>Email:</label>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <label>Password:</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
