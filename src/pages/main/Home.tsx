import Carrucel from "@/components/main/Carrucel";
import Hero from "@/components/main/Hero";
import Maps from "@/components/main/Maps";
import '@/App.css'
export default function Home() {
    return (
        <>
            <Hero />
            <section className="news">
                <div className="container">
                    <div className="news__body">
                        <h2 className="news__title title title--black ">Novedades</h2>
                        <Carrucel />
                    </div>
                </div>
            </section>
            <section className="products">
                <div className="container">
                    <div className="products__body">
                        <h2 className="title title--black">Productos</h2>
                        <p className="products__text">Conoce nuestra amplia variedad de productos</p>
                    </div>
                    <div className="products__gallery">
                        <article className="product-main product-main--medications">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">Medicamentos</h2>
                            <div className="product-main__body">
                                <p className="product-main__text">De patente y genéricos</p>
                            </div>
                        </article>
                        <article className="product-main product-main--baby">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">Bebés</h2>
                            <div className="product-main__body">
                                <ul className="product-main__list">
                                    <li className="product-main__item">Fórmulas infantiles</li>
                                    <li className="product-main__item">Pañales</li>
                                    <li className="product-main__item">Papillas</li>
                                    <li className="product-main__item">Higiene</li>
                                    <li className="product-main__item">Biberones</li>
                                    <li className="product-main__item">Lactancia</li>
                                </ul>

                            </div>
                        </article>
                        <article className="product-main product-main--dermatologists">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">Demartologicos</h2>
                            <div className="product-main__body">
                                <p className="product-main__text">Cuidado de la piel</p>
                            </div>
                        </article>
                        <article className="product-main product-main--warning">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">Cuidado personal</h2>
                            <div className="product-main__body">
                                <p className="product-main__text">Higiene y perfumeria</p>
                            </div>
                        </article>
                        <article className="product-main product-main--vitamins">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">VITAMINAS, SUPLEMENTOS Y PRODUCT-mainOS NATURISTAS</h2>

                        </article>
                        <article className="product-main product-main--material">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">Material de curación</h2>
                            <div className="product-main__body">
                                <p className="product-main__text">Y de uso hospitalario</p>
                            </div>
                        </article>
                        <article className="product-main product-main--cheminal">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">Product-mainos quimicos envasados</h2>
                        </article>
                        <article className="product-main product-main--equipment">
                            <div className="product-main__bg"></div>
                            <h2 className="product-main__title">Equipos especiales</h2>
                            <div className="product-main__body">
                                <ul className="product-main__list">
                                    <li className="product-main__item">Nebulizadores</li>
                                    <li className="product-main__item">Baumanómetros</li>
                                    <li className="product-main__item">Medidores de glucosa</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="branch">
                <div className="container">
                    <div className="branch__body">
                        <h2 className="title title--black branch__title ">Sucursales</h2>
                        <div className="branch__grid">
                        <div className="branch__map">
                                <Maps />
                            </div>
                            <aside className="contacts">
                                <ul className="contacts__list">
                                    <li className="contacts__item">
                                        <a className="contacts__btn" href="#">
                                            <h5 className="contacts__subtitle">Altabrisa</h5>
                                            <div className="contacts__numbers">
                                                <p className="contacts__number"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Tel: (999) 306-93-75</p>
                                                <p className="contacts__number"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>Tel: (999) 306-93-75</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contacts__item">
                                        <a className="contacts__btn" href="#">
                                            <h5 className="contacts__subtitle">Altabrisa</h5>
                                            <div className="contacts__numbers">
                                                <p className="contacts__number"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Tel: (999) 306-93-75</p>
                                                <p className="contacts__number"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>Tel: (999) 306-93-75</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contacts__item">
                                        <a className="contacts__btn" href="#">
                                            <h5 className="contacts__subtitle">Altabrisa</h5>
                                            <div className="contacts__numbers">
                                                <p className="contacts__number"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Tel: (999) 306-93-75</p>
                                                <p className="contacts__number"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>Tel: (999) 306-93-75</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                           
                        </div>
                
                    </div>
                </div>
            </section>
        </>
    )
}
