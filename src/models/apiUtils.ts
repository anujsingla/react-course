export interface IApiObject<T> {
    data: T;
    isFetching: boolean;
    isError: boolean;
    errorMessage: string;
    error: Error;
}
