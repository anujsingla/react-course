import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiObject } from '../models/apiUtils';
import { getApiObject, getUserList } from '../utils/apiUtils';

export interface IUser {
    first_name: string;
    id: string;
    last_name: string;
    email: string;
    avatar: string;
}

export interface IUserListState {
    users: IApiObject<IUser[]>;
}

export const defaultState: IUserListState = {
    users: getApiObject([]),
};

export const usersReducer = createSlice({
    name: 'userList',
    initialState: defaultState,
    reducers: {
        setUserList: (state, action: PayloadAction<IApiObject<IUser[]>>) => {
            state.users = action.payload;
        },
    },
});

export const { setUserList } = usersReducer.actions;

export const fetchUser =
    () =>
    async (dispatch: Dispatch<any>): Promise<void> => {
        try {
            dispatch(setUserList(getApiObject([], true)));
            const userResponse = await getUserList();
            dispatch(setUserList(getApiObject(userResponse.data.data)));
        } catch (error) {
            dispatch(setUserList(getApiObject([], false, true, error?.message, error)));
        }
    };
export default usersReducer.reducer;
