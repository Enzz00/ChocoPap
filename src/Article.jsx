import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PanierContext } from "./panier-context";
import { ItemPanier } from "./ItemPanier";
import { ResetButton } from "./ResetButton";

export function Article() {
    const { id } = useParams();
    const { addItemToCart, updateItemQuantity, items } = useContext(PanierContext);
    const product = getProductById(id);
    const productInCart = items.find(item => item.id === product.id);

    if (!product)  {  
        return <div className="ProductDontfind">Produit non trouvé</div>;

    }
    return (
        <div className="ProductById">
                <div className="ImgById">
                    <img className='phototproduit' src={product.image} alt={`Image ${product.texte1}`}  />
                </div>
                <div className="containproduct">
                    <div className="TextByID">
                        <h2>{product.texte1}</h2>
                        <p>{product.texte2} €</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius at maiores dolorem nisi, natus magni similique molestias molestiae iusto, laudantium consectetur in quia laborum?</p>
                        <button onClick={() => addItemToCart(product.id)}>Ajouter au panier</button>
                          
                    </div>
                    <div className='buttonincreDecre'>
                        {productInCart && (
                            <>
                                <button onClick={() => updateItemQuantity(product.id, -1)}>-</button>
                                <span>{productInCart.quantity}</span>
                                <button onClick={() => updateItemQuantity(product.id, +1)}>+</button>
                              <div id="reset">  
                                        <ResetButton/>
                                </div>  
                            </>
                        )}
                    </div>
                </div>
        </div>   
    );
}

function getProductById(id) {
    // Convertir l'ID en nombre
    const productId = parseInt(id);
    // Trouver le produit correspondant dans ItemPanier
    return ItemPanier.find(product => product.id === productId);
}