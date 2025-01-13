import React, { useState } from "react";
import './Login.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader, Form,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Resetpassward from "./resetpassward";
import Createaccount from "./accountcreate";

function Login() {
    const [data,setData] = useState({
        email:"",
        passward:"",
    })

    function handleInputChange(e){
        const {name,value} = e.target ;
        setData({
            ...data,
            [name]: value
          });
    }

    function Onclicked(e){
        e.preventDefault();
        const response = fetch("",{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email : data.email,
                passward : data.passward,
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
< Row className="text-center " >
            <Col lg={12} className=" d-flex justify-content-center align-items-center">
            
                <div className="borderclass">
                <h2>Login</h2><br/>
                <Form className="search-bar">
                    <Form.Group>
                                   <Form.Control  type="email" name="email" onChange={handleInputChange}  placeholder="Email" required/>
                   </Form.Group><br/>
                   <Form.Group>
                                   <Form.Control  type="password" name="passward"  onChange={handleInputChange}  placeholder="password" required/>
                   </Form.Group><br/>
                   <Link to={"/forget"}>Forgot your password?</Link><br/><br/>
                   <Button onClick={Onclicked} className="btn btn-primary ">Sign in</Button><br/>
                   <Link to={"/account"}>Create account</Link>

                  </Form>

            </div>
            </Col>    
  
</Row><br/><br/><br/><br/>
{/* <Routes> <Route path="/login" element={<Login />} /></Routes> */}

{/* <Routes>
      <Route path="#" component={""} />
      <Route path="#" component={""} />
      
   </Routes> */}
   
</>
);
}
export default Login;