import { useState } from "react";
import { LargeBox } from "../../../Components/Box/LargeBox";
import TextInput from "../../../Components/TextInput/TextInput";
import WorkAreaContainer from "../../../Components/WorkAreaContainer/WorkAreaContainer";
import styles from "./styles.module.css";
import { Button } from "../../../Components/Button/Button";

export default function LoginForm() {
    const [value, setValue] = useState("");

    console.log(value);

    return (
        <WorkAreaContainer>
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
        </WorkAreaContainer>
    );
}
