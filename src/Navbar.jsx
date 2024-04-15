import { NavLink, Outlet } from 'react-router-dom';

import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { PanierContext } from './panier-context';
import { ResetButton } from './ResetButton';



function NavBar () {
    const [showLinks, setShowLinks] = useState(false)
    const [showShop, setShowShop] = useState(false)

    const handleShowlinks  = () => {
    setShowLinks(!showLinks)
}
    const handleShowShop  = () => {
    setShowShop(!showShop)
}

    const { items, updateItemQuantity , uptadedData , handleResetClick} = useContext(PanierContext)

    const totalAmount = items.reduce((acc, item)=> acc+item.texte2 * item.quantity, 0)

    

    return <>
    <nav className={`navbar ${showLinks ? "show-nav" : "hidden-nav" }` }>
            <div className='navBarLogo'>
            <img src='../img/logoChocopap.png' id='logoChocopap'></img>
                <button className='navBar-Burger' onClick={handleShowlinks}>
                <span className='burger-bar'></span>
                </button>
            </div>
            <ul>
                <li>
                    <NavLink 
                    to={"/"}
                    >Accueil</NavLink>
                </li>
                <li id='nav'>
                    <NavLink 
                    to={"/boutique"}
                    >Boutique</NavLink>
                </li>
                <li id="Panier">
                        <p>{items.length}</p>
                    <button onClick={handleShowShop} >
                        <span>Panier</span>
                        <FontAwesomeIcon className='ShopIcon' 
                        icon={faShoppingCart} />
                    </button>
    

                </li>
            </ul>
    
            </nav>
        <div className={`PageShoppingPage ${showShop ? "PageShoppingPage" : "hiddenShopp" }` } >
            <div className="TitleShopping">        
                    <span className='CrossShopping'
                    onClick={handleShowShop}
                    ></span>
                <h3>PANIER</h3>
            </div>
                <div className="ContentItemShopping">
                    <div>{items.length===0 && <p >Votre panier est vide</p>}
                    {items.length > 0 && 
                    <ul className='ProductList'>
                        {items.map((product) => {
                            return <li key={product.id}>
                        
                        <div className='ProductItemInCart'> 
                            <div>
                                <img src={product.image}></img>
                            </div>
                            <div className='CartTextPrice'>
                                <span>{product.texte1}</span>
                                <span>{product.texte2}€</span>
                            </div>
                            <div className='buttonincreDecre'>
                                <button onClick={()=>updateItemQuantity(product.id, -1)}>-</button>
                                    <span>{product.quantity}</span>
                                <button onClick={()=>updateItemQuantity(product.id, +1)}>+</button>
                            </div>
                        </div>
                        </li>
                    })}
                        
                        </ul>}
                    </div>
                </div>
                <div className="resultShopping"> 
                    <p>Total:{totalAmount.toFixed(2)} €</p>
                    <ResetButton/>            
                    <button>VALIDER LE PANIER</button>
        </div>
    
    
    </div>
    <Outlet/>
    </>

}

export default NavBar
