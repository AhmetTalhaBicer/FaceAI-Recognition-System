// FacemeshDetector.jsx
import { drawMesh } from "../utils/draw";
import * as facemesh from "@tensorflow-models/facemesh";
import Detector from "./Detector";
import propTypes from "prop-types";

const FacemeshDetector = ({ isEnabled }) => {
  const modelLoader = async () => facemesh.load();
  const draw = (face, ctx) => drawMesh(face, ctx);

  return (
    <Detector isEnabled={isEnabled} modelLoader={modelLoader} draw={draw} />
  );
};

FacemeshDetector.propTypes = {
  isEnabled: propTypes.bool.isRequired,
};

export default FacemeshDetector;
