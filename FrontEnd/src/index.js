
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Employee from "./router/employee";

// import Employee from "./router/employee";
// import Hoilday from "./routes/hoilday";
// import Homepage from "./routes/Homepage";
// import pemissionr from "./routes/pemissionr";
// import Service from "./routes/Service";
import "./index.css";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
      <Route path="homepage" element={<homepage />} />
        <Route path="employee" element={<Employee />}/>

          {/* <Route path=":NationalId" element={<Hoilday />} />
        </Route>
        <Route path="registers" element={<Permission />} />
        <Route path="doctors" element={<Service />}>
          <Route path=":NationalId" element={<Doctor />} />
        </Route>
        <Route path="history" element={<Histories />}>
          <Route path=":NationalId" element={<History />} />
        </Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);