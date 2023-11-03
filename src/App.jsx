import { useState } from "react";
import "./App.scss";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Homepage />
      </>
    </BrowserRouter>
  );
}

export default App;
