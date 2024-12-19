import { useState } from "react"


export default function ItemCount({initialValue=1, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initialValue)
    
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad => cantidad - 1)
        }
    }

    const sumar = () => {
        if (stock > cantidad) {
            setCantidad(cantidad => cantidad + 1)
        }
        
    }
    
    return (
        <>
        <h1>{cantidad}</h1>
        <button onClick={restar}>-</button>
        <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>    
        <button onClick={sumar}>+</button>                
        </>
    )
}

