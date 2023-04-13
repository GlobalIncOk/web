import React, { useState, useEffect } from 'react';
import '../../styles/FormBar.sass'

const FormBar = () => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    setFill(fill);
    console.log('Budget value',fill);
  }, [fill]);

  const handleFillChange = (event) => {
    const newFill = event.target.value;
    setFill(newFill);
  };

  return (
    <div className='bar-container'>
      <h2>Presupuesto</h2>
      <input type="range" min="0" max="6000" value={fill} onChange={handleFillChange} className='bar' />
      <span>{`u$d ${fill}`}</span>
    </div>
  );
};

export default FormBar;
