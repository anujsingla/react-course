// useContext + useReducer

// useContext -> Helps to pass data throughout app without manually passing props down the tree
// useReducer -> It is similar to useState hook and helps to manage complex state.

// Why do we use useContext and useReducer together?

// Reason: To share states between the components i.e. Global State Management

// In the previous posts, we have seen how to make use of useContext and useReducer hooks.

// So, in this video, we will see how to make use of them together!
// For small project, we use useContext + useReducer hook
// For large project (Best practice, not compulsory), we use redux or recoil or other state management library

// UI -> Action -> Dispatch -> state update -> Notify to the UI for state change
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