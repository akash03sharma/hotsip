import React, { useState } from "react";
import './Login.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Address() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  const onClickk = () => {
    if (!formData.name || !formData.address || !formData.city || !formData.state || !formData.contactNumber) {
      alert("Please fill in all required fields.");
    } else {
      navigate("/payment"); 
    }
    
  const responce = fetch("https://dummyjson.com/user/login",{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({
        name : formData.name,
        address:formData.address,
        city:formData.city,
        state:formData.state,
        contactNumber:formData.contactNumber
      }),
  })
  console.log(responce)
  };
  return (
    <>
      <br/><br/>
      <Row className="text-center">
        <Col lg={12} className="d-flex justify-content-center align-items-center">
          <div className="borderclass bg-secondary p-4">
            <h2>Shipping</h2>
            <h5>Please enter your shipping details</h5><br/>
            <Form className="search-bar">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  required
                />
              </Form.Group>
              <br />
              <Button onClick={onClickk} className="btn btn-primary">
                Continue
              </Button>
              <br />
            </Form>
          </div>
        </Col>
      </Row>
      <br/><br/><br/>
    </>
  );
}

export default Address;
