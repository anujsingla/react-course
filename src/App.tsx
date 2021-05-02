import React from "react";
import "./App.css";
import { ToggleButton } from "./Components/ToggleButton";
import { UserForm } from "./Components/UserForm";
import { Welcome } from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Anuj" />
        <Welcome name="Name 1" />
        <ToggleButton />
        <UserForm />
      </header>
    </div>
  );
}

export default App;
