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
      <h1>  ادارة شؤون الموظفين  </h1>
      
       
       
    <Link to="/homepage">الصفحة الرئيسية  </Link>  |{"    "}
    <Link to="/login">تسجيل دخول  </Link>  |{"    "}
        <Link to="/Employee">الموظفين  </Link>  |{"      "}
        <Link to="/Holidays">الاجازات</Link>  |{"    "}
        <Link to="/files">      نموذج الاجازات    </Link> |{"    "}
        <Link to="/permissions">الاستئذانات </Link> |{"    "}
        <Link to="/services">خدمات الموظفين  </Link>  |{"    "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App
