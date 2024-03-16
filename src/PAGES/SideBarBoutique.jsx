import React, { useState } from "react";
import { Prix } from "./Prix";
import CategoryLi from "./CategoryLi";
import Products from "./Products";
import { ItemPanier } from "./ItemPanier";
import { Notes } from "./Notes";

export function SideBarBoutique() {
  const [showLinks, setShowLinks] = useState(false);
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10");
  const [minNotes, setMinNotes] = useState("0");
  const [maxNotes, setMaxNotes] = useState("5");

  const [checkedItems, setCheckedItems] = useState(
    ItemPanier.reduce((acc, product) => {
      acc[product.id] = false; 
      return acc;
    }, {})
  );

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
  };

  const handleCheckedChange = (productId) => {
    setCheckedItems({
      ...checkedItems,
      [productId]: !checkedItems[productId]
    });
  };

  return (
    <div className="panier">
      <div className="filtreboutique">
        <h3>FILTRE</h3>
        <div>
          <div className="ButtonToggleContent">
            <h2>CATEGORIES</h2>
            <span
              className={`cross ${showLinks ? "cross" : "hiddencross"}`}
              onClick={handleShowlinks}
            ></span>
          </div>

          <ul className={`listeboutique ${showLinks ? "listeboutique" : "hidden-li-CATEGORIES"}`}>
            <CategoryLi
              checkedItems={checkedItems}
              onCheckedChange={handleCheckedChange}
            />
          </ul>
        </div>
        
        <Prix setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />

        <div>
        <Notes minNotes={minNotes} setMinNotes={setMinNotes} maxNotes={maxNotes} setMaxNotes={setMaxNotes} />
        </div>
      </div>
      <div className="leftbar">
        <Products checkedItems={checkedItems} minPrice={minPrice} maxPrice={maxPrice} minNotes={minNotes} maxNotes={maxNotes} />
      </div>
    </div>
  );
}