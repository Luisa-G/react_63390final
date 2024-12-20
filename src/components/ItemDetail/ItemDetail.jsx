import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../hooks/useCart"

export default function ItemDetail({id, name, img, description, category, price, stock}) {

    const {addItem, isInCart} = useCart()

    const handleAdd = (count) => {
        const productToAdd = {
            id, name, price, quantity: count
        }
        addItem(productToAdd)
    }
    return (
        <div className="container">
            <h2>{name}</h2>
            <div className="card">
                <img src={img} style={{width:300}} className="card-img-top" alt={name} />
                <div className="card-body">
                    <p>{description}</p>
                    <p>Categoría: {category}</p>
                    <p>Precio: $ {price}</p>
                    <p>Disponible: {stock}</p>
                </div>

                {isInCart(id) ? (
                    <Link to="/cart" >Finalizar compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleAdd}/>
                )}
            </div>
        </div>
    )
}

