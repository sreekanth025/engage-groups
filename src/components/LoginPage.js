import { appConstants } from "../helpers/appConstants";
import LoginForm from "./forms/LoginForm";

const LoginPage = ({setIsAuth}) => {

    setIsAuth(false);
    localStorage.removeItem(appConstants.AUTH_TOKEN)

    return (
        <div> 
            <LoginForm setIsAuth={setIsAuth}/>
        </div>
    );
}

export default LoginPage