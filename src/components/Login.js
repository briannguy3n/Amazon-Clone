import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useStateValue } from "../StateProvider";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      navigate("/");
    });

    // try {
    //   const user = await createUserWithEmailAndPassword(auth, email, password);
    //   console.log(user);
    //   if (user) {
    //     navigate("/");
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const signIn = async (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(auth, email, password).then((auth) => {
      navigate("/");
    });
    // try {
    //   const user = await signInWithEmailAndPassword(auth, email, password);
    //   console.log(user);
    //   if (user) {
    //     navigate("/");
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          {/* Set the value to email state. On change, we set the email to the value user inputs.*/}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in, you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads.
        </p>

        <button
          type="submit"
          onClick={register}
          className="login_registerButton"
          style={{ cursor: "pointer" }}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
