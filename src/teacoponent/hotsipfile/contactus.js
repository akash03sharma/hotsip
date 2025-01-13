import React, { useState } from "react";
import './Vlogs.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader, Form,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
    const [data,showdata] = useState({
        name : "",
        email : "",
        quesries : ""
    })

    function handleInputChange(e){
        const {name,value} = e.target;
        showdata({
            ...data,
            [name]: value
        })
    };

    function Onclicked(e){
        e.preventDefault();
        const response = fetch("https://dummyjson.com/user/login",{
            method : 'POST',
            headers : {
               'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                name : data.name,
                email : data.email,
                quesries : data.quesries,

            })
        })
        .then(response => {
            if (response.ok) {
                alert("Email submitted successfully!");
            } else {
                alert("Please try again.");
            }
        })
        console.log(response)

    }
return (
    <><br/><br/>
< Row className="text-center">

        <Col className="d-flex justify-content-center align-items-center">

            <div className="borderclass">

            <h2>Contact Us</h2>
            <p>We’re here to assist you! Whether you have inquiries about our products, need help with an order, or anything else, our team at Blissful Aftertaste is ready to support you. Just fill out the form below, and we’ll respond promptly to ensure you have the best experience possible.</p><br/>
            <Form className="search-bar">
                <Form.Group>
                            <Form.Control  type="text" name = "name" value={data.name} onChange={handleInputChange} placeholder="Name" required/>
               </Form.Group><br/>

               <Form.Group>
                            <Form.Control  type="text" name = "email" value={data.email}  onChange={handleInputChange} placeholder="Emaill" required/>
               </Form.Group><br/>

               <Form.Group>
                            <Form.Control  type="textarea" name = "quesries" value={data.quesries}  onChange={handleInputChange}  placeholder="Any Queries" required/>
               </Form.Group><br/>

            
               <Button onClick={Onclicked} className="btn btn-primary ">Submit</Button>

              </Form>
        </div>
 
    </Col>    
</Row><br/><br/><br/>
</>


);
}
export default Contact;