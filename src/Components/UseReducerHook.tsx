import { useReducer } from "react";

// useReducer Hook

// - Same hook like useState to manage state
// - Helps to manage complex state logic in application.
// - It accepts a reducer function as its first parameter and the initial state as the second.
// - Return current state and dispatch method to update the state like Redux.
// - useContext + useReducer -> can be good alternative to Redux
// - useReducer(reducer, initialState)

// Redux:

// Store ->  an immutable object that holds the applications state data
// Reducer ->  a function that returns some state data, triggered by an action type.
// Action -> an object that tells the reducer how to change the state.

// useState vs useReducer

// useState -> for simple state (primitive values)
// useReducer -> for complex state (form states, objects, nested array)

interface IState {
    count: number;
}

const initialValue: IState = { count: 0 };

function reducer(state: IState, action: any) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            return { count: state.count }
    }
}

export function UseReducerHook() {
    const [countState, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            Count: {countState.count} <br />
            <button onClick={() => dispatch({ type: 'increment' })}>Increment Count</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement Count</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>
        </div>
    )
}