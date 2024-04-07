import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Listado from "./Componentes/listado";
import { BaseColaboradores } from "./assets/BaseColaboradores";
export default function App() {
  const [Colaboradores, setColaboradores] = useState(BaseColaboradores);
  return (
    <div className="mx-4">
      <h1 className="text-start">Lista de Colaboradores</h1>
      <Row>
        <Col sm={4}></Col>
      </Row>
      <Row>
        <Col sm={12} md={9}>
          <Listado Colaboradores={Colaboradores} />
        </Col>
        <Col md={3} className="">
          <h2>Agregar Colaborador</h2>
        </Col>
      </Row>
    </div>
  );
}
