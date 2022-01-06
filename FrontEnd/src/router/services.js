import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Services() {
  const[id ,setId]= useState("")
  const[type ,settype]= useState("")
  const[description ,setdescription]= useState("")
  
  const [employees, setEmployees] = useState("")
  const [employee, setEmployee] = useState("")

  const [complains, setComplains] = useState("")
  let newComplain = {
          id:id ,
          type :type ,
          description :description,
          employee : employee,
  }
  function handleid(event){
    setId((event.target.value));
  }

  function handletype(event){
    settype((event.target.value));
}

function handledescription(event){
  setdescription((event.target.value));
}

function handleSelect(event){
  let obj = JSON.parse(event.target.value); 
  setEmployee(obj) 
  console.log(employee)
}

function handleAddComplain(event){
  event.preventDefault();
  axios({
    method:'post',
    url:'api/complain/add',
    data:newComplain
  });
  }
  function deleteComplain(event , id) {
    event.preventDefault();
  
    axios.delete(`/api/complain/delete/${id}`)
  }  

useEffect(()=>{
  axios.get("api/complain")
   .then(response=>{
     console.log(response.data)
     setComplains(response.data)
  })
  return()=>{}
 },[])


useEffect(() => {
  axios.get("api/employee")
      .then(response => {
          console.log(response.data)
          setEmployees(Array.from(response.data))
      })
  return () => { }
}, [])
    return (
      <div>
      <h1>شكاوى الموظفين</h1>

      <br></br>
      <label > رقم الشكوى  </label>
        <dr />
        <input
        type="text"
        placeholder="Id"
        name="Id"
        onChange= {handleid}         />
        <br></br>
        <br></br>
        <label >    نوع الشكوى  </label> 
        <dr /> 
        <select  onChange={handletype}>
                        <option value="">الرجاء تحديد خيار</option>
                        <option value="شكوى">شكوى </option>
                        <option value=" إقتراح ">  إقتراح </option>
                        
                        <option value="أخرى">أخرى</option>
                    </select>
                    <br></br>
        <br></br>

<label >وصف الشكوى </label>
<dr />

<br></br>
<br></br>
<textarea placeholder="description " onChange={handledescription} >
</textarea>
<br></br>
<br></br>
<label > حدد الموظف</label>
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
<button onClick={handleAddComplain} > Submit </button> 

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<hr></hr>

<h1>      قائمة  شكاوى            </h1>
<table style={{border:"1px  solid black"}}>
<tr>
  <td  style={{border:"1px  solid black"}} >أسم الموظف </td>
  <td  style={{border:"1px  solid black"}} >نوع الشكوى </td>
  <td  style={{border:"1px  solid black"}} >وصف الشكوى </td>

  <td  style={{border:"1px  solid black"}} >  حذف الشكوى </td>
</tr>
{complains.length ? complains.map((complain, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( 
                          
                            <tr>
                            <td  style={{border:"1px  solid black"}} >{complain.employee.name} </td>
                            <td  style={{border:"1px  solid black"}} >{complain.type}</td>
                            <td  style={{border:"1px  solid black"}} >{complain.description}</td>
                            
                            <td  style={{border:"1px  solid black"}} >   <button onClick={(event) => deleteComplain(event,complain.id)}>Delete</button></td>
                          </tr>
                          
                          ) 
                       }): <h4>null</h4>}

</table>


      </div>

    );
  }