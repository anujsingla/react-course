import { useContext } from "react";
import { userContext } from "./UseContextHook";

export function DisplayRollNo() {
    const contextValue = useContext(userContext);

    return <div>Roll No: {contextValue.rollNo}</div>
}