import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductsList } from "../utils/travelProductSlice";
const useTravelProductsList = () => {
  const dispatch = useDispatch();
  const travelProductsList = useSelector(store=> store?.products?.productsList);

  const getTravelProductsList = async () => {
    const data = await fetch("https://products.bellroy.com/v2/products?channel=bellroy.com&currency_identifier=24e93ad60e6042c01dce9d12008131fbdb51af44&price_role_identifier=BpxmBaMDPhkYyg82EFytxg%3D%3D&filter%5Bdimensions%5D%5Bweb_collection%5D=product_spotlight&filter%5Bnot%5D%5Bdimensions%5D%5Bsearchability%5D=non-searchable");
    const json = await data.json();
    dispatch(addProductsList(json.products));
  };
  useEffect(() => {
    !travelProductsList && getTravelProductsList();
  }, []);
};

export default useTravelProductsList;
