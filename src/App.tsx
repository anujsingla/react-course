import React from "react";
import "./App.css";
import {
  // LifecycleMethod,
  LifecycleMethodWithFunction,
} from "./Components/LifecycleMethod";
// import { ToggleButton } from "./Components/ToggleButton";
// import { UserForm } from "./Components/UserForm";
// import { Welcome } from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome name="Anuj" />
        <Welcome name="Name 1" />
        <ToggleButton />
        <UserForm /> */}
        {/* <LifecycleMethod initialValue={0} /> */}
        <br />
        <div>Life cycle with Function component</div>
        <LifecycleMethodWithFunction initialValue={0} />
      </header>
    </div>
  );
}

export default App;
