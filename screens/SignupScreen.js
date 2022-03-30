import React, { useState } from "react";
import { useToast } from "native-base";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import AuthScreen from "./AuthScreen";

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
      setNav("verify");
      user.sendEmailVerification();
      sendEmailVerification(user);
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
    },
    {
      text: "Passwort wiederholen",
      replacing: "password2",
      iconName: "lock",
    },
  ];
  return <AuthScreen onSubmit={signup} inputs={inputs} title="Registrieren" />;
}
