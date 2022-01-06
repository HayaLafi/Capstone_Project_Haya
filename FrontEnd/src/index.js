
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';

import Homepage from "./router/Homepage"; 

import Employee from "./router/employee";
import Employees from "./router/employees";

 import Holidays from "./router/Holidays";
 import Holiday from "./router/Holiday";

 import Permissions from "./router/permissions"
 import Permission from './router/permission';

 import Service from './router/service';
 import Services from './router/services';

 import File from './router/file';
 import Files from './router/files';
  import Login from './router/Login';
import "./index.css";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {" "}
      {/* <Route path="" element={<App />}>
      </Route> */}
      <Route path="/" element={<App />}>
        <Route path="/employee" element={<Employee />}>
         </Route>
         <Route path="/employees" element={<Employees />}>
         </Route>

         <Route path="/login" element={<Login />}>
         </Route>
           <Route path="/" element={<App />}> 
         <Route path="/homepage" element={<homepage />}> 
         </Route>
         </Route>  


        <Route path="Holidays" element={<Holidays />}/>
          {/* <Route path=":id" element={<Holiday />} />
        </Route> */}

        <Route path="/permissions" element={<Permissions />}/>
          {/* <Route path=":id" element={<Permission />} />
          </Route> */}

          <Route path="/files" element={<Files />}/>
          {/* <Route path=":id" element={<File />} />
          </Route> */}

          <Route path="/services" element={<Services />}/>
 {/* <Route path=":id" element={<Service />} /> 
     
 </Route> */}
 </Route> 
  </Routes>
</BrowserRouter>,
document.getElementById("root")
 );
