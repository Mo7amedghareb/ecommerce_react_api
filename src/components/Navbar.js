import { Link } from "react-router-dom";

export default function () {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <img className="navbar-brand" src="https://logo.com/image-cdn/images/kts928pd/production/0089b7ae1ed394f041c5f7929e111c11e8eafe4d-424x421.png?w=1080&q=72&fm=webp" style={{width:'120px' ,height:'100px'}}></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}