import React, { useState } from "react";
import { useToast } from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/datahandler/Firebase";
import AuthScreen from "./AuthScreen";
export default function SignupScreen({ setNav }) {
  function signup(formData) {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setNav("verify");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
    {
      text: "Passwort wiederholen",
      replacing: "password2",
      iconName: "lock",
    },
  ];
  return <AuthScreen onSubmit={signup} inputs={inputs} title="Registrieren" />;
}
