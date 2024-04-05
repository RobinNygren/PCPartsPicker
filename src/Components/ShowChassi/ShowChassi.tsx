import { useState } from "react";
import { useParts } from "../../PartsContext/PartsContext";
import Button from "../Button/Button";

export const ShowChassi: React.FC = () => {
  const [showChassis, setShowChassis] = useState(false);
  const { state, dispatch } = useParts();

  const handleButtonClick = () => {
    setShowChassis(!showChassis);
  };

  return (
    <>
      <Button
        ButtonTitle="Show Chassis"
        ButtonClick={handleButtonClick}
        styling="button"
      />
      {showChassis && (
        <div>
          {state.chassis.map((chassis) => (
            <div key={chassis.id}>
              <h2>{chassis.brand}</h2>
              <p>{chassis.model}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
