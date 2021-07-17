export interface IApiObject<T> {
    data: T;
    isFetching: boolean;
    isUpdating: boolean;
    isError: boolean;
    errorMessage: string;
    error: Error;
}
