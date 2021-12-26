import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Employee() {

  const[id ,setid]= useState("")
  const[name ,setname]= useState("")
  const[email,setemail]= useState("")
  const[mobile ,setmobile]= useState("")
  const[password ,setpassword]= useState("")


  const [myEmployee, setMyEmployee] = useState({id:"",name:"",email:"" , mobile:"",password:""})

  function handelid(event){
    setid((event.target.value));
  }

  function handelname(event){
    setname((event.target.value));
  }
  function handelemail(event){
    setemail((event.target.value));
  }
  function handelmobile(event){
    setmobile((event.target.value));
  }
  function handelpassword(event){
    setpassword((event.target.value));
  }



  let nuwEmployee = {
    id : id ,
    name :name ,
email:email,
mobile:mobile,
password :password
  }


 useEffect(()=>{
   axios.get("api/employee")
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
    data:nuwEmployee
  });
}

// function handle1(){
// axios({
//   method: 'delete',
//   url: "/api/employee/delete/11"
// })}

  return (
    <div>
        <button onClick={handleClick} >Employee Log in </button>


      <form className='Patient' >
        <div class="log">
          <hr />
          <label > Id Employee :</label>
          <dr />
          <input
            type="text"
            placeholder="Id"
            name="Id"
           onChange= {handelid}         />
           <br></br>
 <label > Name :</label>
          <dr />
          <input
            type="text"

            placeholder="name"
            name="name"
           onChange= {handelname}         />
           <br></br>
 <label > Email :</label>
          <dr />
          <input
            type="text"
            placeholder="Email"
            name="email"
           onChange= {handelemail}         />
           <br></br>
            <label > mobile :</label>
          <dr />
          <input
            type="text"
            placeholder=""
            name="Id"
           onChange= {handelmobile}         />
           <br></br>
            <label > password :</label>
          <dr />
          <input
            type="text"
            placeholder="Id"
            name="password"
           onChange= {handelpassword}         />

<br></br>
<button onClick={handleClick} > Login </button>




</div>



</form>


      {/* <h2>my employee details are:  {JSON.stringify(myEmployee)}</h2>
      <button onClick={handleClick}>Post</button>
      <button onClick={handle1}>delete</button> */}
    

      <br/>
     

    </div>
  )
}
