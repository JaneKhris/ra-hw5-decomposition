import "./App.css";
import Upside from "./components/Upside";
import Main from "./components/Main";
import Downside from "./components/Downside";

function App() {
  return (
    <div className="app">
      <Upside/>
      <Main/>
      <Downside/>
    </div>
  );
}

export default App;
