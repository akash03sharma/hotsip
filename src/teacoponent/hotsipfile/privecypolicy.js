import React from "react";
import './Policy.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Privacy() {
return (
    <><br/><br/>
< Row >
            <Col lg={12}>
                <h2>Privacy Policy for Hot Sip Tea</h2><br/>
                <h6>At Hot Sip Tea, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, mobile application, or use our services. By using our services, you agree to the practices described in this Privacy Policy.</h6><br/>
                <p>At Hot Sip Tea, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information, including personal details like name, email, and shipping address for order processing; payment data handled securely through third-party gateways; and non-personal data such as cookies and device information for improving user experience. We use your information to deliver products, support customers, and enhance our services while ensuring data security and respecting your rights, including access, correction, or deletion of your data. We do not sell your information and only share it with trusted partners or to comply with legal obligations. </p>
             </Col>    
  
</Row><br/><br/><br/>
</>
);
}
export default Privacy;