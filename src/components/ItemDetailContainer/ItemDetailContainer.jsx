import { useEffect, useState } from "react"
import { getProductByID } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"


export default function ItemDetailContainer() {

    const [product, setProduct] = useState ({})
    const {productId} = useParams()

    // useEffect(() => {
    //     getProductByID(productId)
    //         .then((resp) => {
    //             setProduct(resp)
    //         })
    // }, [productId])

    useEffect(()=>{
        getDoc(doc(db, 'products', productId))
        .then((querySnapshot)=>{
            const prod = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(prod)
        })
        .catch((err)=>{
            console.log(err)
        })
    })



    return (
        <div>
            <h2>Detalle del producto</h2>
            <hr />
            <ItemDetail {...product} />
        </div>
    )
}