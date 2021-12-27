import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css"
//import { getPatients } from "./data";
function App() {
  // let [User, setUser] = useState(false);
  // let employee = getEmployees();
  // let NewArray = [];
  //   localStorage.setItem("MyNewArray", JSON.stringify(NewArray))
  // localStorage.setItem("MyEmployee", JSON.stringify(employee))
  // console.log(JSON.parse(localStorage.getItem("Myemployee")))


  return (
    <div>
      <h1 id="HeaderName"> </h1>
      <nav id="navPage">
      {/* <Link to="/homepage">Homepage </Link> */} |{"    "}
        <Link to="/Employee">Employee </Link>  |{"      "}
        <Link to="/Holidays">Holiday</Link>  |{"    "}
        <Link to="/permissions">permission </Link> |{"    "}
        <Link to="/services">service </Link>  |{"    "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App
