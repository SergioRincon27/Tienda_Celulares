import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (
    <>
    {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
          <p className="nuevo">Nuevo</p>
          <div className="tamano">
            <select placeholder="Tamaño" >
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
            </select>
            <p>Cantidad</p>
          </div>
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
          }
          <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
          <div className="description">
          <p><b>Descripción: </b> 1. BOGOTÁ Nuestro horario de atención es de lunes a sábado de 9:00 am - 7:00 pm. ¡¡Te esperamos!! 2. RESTO DEL PAÍS Recibe tu producto a través de mercado envíos, eligiendo la opción "envío normal a mi domicilio" durante el proceso de compra. Ahora puedes comprar tu producto y recibir hoy mismo en Bogotá, selecciona envió MERCADO FLEX. (Anunciamos el tiempo estimado para la entrega, te esperaremos máximo 5 minutos para la entrega, si por alguno motivo no podemos entregar tu producto lo entregaremos el día siguiente con un cobro adicional de $15.000 o puedes recogerlo en nuestra tienda física). </p>
          <br/>
          <p> Disfruta de tu compra hoy mismo, con MEGATIENDAVIRTUAL y MERCADOFLEX Cualquier inquietud, no dudes en usar la sección de preguntas, en el icono de Whatsapp. - Importante: Algunos productos pueden tener opción para distintos colores, recuerda elegir el color que quieres, antes de hacer clic en comprar. Garantía del vendedor: 12 meses</p>
          </div>
          
        </div>
   
    }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
