import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Employee() {

  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [mobile, setmobile] = useState("")
  const [password, setpassword] = useState("")


  const [myEmployee, setMyEmployee] = useState({ id: "", name: "", email: "", mobile: "", password: "" })

  function handelid(event) {
    setid((event.target.value));
  }

  function handelname(event) {
    setname((event.target.value));
  }
  function handelemail(event) {
    setemail((event.target.value));
  }
  function handelmobile(event) {
    setmobile((event.target.value));
  }
  function handelpassword(event) {
    setpassword((event.target.value));
  }



  let nuwEmployee = {
    id: id,
    name: name,
    email: email,
    mobile: mobile,
    password: password
  }


  useEffect(() => {
    axios.get("api/employee")
      .then(response => {
        console.log(response.data)
        setMyEmployee(response.data[0])
      })
     return () => { }
   }, [])

  function handleClick() {
    axios({
      method: 'post',
      url: 'api/employee/add',
      data: nuwEmployee
    });
  }

  //  function handleClick(){
  //  axios({
  //   method: 'delete',
  //    url: "/api/employee/delete/"
  //  })}

  return (
   

<div>
      <form >
        
        <div>
          <hr />
          <h1> : تسجيل الموظفين   </h1>
          <label >  الرقم الوظيفي  </label>
          <dr />
          <input
            type="text"
            placeholder="Id"
            name="Id"
            onChange={handelid} />
          <br></br>
          <br></br>
          <label > اسم الموظف </label>
          <dr />
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handelname} />
          <br></br>
          <br></br>
          <label >   ايميل الموظف </label>
          <dr />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handelemail} />
          <br></br>
          <br></br>
          <label > رقم الموظف</label>
          <dr />
          <input
            type="text"
            placeholder=""
            name="Id"
            onChange={handelmobile} />
          <br></br>
          <br></br>
          <label > كلمة المرور 
 </label> <br></br>
          <dr />
          <input
            type="text"
            placeholder="Id"
            name="password"
            onChange={handelpassword} />

          <br></br>
          <br></br>
          <button onClick={handleClick} > Login </button>
 
        </div>

      </form>
      </div>
  )}

