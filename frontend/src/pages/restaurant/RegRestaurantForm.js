import React, { useState } from "react";
import axios from "axios";
import {Link,useParams} from "react-router-dom";
import swal from "sweetalert2";
import "./Add.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function RegRestaurantForm (){
  /*create states*/
  const [image, setImage] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [addrLine1, setAddrLine1] = useState("");
  const [addrLine2, setAddrLine2] = useState("");
  const [addrLine3, setAddrLine3] = useState("");
  const [city, setCity] = useState("");
  const [telephone, setTelephone] = useState("");
 // const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [errors, setErrors] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };
  
  function saveRestaurant(e){
    e.preventDefault();
    alert("Going to add New Restaurant");
    let hasErrors = false;

    const nameModel = /^[a-zA-Z]+$/
    const emailModel = /\S+@\S+\.\S+/;
    var telephones =/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/

    if(!telephones.test(telephone)){
      hasErrors=true;
      setErrors((prev) => [...prev, "mobileNoError"]);
     }

     if (restaurantName.length <= 0 && !nameModel.test(restaurantName)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "nameError"]);
    } 
      if(!emailModel.test(email)){
        hasErrors = true;
        setErrors((prev) => [...prev, "emailError"]);
      }
      if (email.length <= 0) {
        hasErrors = true;
        setErrors((prev) => [...prev, "emailError"]);
      }
      if (city.length <= 0) {
        hasErrors = true;
        setErrors((prev) => [...prev, "cityError"]);
      }
      if (password.length <= 0) {
        hasErrors = true;
        setErrors((prev) => [...prev, "passwordError"]);
      }

      if (hasErrors) {
        return;
      } else {

    const restaurant = {
      image,
      restaurantName,
      addrLine1,
      addrLine2,
      addrLine3,
      city,
      telephone,
      //category,
      email,
      password,
     
    };
    if (
      restaurant.image.length <= 0 ||
      restaurant.restaurantName.length <= 0 ||
      restaurant.addrLine1.length <= 0 ||
      restaurant.addrLine2.length <= 0 ||
      restaurant.addrLine3.length <= 0 ||
      restaurant.city.length <= 0 ||
      restaurant.telephone.length <= 0 ||
      //restaurant.category.length <= 0 ||
      restaurant.email.length <= 0 ||
      restaurant.password.length <= 0 
      
    ) {
      //setErrors(true);
      return;
    }

    axios.post("http://localhost:8000/api/RegRestaurant/",restaurant).then(()=>{
     
    }).catch((err)=>{
      alert(err)
    });
    swal.fire({
      title: "Restaurant Added Successfully !!.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "";
          });
        };
  };

  return (
    <div><Header/>
    
    <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
       Add New Restaurant
      </div>
      <div class="forms" >
        <div class="inputfieldss">
            <label>Restaurant Image</label>
            <input type="file" id="image" onChange={handleImageChange} required/>
                             {image && (
                               <div>
                                 <img src={image} alt="Selected" />
                                </div>
                              )}
            
         </div>
         <div class="inputfieldss">
            <label>Restaurant Name</label>
            <input type="text" class="inputss" value={restaurantName} required onChange={(e)=>{
               setRestaurantName(e.target.value);
            }}/>
            {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
         </div>
         <div class="inputfieldss">
            <label>Address Line 1</label>
            <input type="text" class="inputss" value={addrLine1} required onChange={(e)=>{
               setAddrLine1(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Address Line 2 </label>
            <input type="text" class="inputss"value={addrLine2} required onChange={(e)=>{
                  setAddrLine2(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Address Line 3</label>
            <input type="text" class="inputss" value={addrLine3} required onChange={(e)=>{
                  setAddrLine3(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>City</label>
            <input type="text" class="inputss" value={city} required onChange={(e)=>{
                  setCity(e.target.value);
            }}/>
             {errors.includes("cityError") && (
          <p class="alert-txt">City is Required </p>
          )}
         </div>
         <div class="inputfieldss">
            <label>Telephone</label>
            <input type="text" class="inputss" value={telephone} required onChange={(e)=>{
                  setTelephone(e.target.value);
            }}/>
             {errors.includes("mobileNoError") && (
          <p class="alert-txt">Please Enter Valid Mobile No</p>
        )}
         </div>

            {/* <div className="form-group row">
                        <label for="type">Restaurant Category</label>
                        <select className="form-control" value={category} required onChange={(e)=>{
                        setCategory(e.target.value);

                           }}>
                            <option value="Fast-Food">Fast Food</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Italian">Italian</option>
                            <option value="Sea-Food">Sea Food</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Food-Truck">Food Truck</option>
                        </select>

                    </div> */}

         
         <div class="inputfieldss">
            <label>Email</label>
            <input type="text" class="inputss" value={email} required onChange={(e)=>{
                  setEmail(e.target.value);
            }}/>
              {errors.includes("emailError") && (
          <p class="alert-txt">Please Enter Valid Email</p>)}
         </div>        
         <div class="inputfieldss">
            <label>Password</label>
            <input type="password" class="inputss" value={password} required onChange={(e)=>{
                  setPassword(e.target.value);
            }}/>
             {errors.includes("passwordError") && (
          <p class="alert-txt">Please Enter Valid Password</p>)}
         </div>  
                  
          <div class="modal-footers">
            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={saveRestaurant}> <Link to={``} >Submit </Link></button>
           
        </div>
      </div>
</div>
    </div>
    <Footer/>
    </div>
  );
};

export default RegRestaurantForm;
