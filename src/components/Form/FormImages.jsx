import React, { useState, useEffect } from "react";
import { FormBar, FormCheck, FormInputs } from "..";
import '../../styles/FormImages.sass'

const FormImages = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [formValues, setFormValues] = useState({
    bar: 0,
    check: [],
  });
  const [formInfo, setFormInfo] = useState({ social: "", web: "" });

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
      const newSelectedImages = selectedImages.filter(
        (image) => image !== index
      );
      setSelectedImages(newSelectedImages);
    }
  };

  const handleBarSubmit = (value) => {
    setFormValues({ ...formValues, bar: value });
  };

  const handleCheckSubmit = (value) => {
    setFormValues({ ...formValues, check: value });
  };

  const handleInputsSubmit = (value) => {
    setFormInfo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedImageNames = images
      .filter((image, index) => selectedImages.includes(index))
      .map((image) => image.name);
    const formData = {
      selectedImages: selectedImageNames,
      barValue: formValues.bar,
      checkboxes: formValues.check,
      inputs: formInfo,
    };
    console.log(JSON.stringify(formData));
  };

  const messages = {
    0: <FormBar onSubmit={handleBarSubmit} />,
    1: <FormCheck onSubmit={handleCheckSubmit} />,
    2: <FormInputs onSubmit={handleInputsSubmit} />
  };

  const images = [
    { url: require('../../assets/Icons/Services/Icono_DigitalMarketing.png'), name: 'Marketing Digital' },
    { url: require('../../assets/Icons/Services/Icono_DisenoWeb.png'), name: 'Diseño Web' },
    { url: require('../../assets/Icons/Services/Icono_CommunityMan.png'), name: 'Community Management' },
    { url: require('../../assets/Icons/Services/Icono_DisenoGrafico.png'), name: 'Diseño Gráfico' },
    { url: require('../../assets/Icons/Services/Icono_EmailMark.png'), name: 'Email Marketing' }
  ];

  return (
    <div className="form-images-container">
    <h2 className="form-title">¿En qué servicio estas interesado?</h2>
    <form onSubmit={handleSubmit}>
      <div className='form-list'>
      {images.map((image, index) => (
        <div className={`form-images ${selectedImages.includes(index) ? "selected-image" : ""}`} key={index} onClick={() => handleImageClick(index)}>
          <img src={image.url} alt={image.name} style={{ height: '42px' }} className={selectedImages.includes(index) ? "selected" : ""} />
          <h2>{image.name}</h2>
        </div>
      ))}
      </div>
      {selectedImages.length > 0 && selectedImages.map((imageIndex) => (
        <div key={imageIndex}>
          {messages[imageIndex]}
        </div>
      ))}
    </form>
    </div>
  );
}

export default FormImages;
