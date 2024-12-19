import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(()=>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])

    console.log (products)

    return (
        <div>
            <h2>Te encuentras en... ¡El mundo de papel!</h2>
            <ItemList products={products} />
            <hr />
        </div>
    )
}