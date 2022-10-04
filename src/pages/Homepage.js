import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../components//Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap";

function Homepage(){
    return(
        <div>
            <Navbar />
            <div className="container">
            <Container>
                <Row>
                < Col> Aplikasi Pendaftaran magang 
                 </Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>

            </div>
        </div>
    )
}
 export default Homepage;
