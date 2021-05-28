import { useContext } from "react";
import { userContext } from "./UseContextHook";

export function DisplayName() {
    const contextValue = useContext(userContext);

    return <div>User Name: {contextValue.name}</div>
}