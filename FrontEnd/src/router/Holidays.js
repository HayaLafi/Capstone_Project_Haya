import React, { useEffect, useState } from 'react'
import axios from "axios"

import { Outlet} from "react-router-dom";
export default function Holidays() {
  
  const[HolidayId ,setHolidayId]= useState("")
  const[date ,setdate]= useState("")
  const[tittle,settittle]= useState("")
  const[description ,setdescription]= useState("")
  


  const [myHoliday, setMyHoliday] = useState({HolidayId:"",date:"",tittle:"" ,description:""})
  let nuwHoliday = {
      HolidayId:HolidayId ,
    date :date ,
title:tittle,
description :description
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



useEffect(()=>{
 axios.get("api/holiday")
  .then(response=>{
    console.log(response.data)
    setMyHoliday(response.data[0])
 })
 return()=>{}
},[])

function handleClickk(){
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
<label > ID Holiday:  </label>
<dr />
<input
type="text"
placeholder="Id"
name="Id"
onChange= {handelid}         />
<br></br>
<label >    Tittle:  </label>
<dr />
<input
type="text"
          
placeholder="name"
name="name"
onChange= {handeltittle}         />
<br></br>
<label > date :</label>
<dr />
<input
type="text"
placeholder="Date"
name="date"
onChange= {handeldate}         />
<br></br>
<label > Description holiday: </label>
<dr />
<input
type="text"
placeholder="description"
name="Id"
onChange= {handeldescription}         />

<br></br>
<textarea placeholder="description " onChange={handeldescription} >
</textarea>

<br></br>
<button onClick={handleClickk} > Submit </button>




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