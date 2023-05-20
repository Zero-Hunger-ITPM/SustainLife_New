import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./exchangefood.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Employee(){
    const {id} = useParams();
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

    function sendExchangeItem(e){
      e.preventDefault();
      alert("Update Exchange item");
      
      const exchangeitem = {
        exchangeItemName,
        exchangeItemPicture,
        exchangeItemLocation,
        exchangeItemContactNo,
    };
        axios.put(`http://localhost:8000/api/AddExchangeItem/${id}`,exchangeitem).then(()=>{

      }).catch((err)=>{
        alert(err)
        console.log(err);
      });
      swal.fire({
        title: "Updated Successfully !!.",
        icon: "success",
        confirmButtonText: "OK",
          }).then(function () {
             
              window.location.href = "";
            });
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/AddEmployee/${id}`).then(res => {
      setexchangeItemName(res.data.exchangeItemName);
      setexchangeItemPicture(res.data.exchangeItemPicture);
      setexchangeItemLocation(res.data.exchangeItemLocation);
      setexchangeItemContactNo(res.data.exchangeItemContactNo);
     
        
        console.log(res.data);
        })		
    }, []) 
      return(

        <div>
        <Header/>
              <div class="content">
                <h2>Edit Exchange Item</h2>
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
       <div></div>
        <button type="submit" class="btn btn-primary" onClick={sendEmployee}>Submit</button>
       </div> 
       </div>

      )
}
export default Employee;



