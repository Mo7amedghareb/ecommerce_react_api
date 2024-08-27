import { Link } from "react-router-dom";

export default function Product(Props) {
    const {product}=Props;
    return (
        <>
            <div class="card" style={{ marginBottom:'50px'}}>
                <img id="prdimage" src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 style={{textAlign:'center'}} class="card-title">{product.title}</h5>
                    
                </div>
                <Link style={{width:'fit-content',marginLeft:'auto',marginRight:'auto',marginBottom:"20px"}} to={`/product/${product.id}`} class="btn btn-primary">Details</Link>
            </div>
        </>
    )
}