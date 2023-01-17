import React from "react";
import '../templates/symptom.css'
import CarouselSymptom from "../moleculas/CarouselSymptom";
import { Container } from "react-bootstrap";

function Symptom() {
  return (
    <>
    <Container fluid className="symptom-cont padding-v100 ">
      <Container fluid>
        <div className="row justify-content-center">
          <h5 className="symptom">Symptom</h5>
          <h2 className="basic-symptom">Basic Symptom Against Corona virus</h2>
        </div>
        <div className="row">
          <CarouselSymptom />
        </div>

      </Container>
    </Container>
      
    
    </>
  );
}

export default Symptom;