import { Product as ProductType } from "@/lib/types/product";
import { Link } from "react-router-dom";

interface Props {
    product: ProductType;
}

export default function Product({ product }: Props) {

    const { name, priceBase, priceDiscount, category , id} = product;

    const priceDiscountFormat = priceDiscount ? Number(priceDiscount) : 0
    const imagen = 'imagen'

    const link = id.toString();
    return (
        <Link to={link} className="product" viewTransition>
            <figure className="product__figure">
                {
                    imagen ? (
                        <img className="product__image" src="https://www.emeritafarmacias.com/wp-content/uploads/8904103340372.png" alt={`image of ${imagen}`} />
                    ) : (
                        <div className="product__image-sckeleto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                        </div>
                    )
                }
                <div className="product__link">Ver detalles</div>
            </figure>
            <div className="product__body">
                <Link to={link} className="product__title" viewTransition>{name}</Link>
                <p className="product__category">{category?.name}</p>
                <div className="product__prices">
                    {priceDiscountFormat !== 0 && <p className="product__price-discount">${priceDiscountFormat}</p>}
                    <p className="product__price">${priceBase}</p>
                </div>
            </div>
        </Link>
    )
}
