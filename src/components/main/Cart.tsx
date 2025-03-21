
interface Props{
    setshowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Cart({setshowCart}: Props) {
    return (
        <div className="cart">
            <h2 className="cart__header">
                <p>Carrito</p>
                <button className="cart__close" onClick={() => setshowCart(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
            </h2>
            <div className="cart__products">
                <div className="cart__item">
                    <img className="cart__image" src="https://www.emeritafarmacias.com/wp-content/uploads/8904103340372.png" alt="" />
                    <div className="cart__body">
                        <div className="cart__top">
                            <h5 className="cart__title">REBLESS 15MG C 28 COMPRIMIDOS RIVAROXABAN</h5>
                            <button className="cart__remove">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                            </button>
                        </div>
                        <div className="cart__bottom">
                            <p className="cart__price">$650.00 <span className="cart__price-count">x2</span></p>
                            <div className="cart__action">
                                <button className="cart__action-item cart__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </button>
                                <div className="cart__action-item cart__number">2</div>
                                <button className="cart__action-item cart__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus"><path d="M5 12h14" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="cart__footer">
                <p className="cart__footer-text">Subtotal</p>
                <h5 className="cart__footer-price">$650.00</h5>
            </div>
        </div>
    )
}
