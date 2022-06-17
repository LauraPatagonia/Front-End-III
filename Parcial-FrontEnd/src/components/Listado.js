import React from "react";
import Item from "./Item";
import data from "./data.json";
import estilos from "./Listado.module.css";

export default function Listado({ setCantidad }) {
  return (
    <div className={estilos.container}>
      {data.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
          setCantidad={setCantidad}
        ></Item>
      ))}
    </div>
  );
}
