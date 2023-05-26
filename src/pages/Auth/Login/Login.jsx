import { useState } from "react";
import { useStateContext } from "../../../context/ContextProvider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Style.css";

const credentials = [
  { role: "admin", name: "Laayek", password: "123" },
  { role: "packer", name: "Ibne", password: "321" },
  { role: "security", name: "Habib", password: "213" },
];

export default function Login({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isClicked, setIsClicked } = useStateContext();

  function handleSubmit(event) {
    event.preventDefault();

    const isAdmin = credentials[0].name === username && credentials[0].password === password;
    const isPacker = credentials[1].name === username && credentials[1].password === password;
    const isSecurity = credentials[2].name === username && credentials[2].password === password;

    if (isAdmin) {
      onSubmit({ isAdmin });
    } else if (isPacker) {
      onSubmit({ isPacker });
    } else if (isSecurity) {
      onSubmit({ isSecurity });
    } else {
      console.log("You're no one");
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(180deg, #52BBA6 0%, #FFFFFF 48.77%, #52BBA6 98.77%);",
          position: "fixed",
          height: "100%",
          width: "100%",
          "@media (max-width: 1100px)": { justifyContent: "center", flexDirection: "column" },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            "@media (max-width: 1100px)": { width: "75%" },
          }}
        >
          <div className="auth-logo">
            <img src="assets/brand-logo.svg" alt="" />
            <img src="assets/brand-name.svg" alt="" />
          </div>
          <form onSubmit={handleSubmit} className="auth-form" action="POST">
            <div>
              <label htmlFor="name">User name</label>
              <br />
              <br />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <br />
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isClicked ? "password" : "text"}
                placeholder="Enter your password"
                required
              />
              <img
                onClick={() => setIsClicked((prev) => !prev)}
                id="togglePassword"
                src={isClicked ? "assets/eye-solid.svg" : "assets/eye-slash-solid.svg"}
                alt=""
              />
            </div>

            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button type="submit">Login</button>
          </form>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "50%",
            "@media (max-width: 1100px)": { display: "none" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            <img src="assets/camera.svg" alt="" />
            <img width="75%" src="assets/slogan.svg" alt="" />
          </Box>
        </Grid>
      </Box>
    </>
  );
}