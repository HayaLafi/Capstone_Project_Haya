import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
  const [myEmployee, setMyEmployee] = useState({id:"",name:"",email:"" , mobile:"",password:""})
  const [myBank, setMyBank] = useState({location:"", bankIDId:""})

 useEffect(()=>{
   axios.get("/api/employee")
    .then(response=>{
      console.log(response.data)
      setMyEmployee(response.data[0])
   })
   return()=>{}
 },[])
 
function handleClick(){
  axios({
    method:'post',
    url:'api/employee/add',
    data:{
      "id": 11,
      "name": "hayaklj",
      "email": "hajkhya1995",
      "mobile": 988567657,
      "password": "39899"
    }
  });
}

function handle1(){
axios({
  method: 'delete',
  url: "/api/employee/delete/11"
})}






  return (
    <div>
            <br></br>
      <br></br>
      <h2>my employee details are:  {JSON.stringify(myEmployee)}</h2>
      <button onClick={handleClick}>Post</button>
      <button onClick={handle1}>delete</button>
     ccd

      <br/>
     

    </div>
  )
}
