import React from "react";
import './Vlogs.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
function About() {
return (
<><br/><br/>
< Row className="d-flex justify-content-center align-items-center" >
<Col lg={1} xxl={1} xl={1}>
</Col>
<Col lg={4} xxl={4} xl={4} >
<Image src="Image/ccoffe.jpg" style={{width: "100%"}}/><br/>
</Col>
<Col lg={6} xxl={6} xl={6} sm={12} md={12}>
<h4>Welcome to Hot Sip, where tea isn’t just a beverage—it’s a lifestyle! We are dedicated to bringing you the finest tea experience by offering a curated collection of premium blends that cater to every taste, occasion, and mood. At Hot Sip, we take pride in sourcing high-quality, sustainable ingredients from the best tea gardens around the world. Each blend is crafted to deliver the perfect balance of flavor, aroma, and health benefits, ensuring that every cup is as special as the moments you savor.</h4>
</Col>
<Col lg={1} xxl={1} xl={1}>
</Col>
</Row><br/>
<Row>
   <Col lg={1} >
   </Col>
   <Col lg={10} sm={12} md={12} className="borderclassss bg-secondary p-4">
   <h2>Our Mission</h2>
   <h3>Our mission is to provide tea lovers with the highest quality, ethically sourced blends that deliver exceptional taste, health benefits, and moments of connection. We are committed to promoting sustainability, crafting innovative tea experiences, and making every sip a celebration of wellness and tradition.</h3>
   </Col>
   <Col lg={1} >
   </Col>
</Row>
<br/><br/>
<Row>
   <Col lg={1} >
   </Col>
   <Col lg={10 } sm={12} md={12} className="borderclassss bg-secondary p-4">
   <h2>Our Vission </h2>
   <h3>Our vision is to become a global leader in the tea industry, fostering a community that values sustainability, cultural appreciation, and mindfulness. We aspire to create a future where Hot Sip represents not just premium tea, but a lifestyle of warmth, wellness, and positive impact on the planet and society.</h3>
   </Col>
   <Col lg={1}>
   </Col>
</Row>
<br/><br/>
</>
);
}
export default About;