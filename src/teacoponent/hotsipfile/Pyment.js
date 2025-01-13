import React from "react";
import './Login.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader, Form,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Payment() {
return (
    <><br/><br/>
< Row className="text-center " >
            <Col lg={12} className=" d-flex justify-content-center align-items-center">
            
                <div className="borderclass bg-light">
                <h2>Payment Mode</h2>
                <h5>Please select your payment mode</h5><br/>
                <Link to="https://paytm.com"  className="btn btn-primary " style={{width: "60%"}}>Paytm</Link><br/><br/>
                <Link to="https://pay.google.com" className="btn btn-primary " style={{width: "60%"}}>Google Pay</Link><br/><br/>
                <Link to="https://www.phonepe.com" className="btn btn-primary " style={{width: "60%"}}>PhonePe</Link><br/><br/>
                <h3>OR</h3>
                <Link to="click" className="btn btn-primary " style={{width: "60%"}}>Cash on delivery</Link><br/><br/><br/>


            </div>
            </Col>    
  
</Row><br/><br/><br/>
</>

);
}
export default Payment;