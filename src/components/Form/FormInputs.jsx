import React, { useState, useEffect } from "react";

const FormInputs = ({ onSubmit }) => {
  const [social, setSocial] = useState("");
  const [web, setWeb] = useState("");
  const [formInfo, setFormInfo] = useState(null);

  useEffect(() => {
    setFormInfo({ social, web });
  }, [social, web]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "social") {
      setSocial(value);
    } else if (name === "web") {
      setWeb(value);
    }
    onSubmit({ social, web });
  };

  console.log('Inputs info', formInfo); // log the formInfo variable

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
