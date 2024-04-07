import React from 'react';

const Buscador = ({ data, dataFilter }) => {
  const inputHandler = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();

    const resultado = data.filter(({ nombre, correo, edad, cargo, telefono }) =>
      nombre.toLowerCase().includes(buscarPalabra) ||
      correo.toLowerCase().includes(buscarPalabra) ||
      edad.toString().includes(buscarPalabra) ||
      cargo.toLowerCase().includes(buscarPalabra) ||
      telefono.includes(buscarPalabra)
    );

    dataFilter(resultado);
  };

  return (
    <div className="buscador col-12 col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        className="form-control mb-3"
        onChange={inputHandler}
      />
    </div>
  );
};

export default Buscador;