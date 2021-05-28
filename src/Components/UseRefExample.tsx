import { useRef, useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

// useRef hook

// - Return a mutable ref object.
// - Holding a value in the .current property and  persist for the full lifetime of the component.
// - It helps to access the DOM node by ref.
// - If you would like to persist value and not rerender on value change then use useRef otherwise useState hook

export function UseRefExample() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);
    // useEffect(() => {
    //     previousCount.current = count;
    // }, [count]);
    const onSubmit = () => {
        if (nameInputRef.current) {
            nameInputRef.current.focus();
            console.log('nameInputRef', nameInputRef, nameInputRef.current.value)
        }
    }
    return (
        <div>
            Count value with useState: {count} <br />
            Previous count value with useRef: {previousCount} <br />
            <button onClick={() => setCount(count + 1)}>Increment count</button> <br />
            <input ref={nameInputRef} name="nameInput" value="Anuj" />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}