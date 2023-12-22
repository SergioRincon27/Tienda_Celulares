import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
//import { Link } from "react-router-dom";
import LOGO from "images/LOGO.png";
import { useNavigate } from "react-router-dom";



export function Header() {
  const navigate = useNavigate();
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >

      </button>
      <div className="logo">
        <img src={LOGO} alt="logo" width="150" />
      </div>

      <ul>
        <li>
        <button onClick={() => {navigate("/");}} 
      >
       INICIO
      </button>
        </li>
        <li>
        <button
        onClick={() => {
          navigate("/productos");
        }}
      >
      PRODUCTOS
      </button>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
      <button
        onClick={() => {
          navigate("/productos");
        }}
      ></button>
    </header>
  );
};
