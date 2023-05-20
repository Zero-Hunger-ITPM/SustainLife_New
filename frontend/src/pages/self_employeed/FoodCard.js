import { Col } from "react-bootstrap";
import "./exchangefood.css";
import {Link,useParams} from "react-router-dom";

const FoodCard = ({
  _id,
  image,
  Name,
  addrLine1,
  city,
  telephone,
  ExchangeCategory,
  email

}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} />
        <div className="proj-txtx">
          <h4>Self Employee Name:{Name}</h4>
          <h5>Address: {addrLine1}</h5>
          <h5>City: {city}</h5>
          <h5>Contact Number: {telephone}</h5>
          <h5>Exchange Category: {ExchangeCategory}</h5>
          <h5>Email: {email}</h5>
          <br/>
          <button><Link to={``}>Contact Now</Link></button>
        </div>
      </div>
    </Col>
  )
}
export default FoodCard