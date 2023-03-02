
import styles from "./Navbar.module.css";


import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  let numero = 0;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <img
          src="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677322224/react/1280px-Arduino_Logo_Registered.svg_vlqkca.png"
          alt=""
          style={{ width: "5%", objectFit: "cover" }}
        />

        <ul className={styles.containerList}>
          <li><a href={'/'}>Módulos</a></li>
          <li><a href={'/'}>Sensores</a></li>
          <li><a href={'/'}>Accesorios</a></li>
        </ul>
        <CartWidget numero={numero} />
      </div>
     
    </div>
  );
};

export default Navbar;
