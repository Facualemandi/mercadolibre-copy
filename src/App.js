import { useState } from "react";
import IconBurger from "./Components/IconBurger";
import Navegation from "./Components/Navegation";
import SProducts from "./Components/SProducts";

function App() {
  const [onBlack, setOnBlack] = useState(false);

const changeOnBlack = () => {
    !onBlack ? setOnBlack(true): setOnBlack(false)

    
}


  return (
    <>
     <nav>
       <IconBurger  changeOnBlack={changeOnBlack} onBlack={onBlack}/>
       <Navegation />
     </nav>
    
       <main className={`${onBlack && 'isActive'}`}>
               <SProducts onBlack={onBlack}/>
       </main>
    </>
  );
}

export default App;
