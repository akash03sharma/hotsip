import React from "react";
import { Navbar, Nav, Container, Col,Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./login"

function Navbarr() {

   // function Reloadpre(){
   //    window.open("https://www.google.com/", "_blank");
   // }
return (
   <>
   <Navbar className="text-white bg-dark">
      <Container fluid>
         <Row className="text-center pt-3 w-100">
            <Col lg={1} xl={1} xxl={1} md={2} sm={12} xs={12}  className="fs-1 ">
            <Link to="/mainhome">
            <i className="fas fa-bars menu-icon text-white" style={{fontSize: "25px"}}></i></Link>
            </Col>
            <Col lg={1} xl={1} xxl={1}  md={2} sm={12} xs={12} className="fs-1">
            <Link to="https://www.google.com/">
            <i className="fas fa-search text-white" style={{fontSize: "25px"}}></i></Link>
            </Col>
            <Col lg={8} xl={8} xxl={8}  md={4} sm={12} xs={12} >
            <h1> Hot Sip</h1>
            <h6>~  The SoulFul Tea  ~</h6>
            </Col>
            <Col lg={1} xl={1} xxl={1} md={2} sm={12} xs={12} className="fs-1">
            <Link to="/login" >
            <i className="fas fa-user-circle text-white" style={{fontSize: "25px"}}></i></Link>
            </Col>
            <Col lg={1} xl={1} xxl={1} md={2} sm={12} xs={12} className="fs-1">
            <Link to="/headercard">
            <i className="fas fa-credit-card text-white" style={{fontSize: "25px"}}></i></Link>
            </Col>
         </Row>
      </Container>
   </Navbar>
   
</>
);
}
export default Navbarr;