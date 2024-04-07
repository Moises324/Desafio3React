import React, { useState, useEffect } from 'react';

const Formulario = ({ addAlert, setData, data, setDataFilter, dataFilter }) => {
  const [datosColaborador, setDatosColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleInputChange = (e) => {
    setDatosColaborador(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const validarDatos = () => {
    const { nombre, correo, edad, cargo, telefono } = datosColaborador;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelef = /^[0-9]{9}$/;

    if (!nombre.trim() || !correo || !edad || !cargo.trim() || !telefono) {
      return 'Debes completar todos los campos';
    } else if (!regexEmail.test(correo)) {
      return 'Correo electrónico no válido';
    } else if (!regexTelef.test(telefono)) {
      return 'El teléfono debe tener 9 dígitos';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensajeError = validarDatos();

    if (mensajeError) {
      addAlert({ texto: mensajeError, tipo: 'alert-danger', estado: true });
    } else {
      addAlert({ texto: 'Colaborador Agregado', tipo: 'alert-success', estado: true });

      const newId = data.length ? (parseInt(data[data.length - 1].id) + 1).toString() : '0';
      const nuevoColaborador = { ...datosColaborador, id: newId };

      setData([...data, nuevoColaborador]);
      setDataFilter([...dataFilter, nuevoColaborador]);

      setDatosColaborador({ nombre: '', correo: '', edad: '', cargo: '', telefono: '' });
    }
  };

  useEffect(() => {
    setDatosColaborador({ nombre: '', correo: '', edad: '', cargo: '', telefono: '' });
  }, [data]);

  return (
    <div className="formulario col-12 col-lg-4">
      <h3>Agregar Colaborador</h3>
      <form noValidate onSubmit={handleSubmit}>
        {Object.keys(datosColaborador).map((key) => (
          <div className="mb-3" key={key}>
            <input
              onChange={handleInputChange}
              value={datosColaborador[key]}
              type={key === 'correo' ? 'email' : 'text'}
              className="form-control"
              name={key}
              id={`input${key.charAt(0).toUpperCase() + key.slice(1)}`}
              placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)} del colaborador`}
            />
          </div>
        ))}
        <div className="d-grid mb-3">
          <button type="submit" className="btn">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;