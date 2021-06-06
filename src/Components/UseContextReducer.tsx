import { map } from "lodash";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { fetchUserDetails } from "../reducer/UserDetailsReducer";
import { Header } from "./Header";

export function UseContextProvider() {
    const { userInfo: { user }, dispatch } = useUserContext();

    console.log('user', user);

    useEffect(() => {
        fetchUserDetails(dispatch);
    }, [dispatch])

    return (
        <div>
            <Header />
            user Details:
            {map(user, (u, index) => <div key={index}>{u?.first_name} {' '} {u?.last_name}</div>)}
        </div>
    )
}