import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import FoodCard  from "./FoodCard.js";
import "./Restaurant.css";
import Header from '../../components/header';
import Footer from '../../components/footer.js';
import { useEffect, useState } from 'react';
import Axios from 'axios';


const FoodItems = () => {

  const [foodItems,setFoodItems] = useState([]);  
  const [image,setImage] =useState(""); 
  const [productName,setProductName] =useState("");  
  const [regularPrice,setRegularPrice] =useState("");   
  const [discountRate,setDiscountRate] =useState("");  
  const [discountedPrice,setDiscountedPrice] =useState("");  
  
  useEffect(()=>{
    getAllFoodItems();
  },[])
  
  const getAllFoodItems= ()=>{
      Axios.get("http://localhost:8000/api/AddProducts/all").then((response)=>{
        console.log(response.data);      
        setFoodItems(response.data)
      })
  }

return (
 <section className="foodcard" id="foodcards">   
       <Header/>
        <Container>
          <Row>
            <Col size={12}>
              <div>
                  <h2>Sales Food Items</h2>
                  <p>Buy foods for fair prices</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                   
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                         
                          {
                            foodItems.map((foodItems, index) => {
                              return (
                                <FoodCard
                                  key={index}
                                  {...foodItems}
                                  />
                              )
                            })
                            
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        {/* <p>See my projects on github </p> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
             
            </Col>
          </Row>
        </Container>
   <Footer/>
        <img className="background-image-right" ></img>
      </section>
    )
  }
  export default FoodItems

