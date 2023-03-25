import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"


const ItemListContainer = () => {
  const { id } = useParams();
  
  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter ( ( elemento) => elemento.category === id)

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(id ? productosFiltrados :products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
	  return <div> </div>
  }, [id]);

  return (
    <div>
      
      <ItemList items={items}  />
      
    </div>
  );
};

export default ItemListContainer;