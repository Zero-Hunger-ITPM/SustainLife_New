import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./exchangefood.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Employee(){
    const [employee, setEmployee] = useState([])
    
    const [image, setImage] = useState("");
    const [Name, setName] = useState("");
    const [addrLine1, setaddrLine1] = useState("");
    const [addrLine2, setaddrLine2] = useState("");
    const [addrLine3, setaddrLine3] = useState("");
    const [city, setcity] = useState("");
    const [telephone, settelephone] = useState("");
    const [ExchangeCategory, setExchangeCategory] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errors, setErrors] = useState([]);

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
        let hasErrors = false;

        const nameModel = /^[a-zA-Z]+$/
    var quantities =/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/
    const emailModel = /\S+@\S+\.\S+/;

    if (Name.length <= 0 && !nameModel.test(Name)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "nameError"]);
    } 

    if (ExchangeCategory.length <= 0 && !nameModel.test(ExchangeCategory)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "nameError"]);
    } 
    
    
    if(!quantities.test(telephone)){
      hasErrors=true;
      setErrors((prev) => [...prev, "QuantityError"]);
     }

     if(!emailModel.test(email)){
      hasErrors = true;
      setErrors((prev) => [...prev, "emailError"]);
    }

        const employee = {
          
          image,
          Name,
          addrLine1,
          addrLine2,
          addrLine3,
          city,
          telephone,
          ExchangeCategory,
          email,
          password
        };
        if (
            
            employee.image.length <= 0 ||
            employee.Name.length <= 0 ||
            employee.addrLine1.length <= 0 ||
            employee.addrLine2.length <= 0 ||
            employee.addrLine3.length <= 0 ||
            employee.city.length <= 0 ||
            employee.telephone.length <= 0 ||
            employee.ExchangeCategory.length <= 0 ||
            employee.email.length <= 0 ||
            employee.password.length <= 0
         
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
        <br></br>
              <div class="content">
                <h2>Register New Self Employee</h2>
                <br></br>
                <div class="inputfieldss">
            <label>Product Image</label>
            <input type="file" id="image" onChange={handleImageChange} required/>
                             {image && (
                               <div>
                                 <img src={image} alt="Selected" />
                                </div>
                              )}
            
         </div>
         <br></br>
        <div class="form-group">
        <label for="exampleInputEmail1">Self Employee Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
         value={Name} required onChange={(e)=>{
                setName(e.target.value);}}></input>
                   {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
        </div>
      
        <div class="form-group">
        <label for="exampleInputEmail1">Employee Address Line 1</label>
        <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter adrees line 1"
        value={addrLine1} required onChange={(e)=>{
          setaddrLine1(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee Address Line 2</label>
        <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter adrees line 2"
        value={addrLine2} required onChange={(e)=>{
          setaddrLine2(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee Address Line 3</label>
        <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter adrees line 3"
        value={addrLine3} required onChange={(e)=>{
          setaddrLine3(e.target.value);}}></input>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Employee City</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter city"
         value={city} required onChange={(e)=>{
          setcity(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee Telephone</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+94"
        value={telephone} required onChange={(e)=>{
          settelephone(e.target.value);}}></input>
                      {errors.includes("QuantityError") && (
          <p class="alert-txt">Please Enter Valid Phone No</p>
        )}
          
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Exchange Category</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Items that exchange for food"
        value={ExchangeCategory} required onChange={(e)=>{
          setExchangeCategory(e.target.value);}}></input>
                  {errors.includes("nameError") && (
          <p class="alert-txt">Category is Required </p>
        )}
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee email"
        value={email} required onChange={(e)=>{
          setemail(e.target.value);}}></input>
            {errors.includes("emailError") && (
          <p class="alert-txt">Please Enter Valid Email</p>)}
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee Password</label>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee password"
        value={password} required onChange={(e)=>{
          setpassword(e.target.value);}}></input>
        </div>
       <div></div>
       <br></br>
        <button type="submit" class="btn btn-primary" onClick={saveEmployee}>Submit</button>
       </div> 
       <br></br>
       <Footer/>
       </div>

      )
}
export default Employee;















