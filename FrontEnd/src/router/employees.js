import React, { Component } from "react";
import axios from "axios"
export default class MyTry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeList: [],
        };
    }
    componentDidMount() {
        axios.get("api/employee").then(response => {
            const employeList = response.data
            this.setState({ employeList });
        });
    } 
    deleteUseGarden(id) {
       // console.log("Delete after Entering")
        axios.delete(`api/employee/delete/${id}`)
            .then(response => {
                const employeList = this.state.employeList.filter(item => item.id !== id);
                this.setState({ employeList })
            })
    }
render() {
    return (
        <div >
            <div >
               <p></p>
                    {this.state.employeList.map((item => (
                        <tr key={item.id}>
                       <div >
                        <div ></div>
                         <div >
                           <div >
                      {/* <img height="200" width="200" src={item.treetype.image} /> */}
                         </div>
                        </div>
                      <div >
                      </div>
                        <div>
                        <p>Id :{item.id} </p>
                        <p> Name : {item.name}</p>
                        <p>email :{item.email} </p>
                        <p> mobile : {item.name}</p>
                        <p> password : {item.password}</p>
                        
                    
                        </div>
                       <div >
</div>
</div>
                 <td><button   onClick={(e) => this.deleteUseGarden(item.id, e)}>delete</button></td>
                        </tr>
                    )))
                    }
        </div>
        </div>
  )
}
}