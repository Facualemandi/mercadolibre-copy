import { useState } from "react";
import Entrega from "./Components/Entrega";
import IconBurger from "./Components/IconBurger";
import MenuLateral from "./Components/MenuLateral";
import Navegation from "./Components/Navegation";
import PrincipalProduct from "./Components/PrincipalProduct";
import SProducts from "./Components/SProducts";
import Stock from "./Components/Stock";

function App() {
  const [onBlack, setOnBlack] = useState(false);

  const [menu, setMenu] = useState(false)

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
      setProductFour(true);
    }
    if (productFour) {
      setProductFour(false);
      setProductFive(true);
    }
    if (productFive) {
      setProductFive(false);
      setProductOne(true);
    }
  };

  const openMenu = () => {
    menu ? setMenu(false) : setMenu(true);
    
  }

  return (
    <>
      <nav>
        <IconBurger
          changeOnBlack={changeOnBlack}
          openMenu={openMenu}
          onBlack={onBlack}
        />
        <Navegation />
        <MenuLateral menu={menu} onBlack={onBlack}/>
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
          onBlack={onBlack}
        />
        <Entrega onBlack={onBlack}/>
        <Stock/>
      </main>
    </>
  );
}

export default App;
