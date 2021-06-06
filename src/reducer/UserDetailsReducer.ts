import axios from 'axios';

export interface IUserDetails {
    email: string;
    id: number;
    first_name: string;
    last_name: string;
}

export interface IUserState {
    user: IUserDetails[];
    isUserLogin?: boolean;
}

export enum UserStateReducerConstant {
    userDetails = 'userDetails',
    userLogin = 'userLogin',
}

export interface IAction<T, P> {
    type: T;
    payload?: Partial<P>;
}

export type IActionType = IAction<UserStateReducerConstant, IUserState>;

export type IUserStateReducerDispatchType = (value: IActionType) => void;

export const initialIUserState: IUserState = {
    user: [],
    isUserLogin: false,
};

export const userStateReducer = (state: IUserState, action: IActionType) => {
    switch (action.type) {
        case UserStateReducerConstant.userDetails: {
            return { ...state, user: action?.payload?.user || [] };
        }
        case UserStateReducerConstant.userLogin: {
            return { ...state, isUserLogin: action?.payload?.isUserLogin };
        }
        default: {
            return state;
        }
    }
};

const fetchUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return axios.get(`https://reqres.in/api/users`).then((res) => res?.data?.data ?? []);
};

export const fetchUserDetails = async (dispatch: IUserStateReducerDispatchType) => {
    const userDe = await fetchUsers();

    dispatch({ type: UserStateReducerConstant.userDetails, payload: { user: userDe } });
};

export const updateUserLogin = (dispatch: IUserStateReducerDispatchType, isUserLogin: boolean) => {
    dispatch({ type: UserStateReducerConstant.userLogin, payload: { isUserLogin: isUserLogin } });
};
