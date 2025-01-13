import React from "react";
import Navbarr from "./teacoponent/hotsipfile/header";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footerr from "./teacoponent/hotsipfile/footer";
import SectionTwo from "./teacoponent/hotsipfile/sectiontwo";
import SectionOne from "./teacoponent/hotsipfile/sectionone";
import Blogss from "./teacoponent/hotsipfile/blogs";
import Faqq from "./teacoponent/hotsipfile/faq";
import Contact from "./teacoponent/hotsipfile/contactus";
import Privacy from "./teacoponent/hotsipfile/privecypolicy";
import Refund from "./teacoponent/hotsipfile/refundpolicy";
import Shipping from "./teacoponent/hotsipfile/shipingpolicy";
import Terms from "./teacoponent/hotsipfile/termofservices";
import About from "./teacoponent/hotsipfile/aboutus";
import Login from "./teacoponent/hotsipfile/login";
import Resetpassward from "./teacoponent/hotsipfile/resetpassward";
import Createaccount from "./teacoponent/hotsipfile/accountcreate";
import Home from "./teacoponent/hotsipfile/home";
import Address from "./teacoponent/hotsipfile/address";
import Payment from "./teacoponent/hotsipfile/Pyment";
import AddCard from "./teacoponent/hotsipfile/Addcard";
import AddCard2 from "./teacoponent/hotsipfile/Addcard2";
import AddCard3 from "./teacoponent/hotsipfile/Addcard3";
import Headercard from "./teacoponent/hotsipfile/headerCard";
function App() {
  return (
    <>
    <Router style={{ width: "100%", overflowX: "hidden" }}>
      
     
      
     
      <Navbarr />  

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/mainhome" element={<Home/>}/>
         <Route path="/login" element={<Login />} />
         <Route path="/headercard" element={<Headercard/>} />
         <Route path="/forget" element={<Resetpassward />} />
        <Route path="/account" element={<Createaccount />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/blogs" element={<Blogss />} />
        <Route path="/faq" element={<Faqq />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/addCard" element={ <AddCard/>} />
        <Route path="/addCard2" element={<AddCard2/>} />
        <Route path="/addCard3" element={ <AddCard3/>} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footerr /> 
    </Router>
    </>

  );
}

export default App;

