import type {IProductList} from "../../../types";
import {ProductCard} from "../ProductCard/ProductCard";


interface IProductListProps {
    data: IProductList;
}

export const ProductList = ({data}: IProductListProps) => {

    return (
        <section>
            {
                data.map((product) =>{
                    return (
                        <ProductCard key={product.id} {...product}/>
                    )

                })
            }
        </section>
    )
}
