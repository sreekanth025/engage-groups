import { appConstants } from "../helpers/appConstants";
import LoginForm from "./forms/LoginForm";
import { Link } from 'react-router-dom'
import { Button } from "reactstrap";

const LoginPage = ({setIsAuth}) => {

    setIsAuth(false);
    localStorage.removeItem(appConstants.AUTH_TOKEN)


    function RegisterButton() {
        return <Link to="/signup"><Button>Signup</Button></Link>
    }

    return (
        <div> 
            <LoginForm setIsAuth={setIsAuth}/>

            <p>Not a registered user ?</p>
            <RegisterButton />
        </div>
    );
}

export default LoginPage