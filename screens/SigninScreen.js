import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/database/Firebase";
import AuthScreen from "./AuthScreen";

export default function SigninScreen({ setNav, setUser }) {
  function signin(formData) {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setNav("dashboard");
        console.log("logged in", user);
        setUser(user);
      })
      .catch((error) => {
        console.log("Wrong credentials");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "::", errorMessage);
      });
  }
  const inputs = [
    {
      text: "E-Mail",
      replacing: "email",
      iconName: "email",
    },
    {
      text: "Passwort",
      replacing: "password",
      iconName: "lock",
    },
  ];
  return <AuthScreen onSubmit={signin} inputs={inputs} title="Anmelden" />;
}
