import {ProductList} from "../ProductList/ProductList";

const products = [
    { id: 1, name: 'Product 1', price: 100  , imageURL: 'https://picsum.photos/200/300' },
    { id: 2, name: 'Product 2', price: 200, imageURL: 'https://picsum.photos/200/300' },
    { id: 3, name: 'Product 3', price: 300, imageURL: 'https://picsum.photos/200/300' },
    { id:4, name: 'Product 4', price: 400 , imageURL: "https://picsum.photos/200/300\n"},

];



export const EshopPage = () => {

    return (
        <main>
            <h1>
                Eshop
            </h1>
            <ProductList data={products}/>
        </main>
    )
}
