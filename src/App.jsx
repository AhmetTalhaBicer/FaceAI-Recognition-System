// App.jsx
import { useState } from "react";
import FacemeshDetector from "./components/Facemesh";
import BlazefaceDetector from "./components/Blazeface";
import "./App.css";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentModel, setCurrentModel] = useState("facemesh");

  const toggleModel = () => {
    setCurrentModel((prevModel) =>
      prevModel === "facemesh" ? "blazeface" : "facemesh"
    );
  };
  const getNextModelName = () => {
    return currentModel === "facemesh" ? "Blazeface" : "Facemesh";
  };
  return (
    <>
      {currentModel === "facemesh" ? (
        <FacemeshDetector isEnabled={isEnabled} />
      ) : (
        <BlazefaceDetector isEnabled={isEnabled} />
      )}
      <div className="button-group">
        <button onClick={() => setIsEnabled(!isEnabled)}>
          {isEnabled ? "On" : "Off"}
        </button>
        <button onClick={toggleModel}>{`${getNextModelName()}`}</button>
      </div>
    </>
  );
}

export default App;
