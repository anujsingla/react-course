import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { updateUserLogin } from "../reducer/UserDetailsReducer";

export function Header() {
    const { userInfo: { isUserLogin }, dispatch } = useUserContext();
    const [isLogin, setIsLogin] = useState(false);

    const userLogin = () => {
        setIsLogin(!isLogin);
    };

    useEffect(() => {
        updateUserLogin(dispatch, isLogin);
    }, [dispatch, isLogin])

    return (
        <div>
            {isUserLogin ? 'Hello Anuj' : 'Guest User'} { ' '}
            <button onClick={userLogin}>User Login</button>
        </div>
    )
}