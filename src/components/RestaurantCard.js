import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{

    const {resData}=props;


  
    return(
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className = "restaurant-logo" src={CDN_URL+resData.cloudinaryImageId}></img>
        <h3>{resData.name}</h3>   
        <h4>{resData.cuisines}</h4>
        <h4>{resData.avgRating}</h4>
        <h4>{resData.costForTwo}</h4>
        <h4>{resData.deliveryTime}</h4>


        </div> 
    )
}

export default RestaurantCard