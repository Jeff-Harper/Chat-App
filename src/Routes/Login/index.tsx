import { AppContainer } from "../../Components/AppContainer/AppContainer";
import SidebarContainer from "../../Components/SidebarContainer/SidebarContainer";
import WorkAreaContainer from "../../Components/WorkAreaContainer/WorkAreaContainer";
import LoginForm from "./LoginForm/LoginForm";
import LoginSidebar from "./LoginSidebar/LoginSidebar";
import styles from "./styles.module.css";

export default function Login() {
    return (
        <AppContainer>
            <LoginSidebar />
            <LoginForm />
        </AppContainer>
    );
}
