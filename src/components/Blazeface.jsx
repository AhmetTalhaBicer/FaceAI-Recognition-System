// BlazefaceDetector.jsx
import { drawBlaze } from "../utils/draw";
import * as blazeface from "@tensorflow-models/blazeface";
import Detector from "./Detector";
import propTypes from "prop-types";

const BlazefaceDetector = ({ isEnabled }) => {
  const modelLoader = async () => blazeface.load();
  const draw = (face, ctx) => drawBlaze(face, ctx);

  return (
    <Detector isEnabled={isEnabled} modelLoader={modelLoader} draw={draw} />
  );
};

BlazefaceDetector.propTypes = {
  isEnabled: propTypes.bool.isRequired,
};

export default BlazefaceDetector;
