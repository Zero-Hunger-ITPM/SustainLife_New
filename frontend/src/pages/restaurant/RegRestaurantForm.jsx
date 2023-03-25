import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";

const  RegRestaurantForm = () => {
  /*create states*/
  const [image, setImage] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [addrLine1, setAddrLine1] = useState("");
  const [addrLine2, setAddrLine2] = useState("");
  const [addrLine3, setAddrLine3] = useState("");
  const [city, setCity] = useState("");
  const [telephone, setTelephone] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  
  const saveRestaurant = async (e) => {
    e.preventDefault();
    const restaurant = {
      image,
      restaurantName,
      addrLine1,
      addrLine2,
      addrLine3,
      city,
      telephone,
      category,
      email,
      password,
      confirmpassword,
    };
    if (
      restaurant.image.length <= 0 ||
      restaurant.restaurantName.length <= 0 ||
      restaurant.addrLine1.length <= 0 ||
      restaurant.addrLine2.length <= 0 ||
      restaurant.addrLine3.length <= 0 ||
      restaurant.city.length <= 0 ||
      restaurant.telephone.length <= 0 ||
      restaurant.category.length <= 0 ||
      restaurant.email.length <= 0 ||
      restaurant.password.length <= 0 ||
      restaurant.confirmpassword.length <= 0 
    ) {
      //setErrors(true);
      return;
    }

    axios.post("http://localhost:8000/api/RegRestaurants/",restaurant)
    .then(()=>{
     
    }).catch((err)=>{
      alert(err)
    });
    swal.fire({
      title: "Restaurant is Successfully Added.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "/home";
          });
  };

  return (
   
    <form><label htmlFor="restaurant-image">Restaurant Image:</label>
    <input
      type="text"
      id="restaurant-name"
      name="restaurant-name"
      value={image}
      onChange={(event) => setImage(event.target.value)}
      required
    />

      <label htmlFor="restaurant-name">Restaurant Name:</label>
      <input
        type="text"
        id="restaurant-name"
        name="restaurant-name"
        value={restaurantName}
        onChange={(event) => setRestaurantName(event.target.value)}
        required
      />

      <label htmlFor="restaurant-address1">Address Line 1:</label>
      <input
        type="text"
        id="restaurant-address1"
        name="restaurant-address1"
        value={addrLine1}
        onChange={(event) => setAddrLine1(event.target.value)}
        required
      />

      <label htmlFor="restaurant-address2">Address Line 2:</label>
      <input
        type="text"
        id="restaurant-address2"
        name="restaurant-address2"
        value={addrLine2}
        onChange={(event) => setAddrLine2(event.target.value)}
        required
      />

      <label htmlFor="restaurant-address3">Address Line 3:</label>
      <input
        type="text"
        id="restaurant-address3"
        name="restaurant-address3"
        value={addrLine3}
        onChange={(event) => setAddrLine3(event.target.value)}
        required
      />

      <label htmlFor="restaurant-city">City:</label>
      <input
        type="text"
        id="restaurant-city"
        name="restaurant-city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required
      />

      <label htmlFor="restaurant-phone">Telephone:</label>
      <input
        type="tel"
        id="restaurant-phone"
        name="restaurant-phone"
        value={telephone}
        onChange={(event) => setTelephone(event.target.value)}
        required
      />

      <label htmlFor="restaurant-category">Restaurant Category:</label>
      <select
        id="restaurant-category"
        name="restaurant-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      >
        <option value="">Select a category</option>
        <option value="fast-food">Fast Food</option>
        <option value="italian">Italian</option>
        <option value="chinese">Chinese</option>
        <option value="mexican">Mexican</option>
      </select>

      <label htmlFor="restaurant-email">Email:</label>
      <input
        type="email"
        id="restaurant-email"
        name="restaurant-email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        value={confirmpassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        required
      />

      <button type="submit"  onClick={saveRestaurant}>Submit</button>
    </form>
  );
};

export default RegRestaurantForm;
