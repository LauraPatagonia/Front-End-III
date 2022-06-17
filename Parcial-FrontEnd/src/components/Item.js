import { useState } from "react";
import estilos from "./Item.module.css";

export default function Item({ producto, setCantidad }) {
  const [stock, setStock] = useState([producto.stock]);

  const handlerStock = () => {
    if (stock > 0) {
      setStock((prevState) => prevState - 1);
      setCantidad((prevState) => prevState + 1);
    }
  };

  return (
    <div className={estilos.producto}>
      <h3 className={estilos.titulo}>{producto.producto.nombre}</h3>
      <p>{producto.producto.descripcion}</p>
      <h5>
        En stock:{" "}
        {stock === 0 ? <span className={estilos.agotado}>Agotado</span> : stock}{" "}
      </h5>
      <button
        className={stock > 0 ? estilos.btn : estilos.disabled}
        onClick={() => handlerStock()}
      >
        {stock > 0 ? "Comprar" : "Sin stock"}
      </button>
    </div>
  );
}
