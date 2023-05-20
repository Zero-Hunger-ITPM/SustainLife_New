import React, {useEffect,useState} from "react";
import "./exchangefood.css";
import axios from "axios";
import swal from "sweetalert2";
import Header from '../../components/header'
import bg from "../../images/exchange.png"
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodCard  from "./FoodCard.js";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";


export default function ExchangeFood(){
  const [exchangeItems,setExchangeItems] = useState([]);  
   
  
  useEffect(()=>{
    getExchangeItems();
  },[])
  
  const getExchangeItems= ()=>{
      axios.get("http://localhost:8000/api/AddEmployee/all").then((response)=>{
        console.log(response.data);      
        setExchangeItems(response.data)
      })
  }

  return(
    <div>  
        <Header/>

      {/* <!--=============== Exchange Food Items ===============--> */}
      <main className="main">
          <div className='home__container Home-container grid'>
                <defs>
                <h1 className='title'>Exchange food items</h1>
     
                <div className="contact__content">
                <h5>If you are a self employee who selling foods as a business here is a chance to you.
                    <br/>
                    You can sell your food items to other people for as charity. 
                    <br/>
                    Other people can exchange a item or deals with employee and get their foods.
                </h5>
                <a href="/Employee" className="button">Self Employees join</a>             
               </div>
                <clipPath id="clip0">
                <rect width="312" height="236" top="20%" fill="white"/>
                </clipPath>
                </defs>
                <a><img  className="Home-bg" src={bg} alt="bg"/></a>
                </div>
              </main>
              <Container>
          <Row>
            <Col size={12}>
              <div>
                  <h2>Self Employees Already engage</h2>
                  <p>Contact them for exchange foods</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                   
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                         
                          {
                            exchangeItems.map((exchangeItems, index) => {
                              return (
                                <FoodCard
                                  key={index}
                                  {...exchangeItems}
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
        
        </div>
    );
}