import TravelProduct from "./TravelProduct";
import { useSelector } from "react-redux";


const TravelProductsList = ({title})=>{
    const travelProducts = useSelector(store=>store?.products?.productsList);
    return (
    <div className="px-6">
            <h1 className="text-lg py-4 text-black">{title}</h1>
            <div className="flex overflow-x-scroll">
            <div className="flex">
            {travelProducts?.length && travelProducts.map(product=>(<TravelProduct productDetails={product} />)
            )}
            </div>
            </div>        
    </div>
    );
}
export default TravelProductsList;