// Detector.jsx
import { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import propTypes from "prop-types";
import { dtConfig, config } from "../config/config";
import "@tensorflow/tfjs";

const Detector = ({ isEnabled, modelLoader, draw }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const runDetector = async () => {
      const detector = await modelLoader(dtConfig);
      const detect = async (net) => {
        if (webcamRef.current && webcamRef.current.video.readyState === 4) {
          const video = webcamRef.current.video;
          const canvas = canvasRef.current;
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const face = await net.estimateFaces(video);
          console.log(face);
          const ctx = canvas.getContext("2d");
          requestAnimationFrame(() => draw(face, ctx));
        }
        // Call detect recursively
        detect(detector);
      };

      // Initial call to start detection
      detect(detector);
    };

    if (isEnabled) {
      setTimeout(() => runDetector(), 500);
    }
  }, [isEnabled, modelLoader, draw]);

  return (
    <>
      {isEnabled && (
        <>
          <Webcam ref={webcamRef} videoConstraints={config} />
          <canvas ref={canvasRef} />
        </>
      )}
    </>
  );
};

Detector.propTypes = {
  isEnabled: propTypes.bool.isRequired,
  modelLoader: propTypes.func.isRequired,
  draw: propTypes.func.isRequired,
};

export default Detector;
