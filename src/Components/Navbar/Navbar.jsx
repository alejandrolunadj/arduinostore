
import styles from "./Navbar.module.css";


import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 0;
  return (
    <div>
      <div className={styles.containerNavbar}>
      <Link to="/" style={{ width: "5%"}}>
        <img
          src="https://res.cloudinary.com/dtjfv5ug6/image/upload/v1677322224/react/1280px-Arduino_Logo_Registered.svg_vlqkca.png"
          alt=""
          style={{ width: "100%", objectFit: "cover" }}
        />
	</Link>

        <ul className={styles.containerList}>
          <Link to="/"  className={styles.navbarItem}>Todos</Link>
          <Link to="/category/basico"  className={styles.navbarItem}>Báscios</Link>
          <Link to="/category/avanzado"  className={styles.navbarItem}>Avanzados</Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
