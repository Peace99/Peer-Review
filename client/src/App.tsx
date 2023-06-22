import { useState } from "react";
import "./App.css";
import { Router } from "./router/Router";

function App() {
  const [count, setCount] = useState(0);
  return <>
<nav className="nav">REVISAR</nav>
  <Router />;
  </>
}

export default App;
