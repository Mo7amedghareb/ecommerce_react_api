import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductsList() {
    const apiurl = "https://fakestoreapi.com/products"
    const [products, setproducts] = useState([]);
    const [category,setcategory]=useState([]);

    const getproducts=()=>{
        fetch(apiurl)
            .then((res) => res.json())
            .then((data) => setproducts(data))
    }

    const getcategories=()=>{
        fetch(`${apiurl}/categories`)
            .then((res) => res.json())
            .then((data) => setcategory(data))
    }

    const getcategoryinproduct=(catname)=>{
        fetch(`${apiurl}/category/${catname}`)
            .then((res) => res.json())
            .then((data) => setproducts(data))
    }

    useEffect(() => {
        getproducts();
        getcategories();
    }, []);

    return (
        <>
            <h2 className="text-center" style={{marginTop:'20px' ,marginBottom:'20px'}}>Products</h2>
            <div  className="container">
                <button className="btn btn-info" onClick={()=>{
                    getproducts();
                }}>
                    All
                </button>
                {
                    category.map((cat)=>{
                        return<button className="btn btn-info" key={cat} onClick={()=>{
                            getcategoryinproduct(cat);
                        }}>{cat}</button>
                    })
                }
                <div className="row">
                    {products.map((product) => {
                        return (
                            <>
                                <div className="col-3" key={product.id}>
                                    <Product product={product}/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}