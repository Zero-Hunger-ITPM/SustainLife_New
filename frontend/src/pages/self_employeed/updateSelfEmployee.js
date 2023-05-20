import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./exchangefood.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Employee(){
    const {id} = useParams();
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


    function sendEmployee(e){
      e.preventDefault();
      alert("Update Exchange item");
      
        const employee = {
            Name,
            image,
            addrLine1,
            city,
            telephone,
            ExchangeCategory,
            email
        };
        axios.put(`http://localhost:8000/api/AddEmployee/${id}`,newProduct).then(()=>{

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
    axios.get(`http://localhost:8000/AddEmployee/${id}`).then(res => {
        setName(res.data.Name);
        setImage(res.data.image);
        setaddrLine1(res.data.addrLine1);
        setcity(res.data.city);
        settelephone(res.data.telephone);
        setExchangeCategory(res.data.ExchangeCategory);
        setemail(res.data.email);
        
        console.log(res.data);
        })		
    }, []) 
      return(

        <div>
        <Header/>
              <div class="content">
                <h2>Edit Exchange Item</h2>
        <div class="form-group">
        <label for="exampleInputEmail1">Self employee name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
        onChange={(e)=>{
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
        onChange={(e)=>{
               setaddrLine1(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee city</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter city" 
        onChange={(e)=>{
          setcity(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee telephone number</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+94"
         onChange={(e)=>{
          settelephone(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Exchange Category</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Items that exchange for food" onChange={(e)=>{
          setExchangeCategory(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee"
        onChange={(e)=>{
          setemail(e.target.value);}}></input>
        </div>
       <div></div>
        <button type="submit" class="btn btn-primary" onClick={sendEmployee}>Submit</button>
       </div> 
       </div>

      )
}
export default Employee;



