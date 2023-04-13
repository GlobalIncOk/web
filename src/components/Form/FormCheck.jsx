import React, { useState, useEffect } from 'react';

const CheckboxGroup = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [checkboxInfo, setCheckboxInfo] = useState(null);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      const updatedCheckboxes = selectedCheckboxes.filter((checkbox) => checkbox !== checkboxValue);
      setSelectedCheckboxes(updatedCheckboxes);
    }
  };

  useEffect(() => {
    setCheckboxInfo(selectedCheckboxes);
    console.log('Checkboxes seleccionados:', selectedCheckboxes);
  }, [selectedCheckboxes]);

  return (
    <div className='form-check-container'>
      <p className='form-label'>¿Qué web necesitas?</p>
      <div>
        <label>
          <input
            type="checkbox"
            name="Institucional"
            value="Institucional"
            checked={selectedCheckboxes.includes('Institucional')}
            onChange={handleCheckboxChange}
          />
          Institucional
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="E-commerce"
            value="E-commerce"
            checked={selectedCheckboxes.includes('E-commerce')}
            onChange={handleCheckboxChange}
          />
          E-commerce
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Landing Page"
            value="Landing Page"
            checked={selectedCheckboxes.includes('Landing Page')}
            onChange={handleCheckboxChange}
          />
          Landing Page
        </label>
      </div>
    </div>
  );
};

export default CheckboxGroup;
