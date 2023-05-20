import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert2";
import "./Admin.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function UpdateOrganization(){

   const {id} = useParams();

   const [organization, setOrganization] = useState([]);
   const [organization_name, setorganization_name] = useState("");
   const [o_phone_no, seto_phone_no] = useState("");
   const [address, setaddress] = useState("");
   const [donation_type, setdonation_type] = useState("");
   const [d_qty, setd_qty] = useState("");
   const [location, setlocation] = useState("");
  

   function sendOrganizationData(e){
      e.preventDefault();
      alert("Update sucess");
  
      const newOrganization = {
        organization_name,
        o_phone_no,
        address,
        donation_type,
        d_qty,
        location
   }

   axios.put(`http://localhost:8000/api/updateOrgan/${id}`,newOrganization).then(()=>{

    }).catch((err)=>{
      alert(err)
      console.log(err);
    });
    swal.fire({
      title: " Updated Successfully !!.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "";
          });
   

}
   useEffect(() => {
    axios.get(`http://localhost:8000/api/AddOrgan/${id}`).then(res => {
        setorganization_name(res.data.organization_name);
        seto_phone_no(res.data.o_phone_no);
        setaddress(res.data.address);
        setdonation_type(res.data.donation_type);
        setd_qty(res.data.d_qty);
        setlocation(res.data.location);
        console.log(res.data);
        })		
    }, []) 

 return(  
   <div>
      <Header/>
    <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
      Update Organization Details
      </div>
      <div class="forms" >
      <div class="form-group">
            <label for="exampleInputEmail1">Organization name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
            value={organization_name} required onChange={(e)=>{
                setorganization_name(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization contact number</label>
            <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
            value={o_phone_no} required onChange={(e)=>{
                seto_phone_no(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number"
             value={address} required onChange={(e)=>{
                setaddress(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization donation type</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" 
            value={d_qty} required onChange={(e)=>{
                setd_qty(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization location</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" 
            value={location} required onChange={(e)=>{
                setlocation(e.target.value);}}/>
            </div>
            <div class="modal-footers">
            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendOrganizationData}>Update </button>
           
        </div>
           </div>           
          
      </div>
</div>
<Footer/>
 </div>
 );
}

export default UpdateOrganization; 