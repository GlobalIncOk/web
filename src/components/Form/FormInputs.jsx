import React, { useState } from "react";

const FormInputs = ({ onSubmit }) => {
  const [social, setSocial] = useState("");
  const [web, setWeb] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "social") {
      setSocial(value);
    } else if (name === "web") {
      setWeb(value);
    }
    
    onSubmit({ social, web });
    console.log({ social, web });
  };

  return (
    <form>
      <div>
        <label htmlFor="social">Redes Sociales</label>
        <input
          type="text"
          name="social"
          id="social"
          placeholder="Value"
          value={social}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="web">Web / URL</label>
        <input
          type="text"
          name="web"
          id="web"
          placeholder="Value"
          value={web}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default FormInputs;
