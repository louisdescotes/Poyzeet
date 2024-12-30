import { useControls } from "leva";

const useLevaControls = () => {
  const controls = useControls("Model Position", {
    positionX: { value: 0, min: -150, max: 150, step: 0.1 },
    positionY: { value: 0, min: -150, max: 150, step: 0.1 },
    positionZ: { value: 0, min: -150, max: 150, step: 0.1 },
    intensity: { value: 1, min: 0, max: 20, step: 0.1 },
  });

  return controls;
};

export default useLevaControls;