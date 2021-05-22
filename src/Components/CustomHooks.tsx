import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLogger } from "../hooks/useLogger";
import { useToggle } from "../hooks/useToggle";

export function CustomHooks() {
  const [state, setState, remove] = useLocalStorage("key2", "value2");
  const [isToggle, setIsToggle] = useToggle(false);

  useDocumentTitle("title by custom hook1");
  useLogger("Custom Hook", "log with custom hook1");

  return (
    <div>
      Local storage value: {state}
      <div>
        <button onClick={() => setState("update value1")}>
          Update storage value
        </button>
      </div>
      <div>
        <button onClick={() => remove()}>Remove local storage value</button>
      </div>
      <div>Toggle hook: {isToggle ? "true" : "false"}</div>
      <div>
        <button onClick={() => setIsToggle()}>Toggle Value</button>
      </div>
    </div>
  );
}
