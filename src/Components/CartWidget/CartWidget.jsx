import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = ({numero}) => {
  
  return (
    <div>
      <BsFillCartCheckFill color="white  " size={40} />
      <span>&nbsp;&nbsp;{numero}&nbsp;&nbsp;Ítems&nbsp;</span>
    </div>
  );
};

export default CartWidget;
