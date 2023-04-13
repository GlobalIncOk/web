import React, { useState, useEffect } from "react";
import { FormBar, FormCheck, FormInputs } from "..";

const FormImages = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [formValues, setFormValues] = useState({
    bar: 0,
    check: [],
    inputs: { social: '', web: '' }
  });

  useEffect(() => {
    // Log selected images in real-time
    const selectedImageNames = images
      .filter((image, index) => selectedImages.includes(index))
      .map((image) => image.name);
    console.log("Imágenes seleccionadas:", selectedImageNames);
  }, [selectedImages]);

  const handleImageClick = (index) => {
    const imageIndex = selectedImages.indexOf(index);
    if (imageIndex === -1) {
      // Agregar imagen seleccionada
      setSelectedImages([...selectedImages, index]);
    } else {
      // Eliminar imagen seleccionada
      const newSelectedImages = selectedImages.filter((image) => image !== index);
      setSelectedImages(newSelectedImages);
    }
  }

  const handleBarSubmit = (value) => {
    setFormValues({...formValues, bar: value});
  }

  const handleCheckSubmit = (value) => {
    setFormValues({...formValues, check: value});
  }

  const handleInputsSubmit = (value) => {
    setFormValues({...formValues, inputs: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedImageNames = images
      .filter((image, index) => selectedImages.includes(index))
      .map((image) => image.name);
    const formData = {
      selectedImages: selectedImageNames,
      barValue: formValues.bar,
      checkboxes: formValues.check,
      inputs: formValues.inputs
    }
    console.log(JSON.stringify(formData));
  };

  const messages = {
    0: <FormBar onSubmit={handleBarSubmit} />,
    1: <FormCheck onSubmit={handleCheckSubmit} />,
    2: <FormInputs onSubmit={handleInputsSubmit} />
  };

  const images = [
    { url: require('../../assets/Icons/Services/Icono_DigitalMarketing.png'), name: 'Imagen 1' },
    { url: require('../../assets/Icons/Services/Icono_DisenoWeb.png'), name: 'Imagen 2' },
    { url: require('../../assets/Icons/Services/Icono_CommunityMan.png'), name: 'Imagen 3' },
    { url: require('../../assets/Icons/Services/Icono_DisenoGrafico.png'), name: 'Imagen 4' },
    { url: require('../../assets/Icons/Services/Icono_EmailMark.png'), name: 'Imagen 5' }
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.name}
            onClick={() => handleImageClick(index)}
            style={{
              border: selectedImages.includes(index) ? '2px solid blue' : 'none'
            }}
          />
        ))}
      </div>
      {selectedImages.length > 0 && selectedImages.map((imageIndex) => (
        <div key={imageIndex}>
          {messages[imageIndex]}
        </div>
      ))}
    </form>
  );
}

export default FormImages;
