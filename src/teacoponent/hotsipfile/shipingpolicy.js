import React from "react";
import './Policy.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Shipping() {
return (
    <><br/><br/>
< Row >
            <Col lg={12}>
            <h2>Shipping Policy </h2><br/>         
              <p>At Sip Tea, we are committed to delivering your orders quickly and efficiently. Orders are processed within 1-2 business days, and delivery typically takes 3-7 business days depending on your location. We offer free shipping on orders above a specified amount, while a standard shipping fee applies to smaller orders. Once your order is shipped, you will receive a confirmation email with tracking details. Please ensure that the shipping address provided is accurate, as Sip Tea is not responsible for delays or issues caused by incorrect addresses. If you encounter any problems with your shipment, such as delays or damages, please contact us at [support@siptea.com], and we’ll work to resolve the issue promptly. Thank you for choosing Sip Tea, where your satisfaction is our priority!</p>    
          </Col>    

</Row><br/><br/><br/>
</>
);
}
export default Shipping;