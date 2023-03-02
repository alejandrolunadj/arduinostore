
import "./ProductCard.css"

const ProductCard = ( {title, price=0, isRed, image} ) => {


  
  return (
    
    <div className="producto">
        <img 
          src={image}
          alt=""
          style={{  height:"25vh"}}
        />
        <h1  className={ isRed ? "red" : "blue" }> {title} </h1>
        <h2> $ {price} </h2>
    </div>
  )
}

export default ProductCard

