import react,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Display.css";
import Header from '../../components/header';
import Footer from '../../components/footer';

function FoodItemDetails(){
	const [articles, setArticles] = useState([]);
	const [FoodSearch , setcrsSearch] = useState("");
	
	useEffect(() => {
		axios.get("	http://localhost:8000/api/AddProducts/all").then(res => {
			setArticles(res.data);
			console.log(res.data);
		})		
		}, [])

 return(
	
	 <body className="bodyz">
		<Header/>
    <div>
	<div class="container py-2 productcontainer" >

		
		<div className="input-group" style={{ width: "60rem",  }}>
                       <div class="srchs"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Foods" aria-label="Search" aria-describedby="search-addon" />
					   <button type="button" id="srbttn"  className="btn btn-col" style={{color:"black"}}><i class="fa fa-search"></i></button>
                </div>
         </div>

		{articles && articles.filter(value=>{
            if(FoodSearch ===""){
                return value;
            }else if(
                value.productName.toLowerCase().includes(FoodSearch.toLowerCase())
            ){
                return value
            }
        }).map((article, i) => (
        <article key={i} class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={article.image} alt="Image Title" />
			</a>
	
  		<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">{article.productName}</a></h1>
				<div class="postcard__subtitle small">		
			</div>
	
  	<div class="postcard__bar"></div>
		<div class="postcard__preview-txt">Regular Price:  {article.regularPrice}</div>
		<div class="postcard__preview-txt">Discount Rate:  {article.discountRate}</div>
		<div class="postcard__preview-txt">Discounted Price:  {article.discountedPrice}</div>
		<div class="postcard__preview-txt">Date of Manufacture:  {article.dOM}</div>
		<div class="postcard__preview-txt">Date of Expiry:  {article.dOE}</div>
		<div class="postcard__preview-txt">Restaurant:  {article.restaurant}</div>
		<div class="postcard__preview-txt">Location:  {article.location}</div>

           <button type="button" class="btns"><Link to={`/Payment/`} > Buy Now </Link></button><br></br>
		   <button type="button" class="btns">Add to Cart</button> 
	</div>
    </article>
   ))}
	</div>
 </div>
 <Footer/>
</body>
  );
}

export default FoodItemDetails;