import React, { useState } from "react";
import { useToast } from "native-base";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import AuthScreen from "./AuthScreen";
import InputsManager from "../components/displayData/InputsManager";

export default function SignupScreen({ setNav }) {
  const auth = getAuth();
  async function signup(formData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      sendEmailVerification(user);
      setNav("verify");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
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
      type: "password",
    },
    {
      text: "Passwort wiederholen",
      replacing: "password2",
      iconName: "lock",
      type: "password",
    },
  ];
  return <AuthScreen onSubmit={signup} inputs={inputs} title="Registrieren" />;
}
