import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { ItemPanier } from "./ItemPanier";

const Products = ({ checkedItems, minPrice, maxPrice ,minNotes, maxNotes}) => {
  // Filtrer les produits pour n'afficher que ceux qui sont cochés
  const checkedProductIds = Object.keys(checkedItems).filter(
    (productId) => checkedItems[productId]
  );

  let filteredProducts = ItemPanier;

  // Si des produits sont cochés, filtrer les produits à afficher
  if (checkedProductIds.length > 0) {
    filteredProducts = ItemPanier.filter((item) =>
      checkedProductIds.includes(String(item.id))
    );
  }

  // Filtrer par prix
  filteredProducts = filteredProducts.filter((item) => {
    const itemPrice = parseFloat(item.texte2); 
    return itemPrice >= parseFloat(minPrice) && itemPrice <= parseFloat(maxPrice);
  });
  filteredProducts = filteredProducts.filter((item) => {
    const itemNotes = parseFloat(item.texte3);
    return itemNotes >= parseFloat(minNotes) && itemNotes <= parseFloat(maxNotes);
  });
 
  if (filteredProducts.length === 0) {
    return <h3>Aucun produit trouvé  </h3>
  }

  return (
    <div>
      <ul className="produitboutique">
        {filteredProducts.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
    
    </div>
  );
};

export default Products;