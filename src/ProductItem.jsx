import { useContext } from "react"
import { PanierContext } from "./panier-context"
import { NavLink } from "react-router-dom";

const ProductItem = ({product}) => {
    
    const { addItemToCart } = useContext (PanierContext);
    
    
    return <li className="ProductList">
        
        <img className='phototproduit' src={product.image} alt={`Image ${product.texte1}`}  />
        <NavLink  to={`/boutique/${product.id}`} ><p>{product.texte1} </p> </NavLink>
        <p>{product.texte2} €</p>
        <p>{product.texte3}</p>
        <button onClick={() =>addItemToCart(product.id)}>
            Ajouter au panier
        </button>
    </li>
    
}

export default ProductItem