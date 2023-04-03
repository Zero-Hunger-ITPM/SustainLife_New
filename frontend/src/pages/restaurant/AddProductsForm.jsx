import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";

const AddProductsForm = () => {
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
  
  const saveProduct = async (e) => {
    e.preventDefault();
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

    axios.post("http://localhost:8000/api/AddProducts/",product)
    .then(()=>{
     
    }).catch((err)=>{
      alert(err)
    });
    swal.fire({
      title: "Product Added Successfully !!.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "/home";
          });
  };

  return (
   
    <form><label htmlFor="product-image">Product Image:</label>
    <input
      type="text"
      id="product-image"
      name="product-image"
      value={image}
      onChange={(event) => setImage(event.target.value)}
      required
    />

      <label htmlFor="product-name">Product Name:</label>
      <input
        type="text"
        id="product-name"
        name="product-name"
        value={productName}
        onChange={(event) => setProductName(event.target.value)}
        required
      />

      <label htmlFor="regular-price">Regular Price:</label>
      <input
        type="text"
        id="regular-price"
        name="regular-price"
        value={regularPrice}
        onChange={(event) => setRegularPrice(event.target.value)}
        required
      />

      <label htmlFor="discount-rate">Discount Rate:</label>
      <input
        type="text"
        id="discount-rate"
        name="discount-rate"
        value={discountRate}
        onChange={(event) => setDiscountRate(event.target.value)}
        required
      />

      <label htmlFor="discounted-price">Discounted Price:</label>
      <input
        type="text"
        id="discounted-price"
        name="discounted-price"
        value={discountedPrice}
        onChange={(event) => setDiscountedPrice(event.target.value)}
        required
      />

      <label htmlFor="dom">Date of Manufactury:</label>
      <input
        type="date"
        id="dom"
        name="dom"
        value={dOM}
        onChange={(event) => setDOM(event.target.value)}
        required
      />

      <label htmlFor="doe">Date of Expiry:</label>
      <input
        type="date"
        id="doe"
        name="doe"
        value={dOE}
        onChange={(event) => setDOE(event.target.value)}
        required
      />

      <label htmlFor="restaurant">Restaurant:</label>
      <input
        type="text"
        id="restaurant"
        name="restaurant"
        value={restaurant}
        onChange={(event) => setRestaurant(event.target.value)}
        required
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        required
      />

      <button type="submit"  onClick={saveProduct}>Submit</button>
    </form>
  );
};

export default AddProductsForm;
