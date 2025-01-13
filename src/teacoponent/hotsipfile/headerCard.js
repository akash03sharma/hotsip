import React, { useState } from "react";
import './Login.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader, Form,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Headercard() {
   const [count, setCount] = useState(1);

   const increment = () => {
     setCount((prevCount) => prevCount + 1);
   };

   const decrement  = () => {
      setCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
    };

return (
    <><br/><br/>
    

< Row className="text-center " >

   <Col lg={2}>
   </Col>
            <Col lg={3} xl={3} xxl={3}  md={3} sm={12} xs={12} className="pl-5">
                    <Card  style={{width:"400 px"}}>
                       <Card.Img variant="top" src="/image/blog4.jpg" />
                              
                              <CardBody>
                                 <h4 className="card-title">Hot Sip Tea - 10 Sip</h4>
                                 <h6><span className="old-price">Rs 5000.00</span> <span className="new-price">Rs 2500.00</span></h6>
                                 <br/>
                                 <Link to="#" className="btn btn-primary"> More to cart</Link>
                              </CardBody>
                           </Card>
                        </Col>
                        <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12} className="pl-5">
                    <Card  style={{width:"400 px"}}>
                       
                              
                              <CardBody>
                                 <h4 className="card-title">Hot Sip Tea - 10 Sip</h4>
                                 <h6><span className="old-price">Rs 5000.00</span> <span className="new-price">Rs 2500.00</span></h6>
                                 <br/>
                                
                                    <h4 className="text-secondary">Card You Select  : {count} </h4>
                                    <Button onClick={increment} className="bg-dark text-white "><h4>+</h4></Button>
                                    <Button onClick={decrement} className="bg-dark text-white ms-2"><h4>-</h4></Button>
                               
                                 <br/> <br/>
                                 <h5>Price :  {2500 * count}</h5>
                                 <h5>Delivery Charge : Free</h5>
                                 <h5>You Save : {2500 * count}</h5><br/>
                                 <Link to="/address" className="btn btn-primary"> Buy Now</Link>
                              </CardBody>
                           </Card>
                        </Col>
 <Col lg={2}>
   </Col>
  
</Row><br/><br/>

< Row className="text-center " >

   <Col lg={2}>
   </Col>
            <Col lg={3} xl={3} xxl={3}  md={3} sm={12} xs={12} className="pl-5">
                    <Card  style={{width:"400 px"}}>
                      <CardImg variant="top" src="/image/blog2.jpg"/>
                                        <CardBody>
                                           <h4 class="card-title">Hot Sip Green Tea - 5 Sip</h4>
                                           <h6><span class="old-price">Rs 2500.00</span> <span class="new-price">Rs 500.00</span></h6>
                                                <br/>
                                 <Link to="#" className="btn btn-primary"> More to cart</Link>
                              </CardBody>
                           </Card>
                        </Col>
                        <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12} className="pl-5">
                    <Card  style={{width:"400 px"}}>
                       
                              
                              <CardBody>
                                 <h4 className="card-title">Hot Sip Tea - 10 Sip</h4>
                                 <h6><span className="old-price">Rs 2500.00</span> <span className="new-price">Rs 500.00</span></h6>
                                 <br/>
                                
                                    <h4 className="text-secondary">Card You Select  : {count} </h4>
                                    <Button onClick={increment} className="bg-dark text-white "><h4>+</h4></Button>
                                    <Button onClick={decrement} className="bg-dark text-white ms-2"><h4>-</h4></Button>
                               
                                 <br/> <br/>
                                 <h5>Price :  {500 * count}</h5>
                                 <h5>Delivery Charge : Free</h5>
                                 <h5>You Save : {2000 * count}</h5><br/>
                                 <Link to="/address" className="btn btn-primary"> Buy Now</Link>
                              </CardBody>
                           </Card>
                        </Col>
 <Col lg={2}>
   </Col>
  
</Row><br/><br/>

< Row className="text-center " >

   <Col lg={2}>
   </Col>
            <Col lg={3} xl={3} xxl={3}  md={3} sm={12} xs={12} className="pl-5">
                    <Card  style={{width:"400 px"}}>
                       <CardImg variant="top" src="/image/ccoffe.jpg"/>
                                         <CardBody>
                                            <h4 class="card-title">Hot Sip Coffee - 7 Sip</h4>
                                        <h6><span class="old-price">Rs 3000.00</span> <span class="new-price">Rs 700.00</span></h6>
                                                <br/>
                                 <Link to="#" className="btn btn-primary"> More to cart</Link>
                              </CardBody>
                           </Card>
                        </Col>
                        <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12} className="pl-5">
                    <Card  style={{width:"400 px"}}>
                       
                              
                              <CardBody>
                                 <h4 className="card-title">Hot Sip Tea - 10 Sip</h4>
                                 <h6><span className="old-price">Rs 3000.00</span> <span className="new-price">Rs 700.00</span></h6>
                                 <br/>
                                
                                    <h4 className="text-secondary">Card You Select  : {count} </h4>
                                    <Button onClick={increment} className="bg-dark text-white "><h4>+</h4></Button>
                                    <Button onClick={decrement} className="bg-dark text-white ms-2"><h4>-</h4></Button>
                               
                                 <br/> <br/>
                                 <h5>Price :  {700 * count}</h5>
                                 <h5>Delivery Charge : Free</h5>
                                 <h5>You Save : {2300 * count}</h5><br/>
                                 <Link to="/address" className="btn btn-primary"> Buy Now</Link>
                              </CardBody>
                           </Card>
                        </Col>
 <Col lg={2}>
   </Col>
  
</Row><br/><br/><br/>
</>

);
}
export default Headercard;