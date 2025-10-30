import { useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, currentVal }) => {
  return (
    <div>
      <div className="radio-buttons">
        {choices && choices.map((choice) => (
          <li key={choice}>
            <input
              id={choice}
              value={choice}
              name={label}
              type="radio"
              onChange={handleChange}
              checked={currentVal == choice}
            />
            {choice}
          </li>
        ))}
      </div>
    </div>
  );
};

export default RecipeChoices;