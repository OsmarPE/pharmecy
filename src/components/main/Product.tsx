import { Link } from "react-router-dom";

export default function Product() {

    const link = `/1`;
    return (
        <Link to={link} className="product" viewTransition>
            <figure className="product__figure">
                <img className="product__image" src="https://www.emeritafarmacias.com/wp-content/uploads/8904103340372.png" alt="" />
                <div className="product__link">Ver detalles</div>
            </figure>
            <div className="product__body">
                <Link to={link} className="product__title" viewTransition>REBLESS 15MG C 28 COMPRIMIDOS RIVAROXABAN</Link>
                <p className="product__category">Medicamentos</p>
                <p className="product__price">$650.00</p>
            </div>
        </Link>
    )
}
