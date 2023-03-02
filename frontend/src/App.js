import { useState } from "react";
import "./App.css";
import axios from "axios";
import Welcome from "./Welcome";
import { useNavigate, Route, Routes } from "react-router-dom";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000", { username, password })
      .then((res) => {
        console.log(res);
        navigate("/welcome");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to the game</h1>}
        />

        <Route
          path="/welcome"
          element={<Welcome {...props} username={username} />}
        />
      </Routes>

      <form onSubmit={handleSubmit} action="/welcome">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit" class="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
