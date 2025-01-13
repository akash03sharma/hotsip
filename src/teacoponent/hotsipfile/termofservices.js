import React from "react";
import './Policy.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Terms() {
return (
    <><br/><br/>
< Row >
            <Col lg={12}>
            <h2>Terms of Service</h2><br/>
              <h6>Welcome to Sip Tea! By accessing or using our website and services, you agree to comply with these Terms of Service. All purchases made through Sip Tea are subject to our refund and shipping policies. Products and pricing are subject to change without notice, and we reserve the right to modify or discontinue services at any time. You are responsible for providing accurate information during checkout and maintaining the confidentiality of your account details. Unauthorized use of our website, including reselling or redistributing products, is prohibited. Sip Tea is not liable for delays or losses caused by circumstances beyond our control, such as shipping carrier delays. By using our services, you acknowledge that all content on our website, including text, images, and trademarks, is the property of Sip Tea and may not be reproduced without our written consent. If you have questions or concerns, please contact us at [support@siptea.com]. Thank you for choosing Sip Tea!</h6>
               
          </Col>    
  
</Row><br/><br/><br/>
</>
);
}
export default Terms;