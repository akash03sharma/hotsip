import React from "react";
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SectionOne() {
return (
<>
<Row className="text-center pt-5 ">
            <Col lg={12} xl={12} xxl={12}  md={12} sm={12} xs={12} className="fst-italic">
               <h2>From Farm to Cup</h2>
               <h6>Wake up and smell the tea & Experience the describes like your ears deserve to </h6>
            </Col>
         </Row>
         <br/><br/>
         <Row className=" text-center ">
            <Col lg={1} xl={1} xxl={1}  md={1} sm={1} xs={1} >
            </Col>
            <Col lg={6} xl={6} xxl={6}  md={6} sm={6} xs={6} >
               <Image src="/image/gb.jpg" className="img-fluid pl-5 rounded" style={{height:"100%"}}/>
            </Col>
            <Col lg={4} xl={4} xxl={4}  md={4} sm={4} xs={4}>
            <Image src="/image/sa.jpg" className="img-fluid rounded" style={{height:"300px"}}/><br/><br/>
            <Image src="/image/aa.jpg" className="img-fluid rounded" style={{height:"300px"}}/>
               
            </Col>
            <Col lg={1} xl={1} xxl={1}  md={1} sm={1} xs={1}>
            </Col>
         </Row>
         <br/><br/><br/>
         <Row className=" text-center">
         <Col lg={1}>
         </Col>
         <Col lg={6}  xl={6} xxl={6}  md={12} sm={12} xs={12}>
         <Col lg={12}>
            <Card>
                <CardHeader>Our Shop</CardHeader>
                <CardBody>Welcome to the heart of our tea collection, where every sip tells a story. Our carefully curated selection of teas is more than just a drink; it's a journey to tranquility, wellness, and flavor. From handpicked leaves sourced from the finest gardens to blends crafted for every mood and moment, we bring you the essence of tea in its purest form. Whether you're seeking a soothing cup to start your day or a bold brew to inspire your evenings, our shop is here to make every tea moment truly special. Discover your perfect cup today!</CardBody>
                <Card className="btn btn-primary">Know More</Card>
            </Card>
                  
               </Col>
               <br/><br/>
               <Col lg={12}>
               <Card>
                <CardHeader>About Us</CardHeader>
                <CardBody>At Hot Sip, we are passionate tea enthusiasts dedicated to bringing you the finest blends and freshest flavors from around the world. We believe tea is more than just a beverage—it's a source of comfort, connection, and wellness. Our mission is to provide the best quality teas, crafted with care and sourced ethically, to make every sip a memorable experience. Whether you're a seasoned tea lover or exploring tea for the first time, we are here to guide you on your journey, one cup at a time.</CardBody>
                <Card className="btn btn-primary">Know More</Card>
            </Card>
                
                  </Col>
                  </Col>
                  <Col lg={4} xl={4} xxl={4}  md={12} sm={12} xs={12}>
                  <Card className=" bg-success text-white">
                <CardHeader>Product Review</CardHeader>
                <CardBody>"Absolutely refreshing! Best tea I've had in years. The flavor is rich and comforting, perfect for any time of the day. I love how it’s the perfect balance of bold and smooth. The aroma alone is enough to make me feel at ease. Highly recommend it to all tea lovers who appreciate quality and taste!" ~ Sarah</CardBody>
                <CardBody>"A perfect blend of flavors. I can't get enough of it! The aroma is so inviting, and each sip is pure bliss. It’s a delightful experience every time. This is not just tea, it’s a moment of tranquility in a cup. It’s now my go-to drink, and I can't imagine starting my day without it. Truly my new favorite!" ~ John</CardBody>
                <CardBody>"I absolutely loved this tea! The aroma is captivating, and the taste is so smooth and refreshing. It’s clear that the ingredients are of the highest quality, and every cup feels like a moment of pure relaxation. Whether hot or iced, this tea has become my go-to for a perfect tea break!" ~ Adhn</CardBody>
                <Card className="btn btn-primary">Know More</Card>
                </Card>
               </Col>
               <Col lg={1}>
               </Col>
         </Row><br/><br/>
</>
);
}
export default SectionOne;