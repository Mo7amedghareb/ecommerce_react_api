import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
export default function Productdetails() {
    const apiurl = "https://fakestoreapi.com/products"
    const [product, setproduct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`${apiurl}/${params.productid}`)
            .then((res) => res.json())
            .then((product) => setproduct(product))
    }, []);

    return (
        <>
            <div className="details">
                <img style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '50px', marginBottom: '50px', display: 'flex' }} src={product.image}></img>
                <h2 >product Details: {product.title}</h2>
                <h1 >{product.category}</h1>
                <h5 >{product.description}</h5>
                <h3 >Price : {product.price}$</h3>
            </div>

        </>
    )
}