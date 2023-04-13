import React, { useState } from 'react';

const CheckboxGroup = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      const updatedCheckboxes = selectedCheckboxes.filter((checkbox) => checkbox !== checkboxValue);
      setSelectedCheckboxes(updatedCheckboxes);
    }
  };

  // This function will be called whenever selectedCheckboxes is updated
  // and will log the current state of selectedCheckboxes to the console
  React.useEffect(() => {
    console.log('Checkboxes seleccionados:', selectedCheckboxes);
  }, [selectedCheckboxes]);

  return (
    <div>
      <h2>Qué web necesitas?</h2>
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
