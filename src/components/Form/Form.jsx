import React, { useState, useMemo, useEffect } from 'react';
import countryList from 'react-select-country-list'
import Select from 'react-select'
import emailjs from '@emailjs/browser'

const images = [
  { url: require('../../assets/Icons/Services/Icono_DigitalMarketing.png'), name: 'Marketing Digital' },
  { url: require('../../assets/Icons/Services/Icono_DisenoWeb.png'), name: 'Diseño Web' },
  { url: require('../../assets/Icons/Services/Icono_CommunityMan.png'), name: 'Community Management' },
  { url: require('../../assets/Icons/Services/Icono_DisenoGrafico.png'), name: 'Diseño Gráfico' },
  { url: require('../../assets/Icons/Services/Icono_EmailMark.png'), name: 'Email Marketing' }
];

function CountrySelector({ setSelectedCountry }) {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
    setSelectedCountry(value)
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      placeholder="Value"
    />
  )
}

const Form = () => {
  const [selectedImageIndexes, setSelectedImageIndexes] = useState([]);
  const [social, setSocial] = useState('');
  const [web, setWeb] = useState('');
  const [fill, setFill] = useState(0);
  const [formInfo, setFormInfo] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    console.log("Nombre:", name);
    console.log("Apellido:", lastName);
    console.log("Correo Electrónico:", email);
    console.log("Teléfono:", phone);
    console.log("Empresa:", company);
    console.log("País:", selectedCountry);
  }, [name, lastName, email, phone, company, selectedCountry]);

  const handleImageClick = (index) => {
    const selectedIndex = selectedImageIndexes.indexOf(index);
    let newSelectedImageIndexes = [];

    if (selectedIndex === -1) {
      newSelectedImageIndexes = [...selectedImageIndexes, index];
    } else {
      newSelectedImageIndexes = [
        ...selectedImageIndexes.slice(0, selectedIndex),
        ...selectedImageIndexes.slice(selectedIndex + 1)
      ];
    }

    setSelectedImageIndexes(newSelectedImageIndexes);
  };

  useEffect(() => {
    const selectedImages = selectedImageIndexes.map((index) => images[index].name);
    console.log("Selected Images:", selectedImages);
  }, [selectedImageIndexes, images]);

  const handleFillChange = (e) => {
    setFill(e.target.value);
  };

  useEffect(() => {
    setFill(fill);
    console.log('Budget value',fill);
  }, [fill]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'social') {
      setSocial(value);
    } else if (name === 'web') {
      setWeb(value);
    }
  };

  useEffect(() => {
    const newFormInfo = { social, web };
    setFormInfo(newFormInfo);
    console.log('Inputs info', newFormInfo); // log the newFormInfo variable
  }, [social, web]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, name]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== name));
    }
  };

  useEffect(() => {
    console.log('Selected checkboxes:', selectedCheckboxes);
  }, [selectedCheckboxes]);

  return (
    <>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.name}
            style={{ border: selectedImageIndexes.includes(index) ? '2px solid blue' : 'none' }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <form>
        <label htmlFor="name">Nombre*</label>
        <input type="text" id="name" name="name" placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)} required />

        <label htmlFor="lastName">Apellido*</label>
        <input type="text" id="lastName" name="lastName" placeholder="Apellido" value={lastName} onChange={(event) => setLastName(event.target.value)} required />

        <label htmlFor="email">Correo Electrónico*</label>
        <input type="email" id="email" name="email" placeholder="Correo Electrónico" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label htmlFor="phone">Teléfono*</label>
        <input type="tel" id="phone" name="phone" placeholder="Teléfono" value={phone} onChange={(event) => setPhone(event.target.value)} required />

        <label htmlFor="company">Empresa*</label>
        <input type="text" id="company" name="company" placeholder="Empresa" value={company} onChange={(event) => setCompany(event.target.value)} required />

        <label htmlFor="country">País*</label>
        <CountrySelector setSelectedCountry={setSelectedCountry} id="country" name="country" placeholder="País" required />

        {selectedImageIndexes.includes(0) && (
          <div className="bar-container">
            <p className="form-label">Presupuesto:</p>
            <input
              type="range"
              min="0"
              max="6000"
              value={fill}
              onChange={handleFillChange}
              className="bar"
            />
            <span>{`u$d ${fill}`}</span>
          </div>
        )}

        {selectedImageIndexes.includes(1) && (
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
        )}
        {selectedImageIndexes.includes(2) && (
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
        )}

        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default Form
