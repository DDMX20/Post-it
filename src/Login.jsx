import React from "react";
import "../public/Login.css";

function Login() {
  return (
    <div className="Login">
      <h1>Login</h1>
      <form action="">
        <input className="Username" type="text" placeholder="USERNAME" />
        <br />
        <input className="Username" type="password" placeholder="PASSWORD" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
