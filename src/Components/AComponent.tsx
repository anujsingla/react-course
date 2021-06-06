import { useUserContext } from "../context/UserContextProvider";

export function AComponent() {
    const { userInfo: { isUserLogin } } = useUserContext();
    console.log('AComponent isUserLogin', isUserLogin)
    return (
        <div>
            {isUserLogin ? 'Hello Anuj' : 'Guest User'} { ' '}
        </div>
    )
}