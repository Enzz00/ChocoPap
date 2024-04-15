import React from "react";
import { ItemPanier } from "./ItemPanier";
import { Checkedbox } from "./checkedbox";

const CategoryLi = ({ checkedItems, onCheckedChange }) => {
  const handleCheckboxChange = (productId) => {
    onCheckedChange(productId);
   
  };

  return (
    <div>
      <ul>
        {ItemPanier.map((product) => (
          <li key={product.id}>
            <Checkedbox
              checked={checkedItems[product.id]}
              onChange={() => handleCheckboxChange(product.id)}
            />
            {product.texte1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryLi;