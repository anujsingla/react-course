
interface IProps {
    error?: Error;
    resetErrorBoundary?: () => void;
};

export function ErrorBoundaryFallbackComponent(props: IProps) {
    return (
        <div>
            <p>Something went wrong:</p>
            <pre>{props.error?.message}</pre>
            <button onClick={props.resetErrorBoundary}>Try Again</button>
        </div>
    )
}