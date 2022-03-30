import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import AuthScreen from "./AuthScreen";

export default function SigninScreen() {
  const auth = getAuth();
  async function signin(formData) {
    await signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    ).catch((error) => {
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
