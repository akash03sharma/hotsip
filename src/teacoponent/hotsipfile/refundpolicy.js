import React from "react";
import './Policy.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Refund() {
return (
    <><br/><br/>
< Row >
            <Col lg={12}>
               <h2>Refund Policy for Sip Tea</h2><br/>
               <h6>At Sip Tea, we prioritize customer satisfaction and strive to provide the highest quality tea and service. If you're not completely satisfied with your purchase, we're here to help.</h6><br/>
               <p>At Sip Tea, customer satisfaction is our top priority. We offer refunds for damaged or defective products, incorrect orders, or quality concerns reported within 7 days of delivery. Refund requests must include your order number, a description of the issue, and supporting evidence, such as photos, sent to [support@siptea.com]. Opened tea packages, orders made after the 7-day window, or items purchased during sales are not eligible for refunds unless damaged or defective. Approved refunds will be processed within 7 business days and issued to the original payment method. Exchanges are also available for eligible cases. If you have any questions, feel free to contact our support team for assistance. We’re here to ensure your tea experience is exceptional!</p>.
        </Col>    

</Row><br/><br/><br/>
</>
);
}
export default Refund;