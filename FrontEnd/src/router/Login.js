import React,{useState,useContext} from 'react'
import { Route, Redirect } from 'react-router'
// import { Form, Button } from 'react-bootstrap'

import axios from "axios"
// import './styleForm.css'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   /*  const authContext = useContext(AuthContext) */
    function login(e) {
        let employee = {
            email: email,
            password: password,
            
          
        }
        e.preventDefault();
        console.log({ email, password });
        //Send Api request to validate data and get token
        console.log({ email, password });
        //Send Api request to validate data and get token
        axios({
            method: "get",
            url: 'api/employee/login',
            params: { email: email , password: password}
        }).then((response)=> {alert(response.data)
           
        });
        
    }
    return (
        <div>
            <div class="pen-title">
                <h1>تسجيل دخول الموظفين</h1>
            </div>
            <div class="container">
                <div class="card"></div>
                <div class="card">
                    <h1 class="title">تسجيل</h1>
                    <form>
                        <div class="input-container">
                            <label for="#{label}">ايميل: </label>
                            <input type="email" id="#{label}" required="required" onChange={ e=>setEmail(e.target.value)}/>
                            
                            <div class="bar"></div>
                        </div>
                        <div class="input-container">
                            <label for="#{label}">كلمة السر:</label>
                            <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>
                            
                            <div class="bar"></div>
                        </div>
                        <div class="button-container">
                            <button onClick={login}><span>تسجيل</span></button>
                        </div>
                        <div class="footer"><a href="#">نسيت كلمة المرور?</a></div>
                    </form>
                </div>
              
            </div>
        
        </div>
    )
}