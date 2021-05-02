import React from "react";
import "./App.css";
import { ToggleButton } from "./ToggleButton";
import { UserForm } from "./UserForm";
import { Welcome } from "./Welcome";

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
