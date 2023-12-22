import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import { Header } from "./Header";
import { Carrito } from "./Carrito";
const routes = [{path:"/",Component:Inicio,name:"/"},{path:"/productos",Component:ProductosList,name:"/productos"},{path:"/producto/:id",Component:ProductosDetalles,name:"/producto/:id"}]
 
export default function Page() {
  return (
    <section>
      <BrowserRouter>
      <Header/>
      <Carrito></Carrito>
      <Routes>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} element={<Component />}></Route>
        ))}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
    </section>
  );
}
