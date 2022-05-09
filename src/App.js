import { useState } from "react";
import IconBurger from "./Components/IconBurger";
import Navegation from "./Components/Navegation";
import PrincipalProduct from "./Components/PrincipalProduct";
import SProducts from "./Components/SProducts";

function App() {
  const [onBlack, setOnBlack] = useState(false);

  const [productOne, setProductOne] = useState(true);
  const [productTwo, setProductTwo] = useState(false);
  const [productThree, setProductThree] = useState(false);
  const [productFour, setProductFour] = useState(false);
  const [productFive, setProductFive] = useState(false);

  const changeOnBlack = () => {
    !onBlack ? setOnBlack(true) : setOnBlack(false);
  };

  const onChangeProduct = () => {
    if (productOne) {
      setProductOne(false);
      setProductTwo(true);
    }
    if (productTwo) {
      setProductTwo(false);
      setProductThree(true);
    }
    if (productThree) {
      setProductThree(false);
      setProductFour(true)
    }
    if (productFour) {
      setProductFour(false)
      setProductFive(true)
    }
    if (productFive) {
      setProductFive(false)
      setProductOne(true)
    }
  };

  return (
    <>
      <nav>
        <IconBurger changeOnBlack={changeOnBlack} onBlack={onBlack} />
        <Navegation />
      </nav>

      <main className={`${onBlack && "isActive"}`}>
        <SProducts onBlack={onBlack} />
        <PrincipalProduct
          onChangeProduct={onChangeProduct}
          productOne={productOne}
          productTwo={productTwo}
          productThree={productThree}
          productFour={productFour}
          productFive={productFive}
        />
      </main>
    </>
  );
}

export default App;
