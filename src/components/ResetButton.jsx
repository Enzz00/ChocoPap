import { PanierContext } from "../store/panier-context";
import { useContext } from "react"

export const ResetButton = () => {
  const { resetCart } = useContext (PanierContext);

  const handleResetClick = () => {
    resetCart();
  };

  return (
    <button onClick={handleResetClick}>Réinitialiser le panier</button>
  );
};