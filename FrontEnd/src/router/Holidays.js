import React, { useEffect, useState } from 'react'
import axios from "axios"

import { Outlet} from "react-router-dom";
export default function Holidays() {
  
  const[HolidayId ,setHolidayId]= useState("")
  const[date ,setdate]= useState("")
  const[tittle,settittle]= useState("")
  const[description ,setdescription]= useState("")
  const [employees, setEmployees] = useState("")
  const [employee, setEmployee] = useState("")
  const [sel, setSel] = useState("")

  const [myHoliday, setMyHoliday] = useState({HolidayId:"",date:"",tittle:"" ,description:""})
  let nuwHoliday = {
      HolidayId:HolidayId ,
    date :date ,
title:tittle,
description :description,
employee : employee,
  }
  function handelid(event){
    setHolidayId((event.target.value));
  }

  function handeldate(event){
    setdate((event.target.value));
}
function handeltittle(event){
  settittle((event.target.value));
}
function handeldescription(event){
  setdescription((event.target.value));
}

useEffect(() => {
  axios.get("api/employee")
      .then(response => {
          console.log(response.data)
          setEmployees(Array.from(response.data))
      })
  return () => { }
}, [])

useEffect(()=>{
 axios.get("api/holiday")
  .then(response=>{
    console.log(response.data)
    setMyHoliday(response.data[0])
 })
 return()=>{}
},[])

function handleSelect(event){
  let obj = JSON.parse(event.target.value); 
  setEmployee(obj) 
  console.log(employee)
}

function handleClickk(event){
event.preventDefault();
axios({
  method:'post',
  url:'api/holiday/add',
  data:nuwHoliday
});
}

// function handle1(){
// axios({
//   method: 'delete',
//   url: "/api/employee/delete/11"
// })}

return (
<div>
  
<form className='Patient' >
<div class="log">
<hr />
<h1>       الاجازات          </h1>
<br></br>
<label > عدد أيام الاجازة  </label>
<dr />
<input
type="text"
placeholder="Id"
name="Id"
onChange= {handelid}         />
<br></br>
<br></br>
<label >    نوع الاجازة  </label> 
 <dr /> 
<input
type="text"
          
placeholder="name"
name="name"
onChange= {handeltittle}         />
<br></br>
<br></br>
       {/* // <input type="radio" onChange={handleCategory} name="مرضيه" />  مرضيه  <br />
       // <input type="radio" onChange={handleCategory} name="مرضيه" /> وفاه<br />
       // <input type="radio" onChange={handleCategory} name="زواج" /> زواج <br /> */}
       {/* // <input type="radio" onChange={handleCategory} name="سنويه" /> سنويه */}
        


<label > تاريخ بداية الاجازة </label>
<dr />
<input
type="text"
placeholder="Date"
name="date"
onChange= {handeldate}         />

<br></br>
<br></br>
<label > تاريخ نهايتها </label>
<dr />
<input
type="text"
placeholder="Date"
name="date"
onChange= {handeldate}         />
<br></br>
<br></br>

<label > اسباب الاجازة  </label>
<dr />

<br></br>
<br></br>
<textarea placeholder="description " onChange={handeldescription} >
</textarea>
<br></br>
<br></br>

<label > Select Employee:</label>
            <br></br>
           <select  onChange={handleSelect}>
                <option value="">--Please choose an option--</option>
                {employees.length ? employees.map((empl, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( <option value={JSON.stringify(empl)}>{empl.name}</option>) 
                       }): <h4>null</h4>}
                
               
                
            </select>
            <br></br>
<br></br>
<button onClick={handleClickk} > Submit </button> 


{"                                                                                                                                                           "}




</div>
</form>

{/* <h2>my employee details are:  {JSON.stringify(myEmployee)}</h2>
<button onClick={handleClick}>Post</button>
<button onClick={handle1}>delete</button> */}
  

<br/>
</div>
)
  // return (
  //   <div style={{ display: "flex" }}>
  //     <nav
  //       style={{
  //         borderRight: "solid 1px",
  //         padding: "1rem"
  //       }}
  //     >
  //     </nav>
  //     <Outlet />
  //   </div>
  // );
}
