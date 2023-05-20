import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./exchangefood.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Employee(){
    const [employee, setEmployee] = useState([])
    const [Name, setName] = useState([]);
    const [image, setImage] = useState("");
    const [addrLine1, setaddrLine1] = useState("");
    const [city, setcity] = useState("");
    const [telephone, settelephone] = useState("");
    const [ExchangeCategory, setExchangeCategory] = useState("");
    const [email, setemail] = useState("");
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
          setImage(event.target.result);
        };
    
        reader.readAsDataURL(file);
      };


    function saveEmployee(e){
        e.preventDefault();
        alert("Add New Employee");
      
        const employee = {
            Name,
            image,
            addrLine1,
            city,
            telephone,
            ExchangeCategory,
            email
        };
        if (
            employee.Name.length <= 0 ||
            employee.image.length <= 0 ||
            employee.addrLine1.length <= 0 ||
            employee.city.length <= 0 ||
            employee.telephone.length <= 0 ||
            employee.ExchangeCategory.length <= 0 ||
            employee.email.length <= 0 
         
        ) {
          //setErrors(true);
          return;
        }
        axios.post("http://localhost:8000/api/AddEmployee",employee).then(()=>{
        }).catch((err)=>{
          alert(err)
        });
        swal.fire({
          title: "Employee Added Successfully !!.",
          icon: "success",
          confirmButtonText: "OK",
            }).then(function () {
                // Redirect the user
                window.location.href = "";
              });
      };

      return(

        <div>
        <Header/>
              <div class="content">
                <h2>Register New Self Employee</h2>
        <div class="form-group">
        <label for="exampleInputEmail1">Self employee name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
         value={Name} required onChange={(e)=>{
                setName(e.target.value);}}></input>
        </div>
        <div class="inputfieldss">
            <label>Product Image</label>
            <input type="file" id="image" onChange={handleImageChange} required/>
                             {image && (
                               <div>
                                 <img src={image} alt="Selected" />
                                </div>
                              )}
            
         </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee address</label>
        <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
        value={addrLine1} required onChange={(e)=>{
          setaddrLine1(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee city</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter city"
         value={city} required onChange={(e)=>{
          setcity(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee telephone number</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+94"
        value={telephone} required onChange={(e)=>{
          settelephone(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Exchange Category</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Items that exchange for food"
        value={ExchangeCategory} required onChange={(e)=>{
          setExchangeCategory(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee"
        value={email} required onChange={(e)=>{
          setemail(e.target.value);}}></input>
        </div>
       <div></div>
        <button type="submit" class="btn btn-primary" onClick={saveEmployee}>Submit</button>
       </div> 
       </div>

      )
}
export default Employee;















