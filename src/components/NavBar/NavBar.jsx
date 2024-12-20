import {Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


export default function NavBar({title}) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Todos los productos</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category/cuaderno">Cuadernos</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category/pluma">Plumas</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category/herramienta">Herramientas</Link>
                    </li>
                </ul>
                <CartWidget cartCount={1}/>
                </div>
            </div>
        </nav>
    )
}