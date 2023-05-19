import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert2";
import "./Add.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function UpdateProducts(){

   const {id} = useParams();
  
    const [image, setImage] = useState("");
    const [productName, setProductName] = useState("");
    const [regularPrice, setRegularPrice] = useState("");
    const [discountRate, setDiscountRate] = useState("");
    const [discountedPrice, setDiscountedPrice] = useState("");
    const [dOM, setDOM] = useState("");
    const [dOE, setDOE] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [location, setLocation] = useState("");
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (event) => {
        setImage(event.target.result);
      };
  
      reader.readAsDataURL(file);
    };

   function sendproductData(e){
      e.preventDefault();
      alert("Going to Update Product");
  
      const newProduct = {
        image,
        productName,
        regularPrice,
        discountRate,
        discountedPrice,
        dOM,
        dOE,
        restaurant,
        location,
   }

   axios.put(`http://localhost:8000/api/AddProducts/${id}`,newProduct).then(()=>{

    }).catch((err)=>{
      alert(err)
      console.log(err);
    });
    swal.fire({
      title: "Product Updated Successfully !!.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "";
          });
   

}
   useEffect(() => {
    axios.get(`http://localhost:8000/api/AddProducts/${id}`).then(res => {
        setImage(res.data.image);
        setProductName(res.data.productName);
        setRegularPrice(res.data.regularPrice);
        setDiscountRate(res.data.discountRate);
        setDiscountedPrice(res.data.discountedPrice);
        setDOM(res.data.dOM);
        setDOE(res.data.dOE);
        setRestaurant(res.data.restaurant);
        setLocation(res.data.location);
        console.log(res.data);
        })		
    }, []) 

 return(  
   <div>
      <Header/>
    <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
      Update Product
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
         </div> 
         <div class="inputfieldss">
            <label>Location</label>
            <input type="text" class="inputss" value={location} required onChange={(e)=>{
                  setLocation(e.target.value);
            }}/>
         </div>                
          <div class="modal-footers">
            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendproductData}>  <Link to={`/ResAdmin/`} >Update </Link></button>
           
        </div>
      </div>
</div>
    </div>
    <Footer/>
    </div>
    );
}

export default UpdateProducts; 