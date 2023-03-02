import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import styles from "./Components/Navbar/Navbar.module.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a Arduino Store"} />
      
      <ul className={styles.containerListProduct}>
        <li><ProductCard title={"Arduino Uno"} price={3500} isRed={false} image="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677321987/react/Arduino-uno-board_ry1edh.jpg" /></li>
        <li><ProductCard title={"Arduino Due"} price={8200} isRed={false} image="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677322037/react/Arduino-Due_ibynfe.jpg" /></li>
        <li><ProductCard title={"Arduino Leonardo"} price={4100} isRed={false} image="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677322056/react/Arduino-Leonardo_wvrc5w.jpg" /></li>
      </ul>
      
      <ul className={styles.containerListProduct}>
        <li><ProductCard title={"Arduino Nano"} price={3000} isRed={false} image="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677322016/react/Arduino-nano_f06c4z.jpg" /></li>
        <li><ProductCard title={"Arduino Zero"} price={12100} isRed={false} image="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677328845/react/Arduino-Zero_qwjvfu.jpg" /></li>
        <li><ProductCard title={"Arduino Robot"} price={21500} isRed={false} image="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677322079/react/Arduino-Robot_so5j18.jpg" /></li>
        
      </ul>
      
      <Footer/>
      
    </div>
  );
}

export default App;

