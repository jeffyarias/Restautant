import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHanlder = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      { cartIsShown && <Cart
        
        onHideCartHandler={hideCartHandler}
      />}
      <Header onShowCartHandler={showCartHanlder} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
