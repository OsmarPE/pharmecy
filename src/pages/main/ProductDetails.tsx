import { Button } from "@/components/ui/button";
import { ChevronLeft, MoveLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div className="product-details">
        <div className="container">
            <Link to={'/products'} viewTransition className="mb-6 group/back text-gray-400 text-sm flex items-center gap-1 transition-colors duration-300 hover:text-primary ">
                <ChevronLeft className="transition-all group-hover/back:-translate-x-1 duration-300" />   
                Regresar
            </Link>
            <div className="product-details__body">
                <div className="product-details__left">
                    <img className="product-details__image" src="https://www.emeritafarmacias.com/wp-content/uploads/8904103340372.png" alt="" />
                </div>         
                <div className="product-details__right">
                    <h2 className="product-details__title">REBLESS 15MG C 28 COMPRIMIDOS RIVAROXABAN</h2>
                    <p className="product-details__price"> 
                        <span className="product-details__price--discount">$620.00</span>  
                        $650.00</p>
                    <div className="product-details__actions">
                        <div className="product-details__control">
                            <button className="product-details__control-item">+</button>
                            <div className="product-details__control-item">1</div>
                            <button className="product-details__control-item">-</button>
                        </div> 
                        <Button className="flex-1 h-12">Agregar al carrito <ShoppingCart  /> </Button> 
                    </div>
                    <div className="product-details__text">
                        <p className="product-details__sku">
                            SKU: 9203123
                        </p>
                        <div className="product-details__category">
                            <span>Categoria:</span>
                            <a className="product-details__category__link" href="#">Medicamentos</a>
                        </div>
                        <div className="product-details__code">
                            <span>Codigo:</span>
                         </div>
                    </div>

                    <div className="product-details__socials">
                        <Link to="#" className="product-details__social">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </Link>
                        <Link to="#" className="product-details__social">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </Link>
                        <Link to="#" className="product-details__social">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </Link>
                        <Link to="#" className="product-details__social">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
