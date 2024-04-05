import "./App.css";
import { PartsProvider } from "./PartsContext/PartsContext";
import { ShowChassi } from "./Components/ShowChassi/ShowChassi";

function App() {
  return (
    <>
      <PartsProvider>
        <div>
          <h1>PC Komponenter</h1>
          <ShowChassi />
        </div>
      </PartsProvider>
    </>
  );
}

export default App;
