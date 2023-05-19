import { Col } from "react-bootstrap";
import "./Restaurant.css";
import {Link,useParams} from "react-router-dom";

const FoodCard = ({
  _id,
  image,
  productName,
  regularPrice,
  discountRate,
  discountedPrice,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} />
        <div className="proj-txtx">
          <h4>{productName}</h4>
          <h5>Regular Price: {regularPrice}</h5>
          <h5>Discount Rate: {discountRate}</h5>
          <h5>Discounted Price: {discountedPrice}</h5>
          <br/>
          <button><Link to={`/FoodItemDetails/`} > View More </Link></button>
        </div>
      </div>
    </Col>
  )
}
export default FoodCard