import axios from 'axios';
import { IApiObject } from '../models/apiUtils';
import { IUser } from '../redux/usersReducer';

export function getApiObject<T>(
    data: T = undefined,
    isFetching = false,
    isUpdating = false,
    isError = false,
    errorMessage = '',
    error: Error = null,
): IApiObject<T> {
    return { data, isFetching, isError, errorMessage, error, isUpdating };
}

export async function getUserList() {
    const userResponse = await axios.get('https://reqres.in/api/users');
    // throw new Error('error in fetching');
    return userResponse;
}

export async function updateUserDetails(user: IUser) {
    const userResponse = await axios.put(`https://reqres.in/api/users/${user.id}`, user);
    return userResponse;
}

export async function addNewUserDetails(user: IUser) {
    const userResponse = await axios.post(`https://reqres.in/api/users`, user);
    return userResponse;
}
