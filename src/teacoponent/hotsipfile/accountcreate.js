import React,{useState} from "react";
import './Login.css';
import { Navbar, Nav, Container, Col,Row, Card, CardBody, CardImg,Image, CardHeader, Form,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Createaccount() {
const [data,setData] = useState({
First_Name:"",
Last_Name:"",
Email:"",
password:""
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
'Content-Type' : 'application json'
},
body: JSON.stringify({
First_Name:data.First_Name,
Last_Name:data.Last_Name,
Email:data.Email,
password:data.password
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
   <h2>Create account</h2>
   <br/>
   <Form className="search-bar">
      <Form.Group>
         <Form.Control  type="text" name=" First_Name" onChange={handleInputChange} placeholder="First Name" required/>
      </Form.Group>
      <br/>
      <Form.Group>
         <Form.Control  type="text" name="Last_Name" onChange={handleInputChange} placeholder="Last Name" required/>
      </Form.Group>
      <br/>
      <Form.Group>
         <Form.Control  type="Emaill" name="Email" onChange={handleInputChange} placeholder="Email" required/>
      </Form.Group>
      <br/>
      <Form.Group>
         <Form.Control  type="password" name="password" onChange={handleInputChange} placeholder="password" required/>
      </Form.Group>
      <br/>
      <Button onClick={Onclicked} className="btn btn-primary ">Create</Button><br/>
   </Form>
</div>
</Col>    
</Row><br/><br/><br/>
</>
);
}
export default Createaccount;