import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { CustomHooks } from "./Components/CustomHooks";
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
          <CustomHooks />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
