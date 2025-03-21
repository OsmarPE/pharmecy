import Banner from "@/components/main/Banner";
import Product from "@/components/main/Product";
import { categories } from "@/lib/helper";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <Banner title="Productos" />
      <main className="main">
        <div className="container">
            <div className="main__body">
                <aside className="aside">
                    <nav className="aside__nav">
                        <h2 className="aside__subtitle"> Categorías</h2>
                        <ul className="aside__list">
                            {
                                categories.map((category, index) => (
                                    <li key={index} className="aside__item"><Link className="aside__link" to={category.href}>{category.name}</Link></li>
                                ))
                            }
                        </ul>
                        
                    </nav>
                </aside>
                <section className="main__products">
                    <div className="main__pages">
                        <a className="main__page" href="#">Inicio</a>
                        <p>/</p>
                        <a className="main__page active" href="#">Medicamentos</a>
                    </div>
                    <div className="main__grid">
                        <Product />
                        <Product />
                        <Product />
                   
                        <article className="product">
                            <figure className="product__figure">
                                <div className="product__image-sckeleto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                                </div>
                                <a className="product__link" href="#">Ver detalles</a>
                            </figure>
                            <div className="product__body">
                                <a href="#" className="product__title">REBLESS 15MG C 28 COMPRIMIDOS RIVAROXABAN</a>
                                <p className="product__category">Medicamentos</p>
                                <p className="product__price">$650.00</p>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    </main>
    </div>
  )
}
