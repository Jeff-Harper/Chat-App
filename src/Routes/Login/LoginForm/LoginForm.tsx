import React, { useState } from "react";
import { LargeBox } from "../../../Components/Box/LargeBox";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { Button } from "../../../Components/Button/Button";
import styles from "./LoginForm.module.css";

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
                    type="text"
                    label="First Name"
                    valueCallback={setValue}
                    placeholder="Jeff"
                    required
                />
                <Button size="medium" variant="wide" type="submit">
                    Login
                </Button>
            </form>
        </LargeBox>
    );
}
