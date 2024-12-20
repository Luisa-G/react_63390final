import { memo } from "react";
import Item from "../Item/Item";


function ItemList({products}) {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 col-sm-6">
                        <Item  product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(ItemList)

