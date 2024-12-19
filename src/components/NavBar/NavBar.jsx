import {Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">El mundo de papel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Todos los productos</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category/celular">Celulares</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category/tablet">Tablets</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category/computer">Computadoras</Link>
                    </li>
                </ul>
                <CartWidget cartCount={1}/>
                </div>
            </div>
        </nav>
    )
}