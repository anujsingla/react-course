import axios from 'axios';
import { IApiObject } from '../models/apiUtils';

export function getApiObject<T>(
    data: T = undefined,
    isFetching = false,
    isError = false,
    errorMessage = '',
    error: Error = null,
): IApiObject<T> {
    return { data, isFetching, isError, errorMessage, error };
}

export async function getUserList() {
    const userResponse = await axios.get('https://reqres.in/api/users');
    // throw new Error('error in fetching');
    return userResponse;
}
