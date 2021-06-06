import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { IActionType, initialIUserState, IUserState, userStateReducer } from "../reducer/UserDetailsReducer";

interface IProps {
    children: ReactNode;
}

interface IUserContext {
    userInfo: IUserState;
    dispatch: Dispatch<IActionType>
};

export const initialUserContext: IUserContext = { userInfo: { user: [] }, dispatch: () => null };

export const UserContext = createContext(initialUserContext);

export const useUserContext = (): IUserContext => useContext(UserContext);

export function UserContextProvider(props: IProps) {
    const [userInfo, dispatch] = useReducer(userStateReducer, initialIUserState);

    return (
        <UserContext.Provider value={{ userInfo, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )

}