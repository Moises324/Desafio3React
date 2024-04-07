import Table from "react-bootstrap/Table";
const Listado = ({ Colaboradores }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {Colabores.map((Colaboradores) => (
          <tr key={Colaboradores.id}>
            <td>{Colaboradores.nombre}</td>
            <td>{Colaboradores.correo}</td>
            <td>{Colaboradores.edad}</td>
            <td>{Colaboradores.cargo}</td>
            <td>{Colaboradores.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default Listado;
