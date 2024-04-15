import { createContext, useReducer, useState } from "react";
import { ItemPanier } from "./ItemPanier";
import NavBar from "./Navbar";

//items = elements dans le panier 
export const PanierContext = createContext({
    items: [], 
    addItemToCart: () => {},
    updateItemQuantity:()=> {},
});


const cartReducer = (state, action) => {
    switch (action.type) {
      case "AJOUTER_DANS_PANIER": {
        const updateShoppingCartItems = [...state.items];
        const existingElementIndex = updateShoppingCartItems.findIndex(
          (cartItem) => cartItem.id === action.payload.productId
        );
        if (existingElementIndex !== -1) {
          const existingElement = updateShoppingCartItems[existingElementIndex];
          const updatedProductData = {
            ...existingElement,
            quantity: existingElement.quantity + 1,
          };
          updateShoppingCartItems[existingElementIndex] = updatedProductData;
        } else {
          const product = ItemPanier.find(
            (product) => product.id === action.payload.productId
          );
          if (product) {
            updateShoppingCartItems.push({
              id: product.id,
              image: product.image,
              texte1: product.texte1,
              texte2: product.texte2,
              quantity: 1,
            });
          }
        }
        return {
          items: updateShoppingCartItems,
        };
      }
      case "ACTUALISER_QUANTITE_PRODUIT": {
        const updateShoppingCartItems = [...state.items];
        const existingElementIndex = updateShoppingCartItems.findIndex(
          (cartItem) => cartItem.id === action.payload.productId
        );
        if (existingElementIndex !== -1) {
          const updatedData = {
            ...updateShoppingCartItems[existingElementIndex],
          };
          const newQuantity = action.payload.quantity;
          updatedData.quantity += newQuantity;
          if (updatedData.quantity <= 0) {
            updateShoppingCartItems.splice(existingElementIndex, 1);
          } else {
            updateShoppingCartItems[existingElementIndex] = updatedData;
          }
        }
        return {
          items: updateShoppingCartItems,
        };
     }   
        case "RESET_CART": {
            return {
              items: [],
            };
          }
          default:
            return state;
        }
      };

    

 export const PanierContextProvider = ({children}) => {


    const [cartState, cartDispatch] = useReducer(cartReducer, {
        items: [],
    }  );
    const handleAddProductToCart = (productId) => {
        cartDispatch({
            type:"AJOUTER_DANS_PANIER",
            payload: { productId: productId },
        });
    };
    const handleUpdateProductQuantity = (productId, quantity) => {

        cartDispatch({
            type:"ACTUALISER_QUANTITE_PRODUIT",
            payload: {
                productId,
                quantity, 
            }
        })
    }
    const handleResetCart = () => {
        cartDispatch({ type: "RESET_CART" });
      };
    const initialValue = {
        items: cartState.items,
        addItemToCart: handleAddProductToCart,
        updateItemQuantity: handleUpdateProductQuantity,
        resetCart: handleResetCart,
      };
    
      return (
        <PanierContext.Provider value={initialValue}>
          {children}
        </PanierContext.Provider>
      );
    };