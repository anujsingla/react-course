import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { AComponent } from "./Components/AComponent";
import { UseContextProvider } from "./Components/UseContextReducer";
// import { UseContextHook } from "./Components/UseContextHook";
// import { UseReducerHook } from "./Components/UseReducerHook";
import { UserContextProvider } from "./context/UserContextProvider";
// import { CustomHooks } from "./Components/CustomHooks";
// import { UseRefExample } from "./Components/UseRefExample";
// import { ConditionalRender } from "./Components/ConditionalRender";
// import { MultipleItems } from "./Components/MultipleItems";
// import {
//   // LifecycleMethod,
//   LifecycleMethodWithFunction,
// } from "./Components/LifecycleMethod";
// import { ToggleButton } from "./Components/ToggleButton";
// import { UserForm } from "./Components/UserForm";
// import { Welcome } from "./Components/Welcome";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <AComponent />
          <UserContextProvider>
            {/* <Welcome name="Anuj" />
        <Welcome name="Name 1" />
        <ToggleButton />
        <UserForm /> */}
            {/* <LifecycleMethod initialValue={0} /> */}
            {/* <br />
          <div>Life cycle with Function component</div>
          <LifecycleMethodWithFunction initialValue={0} /> */}
            {/* <ConditionalRender /> */}
            {/* <MultipleItems /> */}
            {/* <CustomHooks /> */}
            {/* <UseRefExample /> */}
            {/* <UseContextHook /> */}
            {/* <UseReducerHook /> */}
            <UseContextProvider />
          </UserContextProvider>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
