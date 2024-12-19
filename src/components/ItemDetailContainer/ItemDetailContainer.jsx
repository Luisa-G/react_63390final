import { useEffect, useState } from "react"
import { getProductByID } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


export default function ItemDetailContainer() {

    const [product, setProduct] = useState ({})
    const {productId} = useParams()

    useEffect(() => {
        getProductByID(productId)
            .then((resp) => {
                setProduct(resp)
            })
    }, [productId])



    return (
        <div>
            <h2>Detalle del producto</h2>
            <hr />
            <ItemDetail {...product} />
        </div>
    )
}