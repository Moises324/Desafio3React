import React from 'react';

const Listado = ({ data, setData, dataFilter, setDataFilter }) => {
  
  const deleteColaborador = (id) => {
    const filterData = (arr) => arr.filter(colaborador => colaborador.id !== id);
    
    setData(filterData(data));
    setDataFilter(filterData(dataFilter));
  };

  return (
    <div className="table-responsive col-12 col-lg-8 mb-2">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {dataFilter.map(({ id, nombre, correo, edad, cargo, telefono }) => (
            <tr key={id}>
              <td>{nombre}</td>
              <td>{correo}</td>
              <td>{edad}</td>
              <td>{cargo}</td>
              <td>{telefono}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteColaborador(id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;