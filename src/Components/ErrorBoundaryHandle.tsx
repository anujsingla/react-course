// Error Boundaries

// - In the past, javascript errors inside react components was not handled and it breaks
//   the UI, React did not provide a way to handle these errors.

// - React 16 introduces a new concept of an “error boundary”.
// - It catch javascript errors anywhere in their child components tree, log those errors
//   display a fallback UI.

// - Error boundaries do not catch errors for:

// - Event handlers (learn more)
// - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// - Server side rendering
// - Errors thrown in the error boundary itself (rather than its children)

import { useState } from "react";
import { Button } from "react-bootstrap";
import { UserComponent } from "./UserComponent";

export function ErrorBoundaryHandle() {
    const [isUserComponent, setIsUserComponent] = useState(false);

    return (
        <div>
            {isUserComponent ? <UserComponent /> : null}
            <Button onClick={() => setIsUserComponent(true)}>User Component</Button>
        </div>
    )
}