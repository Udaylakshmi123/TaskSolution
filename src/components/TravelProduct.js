
import {IMG_URL} from "../utils/constants";
const TravelProduct = ({productDetails})=>{
    const {name,sku} = productDetails.attributes;
    const {price_in_cents}=productDetails.attributes.price;
    if(!productDetails) return null;
    return (<div className="w-48 pr-4 p-4 m-4 bg-white shadow-lg">
        <img src={IMG_URL + sku+'/0?auto=format&fit=max&w=480'} className="h-48"/>
        <h1 className="text-left">{name}</h1>
        <h1  className="text-left font-bold">${price_in_cents/100}</h1>
    </div>)
}
export default TravelProduct;