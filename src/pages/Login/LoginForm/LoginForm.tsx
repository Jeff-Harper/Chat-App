import React, { useState } from "react";
import { LargeBox } from "../../../components/Box/LargeBox";
import { Form } from "react-router-dom";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
// import styles from "./LoginForm.module.css";

export function LoginForm() {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <LargeBox flex="column">
      <form action="">
        <h1>Login</h1>
        <TextInput
          id="firstName"
          name="firstName"
          type="search"
          autoComplete="email"
          label="First Name"
          setValue={setValue}
          placeholder="Jeff"
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </LargeBox>
  );
}
