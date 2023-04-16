import React, { useState, useMemo, useEffect } from 'react';
import countryList from 'react-select-country-list'
import Select from 'react-select'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import '../../styles/Form.sass'

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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [consultation, setConsultation] = useState("");
  const [selectedImageIndexes, setSelectedImageIndexes] = useState([]);
  const selectedImages = selectedImageIndexes.map((index) => images[index].name);
  const [fill, setFill] = useState(0);
  const [social, setSocial] = useState('');
  const [web, setWeb] = useState('');
  const [formInfo, setFormInfo] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_lastname: lastName,
      from_email: email,
      from_phone: phone,
      from_company: company,
      from_country: selectedCountry.label,
      from_services: selectedImages,
      from_budget: fill,
      form_socials: social + ' ' + web,
      from_checks: selectedCheckboxes,
      from_consultation: consultation
    };

    const serviceID = 'service_nx84y5p'
    const templateID = 'template_szphrkt'
    const publicKey = '2na7nu4KCNkVkXE0T'

    Swal.fire({
      title: '¿Enviar formulario?',
      text: 'Está a punto de enviar el formulario. ¿Está seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, enviar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(function(response) {
          console.log("Formulario enviado con éxito", response);
        }, function(error) {
          console.log("Error al enviar formulario", error);
        })
          .then(() => {
            Swal.fire('¡Gracias por su contacto!', '', 'success');
            setName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setConsultation('');
            setCompany('');
            setSelectedCountry(null);
            setSelectedImageIndexes([]);
            setFill(0);
            setSocial('');
            setWeb('');
            setSelectedCheckboxes([]);
          })
          .catch((error) => {
            Swal.fire('¡Oops!', `Algo salió mal al enviar el formulario: ${error.message}`, 'error');
          });
      }
    });
  }

  useEffect(() => {
    console.log("Nombre:", name);
    console.log("Apellido:", lastName);
    console.log("Correo Electrónico:", email);
    console.log("Teléfono:", phone);
    console.log("Empresa:", company);
    console.log("País:", selectedCountry);
    console.log("Consultation:", consultation);
    console.log("Selected Images:", selectedImages)
    console.log('Budget value',fill)
    console.log('Inputs info', formInfo)
    console.log('Selected checkboxes:', selectedCheckboxes);
  }, [name, lastName, email, phone, company, consultation, selectedCountry, selectedImages, fill, formInfo, selectedCheckboxes]);

  useEffect(() => {
    const newFormInfo = { social, web };
    setFormInfo(newFormInfo);

  }, [social, web]);

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

  const handleFillChange = (e) => {
    setFill(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'social') {
      setSocial(value);
    } else if (name === 'web') {
      setWeb(value);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, name]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== name));
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h2 className='form-title'>¿En que servicio estás interesado?</h2>
      <div className='form-images-list'>
        {images.map((image, index) => (
          <div key={index} className="form-image-container" style={{ border: selectedImageIndexes.includes(index) ? '2px solid blue' : 'none' }} onClick={() => handleImageClick(index)}>
            <img src={image.url} alt={image.name} className='form-image' />
            <h2 className="form-images-titles">{image.name}</h2>
          </div>
        ))}
      </div>
      <div className='form-inputs-list'>
        <div className='column'>
          <label className='label' htmlFor="name">Nombre</label>
          <input className='input' type="text" id="name" name="name" placeholder="Value" value={name} onChange={(event) => setName(event.target.value)} required />

          <label className='label' htmlFor="lastName">Apellido</label>
          <input className='input' type="text" id="lastName" name="lastName" placeholder="Value" value={lastName} onChange={(event) => setLastName(event.target.value)} required />

          <label className='label' htmlFor="email">Correo Electrónico</label>
          <input className='input' type="email" id="email" name="email" placeholder="Value" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>

        <div className='column'>
          <label className='label' htmlFor="phone">Teléfono</label>
          <input className='input' type="tel" id="phone" name="phone" placeholder="Value" value={phone} onChange={(event) => setPhone(event.target.value)} required />

          <label className='label' htmlFor="company">Empresa</label>
          <input className='input' type="text" id="company" name="company" placeholder="Value" value={company} onChange={(event) => setCompany(event.target.value)} required />

          <label className='label' htmlFor="country">País</label>
          <CountrySelector className='input' setSelectedCountry={setSelectedCountry} id="country" name="country" placeholder="Value" required />
        </div>
        <div className='consulta-container'>
          <label className='label' htmlFor="consultation">Su consulta:</label>
          <textarea className='consulta' type="text" id="consultation" name="consultation" placeholder="Value" value={consultation} onChange={(event) => setConsultation(event.target.value)} required />
        </div>
      </div>

      {selectedImageIndexes.includes(0) && (
        <div className="bar-container">
          <p className="label">Presupuesto:</p>
          <input
            type="range"
            min="0"
            max="6000"
            value={fill}
            onChange={handleFillChange}
            className='input'
          />
          <span>{`u$d ${fill}`}</span>
        </div>
      )}

      {selectedImageIndexes.includes(1) && (
        <form className='form-inputs-list'>
          <div className='column'>
            <label className='label' htmlFor="social"><p className='form-label'>Redes Sociales</p></label>
            <input
              className='input'
              type="text"
              name="social"
              id="social"
              placeholder="Value"
              value={social}
              onChange={handleInputChange}
            />
          </div>
          <div className='column'>
            <label className='label' htmlFor="web"><p className='form-label'>Web / URL</p></label>
            <input
              className='input'
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
        <>
          <p className='form-label'>¿Qué web necesitas?</p>
          <div className='form-check-container'>
            <div>
              <label className='label' >
                <input
                  className='input'
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
              <label className='label' >
                <input
                  className='input'
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
              <label className='label' >
                <input
                  className='input'
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
        </>
      )}

      <button className='button-form' type="submit">Enviar</button>
    </form>
  )
}

export default Form
