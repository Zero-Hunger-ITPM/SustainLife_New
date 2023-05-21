import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert2";
import "./exchangefood.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Employee(){
    const {id} = useParams();
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

    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
          setImage(event.target.result);
        };
    
        reader.readAsDataURL(file);
      };


    function sendEmployee(e){
      e.preventDefault();
      alert("Update Exchange item");
      
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
        axios.put(`http://localhost:8000/api/AddEmployee/${id}`,employee).then(()=>{

      }).catch((err)=>{
        alert(err)
        console.log(err);
      });
      swal.fire({
        title: "Updated Successfully !!.",
        icon: "success",
        confirmButtonText: "OK",
          }).then(function () {
              // Redirect the user
              window.location.href = "";
            });
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/AddEmployee/${id}`).then(res => {
        setImage(res.data.image);
        setName(res.data.Name);
        setaddrLine1(res.data.addrLine1);
        setaddrLine2(res.data.addrLine2);
        setaddrLine3(res.data.addrLine3);
        setcity(res.data.city);
        settelephone(res.data.telephone);
        setExchangeCategory(res.data.ExchangeCategory);
        setemail(res.data.email);
        setpassword(res.data.password);
        
        console.log(res.data);
        })		
    }, []) 
      return(

        <div>
        <Header/>
              <div class="content">
                <h2>Edit Self Employee</h2>
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
        <label for="exampleInputEmail1">Self employee name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
        value={Name} onChange={(e)=>{
          setName(e.target.value);}}></input>
        </div>
       
        <div class="form-group">
        <label for="exampleInputEmail1">Employee address</label>
        <input type="address" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" 
        value={addrLine3} onChange={(e)=>{
               setaddrLine1(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee city</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter city" 
        value={city} onChange={(e)=>{
          setcity(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee telephone number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+94"
         value={telephone} onChange={(e)=>{
          settelephone(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Exchange Category</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Items that exchange for food" value={ExchangeCategory} onChange={(e)=>{
          setExchangeCategory(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee"
        value={email} onChange={(e)=>{
          setemail(e.target.value);}}></input>
        </div>
       <div></div>
        <button type="submit" class="btn btn-primary" onClick={sendEmployee}> <Link to={`/AdminEmp/`} >Update </Link></button>
       </div> 
       </div>

      )
}
export default Employee;



