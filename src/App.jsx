import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import RoutesSwitch from "./RoutesSwitch";

function App() {
  return (
    <BrowserRouter>
      <>
        <RoutesSwitch />
      </>
    </BrowserRouter>
  );
}

export default App;
