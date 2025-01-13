import React,{useState} from "react";
import './Login.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader, Form,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./login";

function Resetpassward() {
     const [data,setData] = useState({
            email:"",
        })
    
        function handleInputChange(e){
            const {name,value} = e.target ;
            setData({
                ...data,
                [name]: value
              });
        }
    
        function Onclicked(){
            const response = fetch("",{
                method:'POST',
                headers:{
                    'Content-Type' : 'application json'
                },
                body: JSON.stringify({
                    email : data.email,
                   
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
< Row className="text-center" >
            <Col lg={12} className=" d-flex justify-content-center align-items-center">
            
                <div className="borderclass">
                <h2>Reset your password</h2>
                <h6>We will send you an email to reset your password</h6><br/>
                <Form className="search-bar">
                    <Form.Group>
                                   <Form.Control  type="Emaill" name="email" onChange={handleInputChange}  placeholder="Email" required/>
                   </Form.Group><br/>
                  
                   <Button onClick={Onclicked} className="btn btn-primary ">Submit</Button><br/>
                   <Link to={"/login"}>Cancel</Link>

                  </Form>

            </div>
            </Col>    
  
</Row><br/><br/><br/>
{/* <Routes>
      <Route path="#" component={""} />
   
   </Routes> */}
   
</>


);
}
export default Resetpassward;