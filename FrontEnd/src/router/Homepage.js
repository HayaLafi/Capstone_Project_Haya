import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Homepage() {

  
//   return (
//     <div>
     
//      </div>
//  )
// }
// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { Row, Col, Container  } from 'react-bootstrap';
// export default function Homepage() {

  
  return (<>
    <h1>       بيانات الشركة          </h1>
    <br></br>
    <div className="row">
    <div className="col-md-6">
              <table style={{border:"1px  solid black" }}>
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >إسم الشركة  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >شركة هياء للتجارة </td>
              </tr>
              <tr>
                <td  style={{border:"1px  solid black" , width:"600px" , height:"50px"}} >المدير   </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >هياء لافي   الرويلي </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black",  width:"600px" , height:"50px"}} >رقم الهاتف  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >04629748 </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >رقم الجوال  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >05316373747 </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black",width:"600px", height:"50px"}} >رقم الفاكس  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >369369 </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >العنوان </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >  سكاكا الجوف </td>
                
              </tr>

              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >السجل التجاري  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >341204128 </td>
                
              </tr>
              </table>
    </div>     
    <div className="col-md-6">
              {/* <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fbbdde049a0953101504db0%2FGETTY-IMAGES%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D2000%26cropY1%3D116%26cropY2%3D1242" width="500px" height="400px"></img> */}
        </div> 
    </div>
     </>
 )
}
