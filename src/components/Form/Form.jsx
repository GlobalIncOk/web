import '../../styles/Form.sass'
import React, { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import emailjs from '@emailjs/browser'
import FormImages from './FormImages'

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

function Form() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    data.nombre = data.nombre.trim() + ' ' + data.apellido.trim()
    data.pais = selectedCountry.label
    data.empresa = data.empresa
    data.imagenes = []
    if (selectedImage1) data.imagenes.push('Marketing Digital')
    if (selectedImage2) data.imagenes.push('Diseño Web')
    if (selectedImage3) data.imagenes.push('Community Management')
    if (selectedImage4) data.imagenes.push('Diseño Gráfico')
    if (selectedImage5) data.imagenes.push('Email Marketing')
    console.log(data)

    const serviceID = 'service_nx84y5p'
    const templateID = 'template_szphrkt'
    const publicKey = '2na7nu4KCNkVkXE0T'

    const templateParams = {
      from_name: data.nombre,
      from_email: data.correoElectronico,
      from_phone: data.telefono,
      from_country: selectedCountry.label,
      from_company: data.empresa,
      from_images: data.imagenes.join(', '),
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Email sending failed:', error);
    })
  }

  return (
    <>
      <FormImages />
      {/* <form className="formulario" onSubmit={handleSubmit(onSubmit)}>

      <label>Nombre:</label>
      <input {...register('nombre', { required: true })} placeholder="Value" />

      <label>Apellido:</label>
      <input {...register('apellido', { required: true })} placeholder="Value" />

      <label>Correo electrónico:</label>
      <input {...register('correoElectronico', { required: true })} placeholder="Value" />

      <label>Teléfono:</label>
      <input {...register('telefono', { required: true })} placeholder="Value" />

      <label>Empresa:</label>
      <input {...register('empresa', { required: true })} placeholder="Value" />

      <label>País:</label>
      <CountrySelector setSelectedCountry={setSelectedCountry} />

      {errors.nombre && <span>Este campo es requerido</span>}
      {errors.apellido && <span>Este campo es requerido</span>}
      {errors.correoElectronico && <span>Este campo es requerido</span>}
      {errors.telefono && <span>Este campo es requerido</span>}
      {errors.empresa && <span>Este campo es requerido</span>}
      {selectedCountry === null && <span>Este campo es requerido</span>}

      <input type="submit" value="Enviar" />
    </form> */}
    </>
  );
}

export default Form
