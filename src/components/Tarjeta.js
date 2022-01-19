import "./Tarjeta.css"

const Tarjeta = ({ 
  titulo, precio, imagen, 
  envio, condicion, color, descuento }) => {
  
  const convertirAPrecio = num => `$ ${num}`

    
  return (
    // puedo usar expresiones pero no puedo usar sentencias 
    <article className={color}>
      <h2>{titulo}</h2>
      <h3>{convertirAPrecio(precio)}</h3>
      <img src={imagen} />
      
      {envio === true && <p>Envio gratuito</p>}

      <p>{condicion === "new" ? "Nuevo" : "Usado"}</p>


      
    </article>
  )
}

export default Tarjeta;
