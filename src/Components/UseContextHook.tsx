import { createContext, useState } from "react";
import { DisplayName } from "./DisplayName";
import { DisplayRollNo } from "./DisplayRollNo";

// useContext Hook

// What is React Context:

// - helps to pass data throughout app without manually passing props down the tree (Avoid props drilling).
// - Return object with 2 values { Provider, Consumer }
// - Provider -> rovider to make a value available to all children and grandchildren
// - Consumer -> it grab the value from context.
// - useContext(context) hook help to use context without a Consumer

export interface IUserDetailContext {
    name: string;
    rollNo: number | null
}

const initialValue = {
    name: '',
    rollNo: null
}

const user = {
    name: 'Anuj',
    rollNo: 7
}

export const userContext = createContext<IUserDetailContext>(initialValue)

export function UseContextHook() {
    const [userDetails, setUserDetails] = useState(user);
    const updateName = (name: string) => {
        setUserDetails({
            ...userDetails,
            name: name
        });
    }
    return (
        <userContext.Provider value={userDetails}>
            <button onClick={() => updateName('Anuj1')}>Update Name</button>
            <DisplayName />
            <DisplayRollNo />
        </userContext.Provider>
    )
}