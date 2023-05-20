import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./exchangefood.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function ExchangeItem(){
    const [exchange, setExchangee] = useState([])
    const [exchangeItemName, setexchangeItemName] = useState([]);
    const [exchangeItemPicture, setexchangeItemPicture] = useState("");
    const [exchangeItemLocation, setexchangeItemLocation] = useState("");
    const [exchangeItemContactNo, setexchangeItemContactNo] = useState("");
   
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            setexchangeItemPicture(event.target.result);
        };
    
        reader.readAsDataURL(file);
      };


    function saveExchange(e){
        e.preventDefault();
        alert("Add New item");
      
        const exchangeitem = {
            exchangeItemName,
            exchangeItemPicture,
            exchangeItemLocation,
            exchangeItemContactNo,
        };
        if (
            exchangeitem.exchangeItemName.length <= 0 ||
            exchangeitem.exchangeItemPicture.length <= 0 ||
            exchangeitem.addrLine1.length <= 0 ||
            exchangeitem.exchangeItemLocation.length <= 0 ||
            exchangeitem.exchangeItemContactNo.length <= 0 
         
        ) {
          //setErrors(true);
          return;
        }
        axios.post("http://localhost:8000/api/AddExchangeItem",exchangeitem).then(()=>{
        }).catch((err)=>{
          alert(err)
        });
        swal.fire({
          title: " Added Successfully !!.",
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
                <h2>Add Exchange Items</h2>
        <div class="form-group">
        <label for="exampleInputEmail1">Exchange Item Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
         value={exchangeItemName} required onChange={(e)=>{
            setexchangeItemName(e.target.value);}}></input>
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
        <label for="exampleInputEmail1">LOcation</label>
        <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
         value={exchangeItemLocation} required onChange={(e)=>{
            setexchangeItemLocation(e.target.value);}}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Employee city</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter city"
         value={exchangeItemContactNo} required onChange={(e)=>{
            setexchangeItemContactNo(e.target.value);}}></input>
        </div>
        
        <button type="submit" class="btn btn-primary" onClick={saveExchange}>Submit</button>
       </div> 
       </div>

      )
}
export default ExchangeItem;



