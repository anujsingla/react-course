import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiObject } from '../models/apiUtils';
import { addNewUserDetails, getApiObject, getUserList, updateUserDetails } from '../utils/apiUtils';
import { IStateReduced } from './store';
import { map } from 'lodash';

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
            dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)));
        }
    };

export const updateUser =
    (userDetails: IUser) =>
    async (dispatch: Dispatch<any>, getState: () => IStateReduced): Promise<void> => {
        try {
            const existingData = getState()?.users?.users?.data;
            dispatch(setUserList(getApiObject([], false, true)));
            const userResponse = await updateUserDetails(userDetails);
            const newSelection = map(existingData, (e) => {
                if (e.id === userDetails.id) {
                    return userResponse.data;
                } else {
                    return e;
                }
            });
            dispatch(setUserList(getApiObject(newSelection)));
        } catch (error) {
            dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)));
        }
    };

export const addNewUser =
    (userDetails: IUser) =>
    async (dispatch: Dispatch<any>, getState: () => IStateReduced): Promise<void> => {
        try {
            const existingData = getState()?.users?.users?.data;
            dispatch(setUserList(getApiObject([], false, true)));
            const userResponse = await addNewUserDetails(userDetails);
            const newSelection = [...existingData, userResponse.data];
            dispatch(setUserList(getApiObject(newSelection)));
        } catch (error) {
            dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)));
        }
    };
export default usersReducer.reducer;
