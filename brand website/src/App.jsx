import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navigation from "./components/navigation";
import Heros from "./components/Heros";

function App() {
  return (
    <div>
      <Navigation />
      <Heros />
    </div>
  );
}

export default App;
