import React, { useState } from "react";
import axios from "axios";
import {Link,useParams} from "react-router-dom";
import swal from "sweetalert2";
import "./Add.css";
import Header from "../../components/header";
import Footer from "../../components/footer";


function AddProductsForm (){
  /*create states*/
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [dOM, setDOM] = useState("");
  const [dOE, setDOE] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [location, setLocation] = useState("");
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
  
  function saveProduct(e){
    e.preventDefault();
    alert("Going to add New Product");
    let hasErrors = false;

    const nameModel = /^[a-zA-Z]+$/
    const locationModel = /^[a-zA-Z]+$/
  
    if (productName.length <= 0 && !nameModel.test(productName)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "nameError"]);
    } 

    if (location.length <= 0 && !locationModel.test(location)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "locationError"]);
    } 

    if (restaurant.length <= 0 && !nameModel.test(restaurant)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "nameError"]);
    } 


    const product = {
      image,
      productName,
      regularPrice,
      discountRate,
      discountedPrice,
      dOM,
      dOE,
      restaurant,
      location,
    };
    if (
      product.image.length <= 0 ||
      product.productName.length <= 0 ||
      product.regularPrice.length <= 0 ||
      product.discountRate.length <= 0 ||
      product.discountedPrice.length <= 0 ||
      product.dOM.length <= 0 ||
      product.dOE.length <= 0 ||
      product.restaurant.length <= 0 ||
      product.location.length <= 0 
    ) {
      //setErrors(true);
      return;
    }

    axios.post("http://localhost:8000/api/AddProducts/",product).then(()=>{
     
    }).catch((err)=>{
      alert(err)
    });
    swal.fire({
      title: "Product Added Successfully !!.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "";
          });
   
  };

  return (
    <div><Header/>
    
    <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
       Add New Products
      </div>
      <div class="forms" >
        <div class="inputfieldss">
            <label>Product Image</label>
            <input type="file" id="image" onChange={handleImageChange} required/>
                             {image && (
                               <div>
                                 <img src={image} alt="Selected" />
                                </div>
                              )}
            
         </div>
         <div class="inputfieldss">
            <label>Product Name</label>
            <input type="text" class="inputss" value={productName} required onChange={(e)=>{
               setProductName(e.target.value);
            }}/>
            {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
         </div>
         <div class="inputfieldss">
            <label>Regular Price</label>
            <input type="text" class="inputss" value={regularPrice} required onChange={(e)=>{
               setRegularPrice(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Discount Rate</label>
            <input type="text" class="inputss"value={discountRate} required onChange={(e)=>{
                  setDiscountRate(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Discounted Price</label>
            <input type="text" class="inputss" value={discountedPrice} required onChange={(e)=>{
                  setDiscountedPrice(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Date of Manufacture </label>
            <input type="date" class="inputss" value={dOM} required onChange={(e)=>{
                  setDOM(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Date of Expiry</label>
            <input type="date" class="inputss" value={dOE} required onChange={(e)=>{
                  setDOE(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Restaurant</label>
            <input type="text" class="inputss" value={restaurant} required onChange={(e)=>{
                  setRestaurant(e.target.value);
            }}/>
            {errors.includes("nameError") && (
          <p class="alert-txt">Restaurant is Required </p>
        )}
         </div> 
         <div class="inputfieldss">
            <label>Location</label>
            <input type="text" class="inputss" value={location} required onChange={(e)=>{
                  setLocation(e.target.value);
            }}/>
            {errors.includes("locationError") && (
          <p class="alert-txt">Location is Required </p>
        )}
         </div>                
          <div class="modal-footers">
            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={saveProduct}> <Link to={``} >Add Product </Link></button>
           
        </div>
      </div>
</div>
    </div>
    <Footer/>
    </div>
  );
};

export default AddProductsForm;
