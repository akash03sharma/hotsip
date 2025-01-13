import React, { useState } from "react";
import { Navbar, Nav, Container, Col,Row,Footer,Form, Button  } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from "./aboutus";
import Blogss from "./blogs";
import Faqq from "./faq";
import Contact from "./contactus";
import Privacy from "./privecypolicy";
import Refund from "./refundpolicy";
import Shipping from "./shipingpolicy";
import Terms from "./termofservices";


function Footerr() {

   const [data, setData] = useState({
      email: "",
      questions: ""
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value
      });
    };
  
   //  function Reloadpre(){
   //    window.open("   ", "_blank");
   // }

   function onClickd(e){
      e.preventDefault();
      const responce = fetch("https://dummyjson.com/user/login",{
         method : 'POST',
         headers: {
            'Content-Type': 'application/json',  // Corrected header
          },
         body:JSON.stringify({
            email : data.email,
            questions : data.questions
         })

      })
      .then(response => {
         if (response.ok) {
             alert("Email submitted successfully!");
         } else {
             alert("Please try again.");
         }
     })
      console.log(responce)
   }
return (
<>
   <footer  className="bg-dark text-white" style={{}} >
      <Container fluid>
         <br/>
         <Row className="text-center text-white">
            <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12}  className="pt-4">
            <h1>Hot Sip</h1>
            <h6>~ The SoulFul Tea ~</h6>
            </Col>
            <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12} className="pt-4 text-white">
            <h3>Quick links</h3>
            <br/>
            <Link to="/aboutus" className="text-white"><h6>About Us</h6></Link>
            <Link to="/blogs" className="text-white"> <h6>Blogs</h6></Link>
            <Link to="/faq" className="text-white"> <h6>FAQs</h6></Link>
            <Link to="/contactus" className="text-white"> <h6>Contact Us</h6></Link>
            </Col>
            <Col lg={4} xl={4} xxl={4}  md={4} sm={12} xs={12} className="pt-4 text-white">
            <h3>Our Policy</h3>
            <br/>
            <Link to="/privacy" className="text-white"><h6>Privacy Policy</h6></Link>
            <Link to="/refund" className="text-white"> <h6>Refund Policy</h6></Link>
            <Link to="/shipping" className="text-white"> <h6>Shipping Policy</h6></Link>
            <Link to="/terms" className="text-white"> <h6>Terms of Service</h6></Link>
            </Col>
         </Row>
         <br/><br/><br/>
         <Row className="text-center ">
         <Col lg={2}>
         </Col>
            <Col lg={3}>
            <h2> Ask Your Queries...  </h2>
            <Form  className="search-bar">
            <Form.Group>
               <Form.Control  type="email" name="email" onChange={handleInputChange} value={data.email} placeholder="Email" required/>
            </Form.Group><br/>
            <Form.Group>
            <Form.Control  type="text" name="questions" onChange={handleInputChange} value={data.questions} placeholder="Ask Your Questions" required/>
            </Form.Group>
               <Button type="submit" onClick={onClickd} className="btn btn-primary mt-2 w-100">Submit</Button>

            </Form >
            </Col>
            <Col lg={3}>
            </Col>
            <Col lg={4}>
                <Row>
                 <Col lg={12}>
                 <Link to="https://www.facebook.com" className="text-white pr-3 "><i className="fab fa-facebook-square "></i></Link>
                 <Link to="https://www.twitter.com" className="text-white pr-3"> <i className="fab fa-twitter-square  "></i></Link>
                 <Link to="https://www.instagram.com" className="text-white pr-3 "> <i className="fab fa-instagram "></i></Link>
                 <Link to="https://www.linkedin.com/" className="text-white"> <i className="fab fa-linkedin"></i></Link>

               </Col>
            </Row>
            </Col>
         </Row>
         <hr/>
         <Row className="text-center ">
            <div className="col-lg-12">
               <h6>2024 Hot Sip Tea. All rights reserved.</h6>
            </div>
         </Row>
      </Container>
   </footer>
        <Routes>
                                {/* <Route path="/aboutus" element={<About/>} 
                                   <Route path="/blogs" element={<Blogss/>} 
                                  <Route path="/faq" element={<Faqq/>}
                                  <Route path="/contactus" element={<Contact/>} 
                       
                                  <Route path="/privacy" element={<Privacy/>} 
                                  <Route path="/refund" element={<Refund/>} />
                                 <Route path="/shipping" element={<Shipping/>} 
                                 <Route path="/terms" element={<Terms/>}  */}
      </Routes> 
</>
);
}
export default Footerr;
