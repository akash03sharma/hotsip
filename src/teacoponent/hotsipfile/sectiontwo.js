import React from "react";
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
function SectionTwo() {
return (
<>
<Container fluid>
    <Row>
     
        <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12} className="pl-5">
        <Card  style={{width:"400 px"}}>
           <Card.Img variant="top" src="/image/blog4.jpg" />
                  
                  <CardBody>
                     <h4 className="card-title">Hot Sip Tea - 10 Sip</h4>
                     <h6><span className="old-price">Rs 5000.00</span> <span className="new-price">Rs 2500.00</span></h6>
                     <br/>
                     <Link to="/addCard" className="btn btn-primary"> Add to cart</Link>
                  </CardBody>
               </Card>
            </Col>
            <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12}>
            <Card  style={{width:"400 px"}}>
                <CardImg variant="top" src="/image/blog2.jpg"/>
                  <CardBody>
                     <h4 class="card-title">Hot Sip Green Tea - 5 Sip</h4>
                     <h6><span class="old-price">Rs 2500.00</span> <span class="new-price">Rs 500.00</span></h6>
                     <br/>
                     <Link to="/addCard2" className="btn btn-primary"> Add to cart</Link>
                     </CardBody>
                  </Card>
               </Col>
               <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12}>
               <Card  style={{width:"400 px"}}>
                <CardImg variant="top" src="/image/ccoffe.jpg"/>
                  <CardBody>
                     <h4 class="card-title">Hot Sip Coffee - 7 Sip</h4>
                     <h6><span class="old-price">Rs 3000.00</span> <span class="new-price">Rs 700.00</span></h6>
                     <br/>
                     <Link to="/addCard3" className="btn btn-primary"> Add to cart</Link>
                     </CardBody>
                     </Card>
                     </Col>
     
         </Row>
         </Container>
         <br/><br/>
         <Row>
         <Image src="/image/nimd.jpg" style={{ width: "100%", height: "auto" }} />
         </Row>
   {/* <Routes>
      <Route path="#" component={""} />
   </Routes> */}
</>
);
}
export default SectionTwo;