import Banner from "@/components/main/Banner";
import Product from "@/components/main/Product";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category.services";
import CategorySkeleton from "@/components/main/skeleton/CategorySkeleton";
import ProductSkeleton from "@/components/main/skeleton/ProductSkeleton";
import { getProducts } from "@/services/product.services";


export default function Products() {
  
  const { data:categories , isLoading} = useQuery({ queryKey: ['categories'], queryFn: getCategories})
  const { data:products , isLoading:isLoadingProducts} = useQuery({ queryKey: ['products'], queryFn: getProducts})
  return (
    <div>
      <Banner title="Productos" />
      <main className="main">
        <div className="container">
            <div className="main__body">
                <aside className="aside">
                    <nav className="aside__nav">
                        {isLoading ? (
                          <CategorySkeleton />
                        ) : (
                          <>
                            <h2 className="aside__subtitle">Categorías</h2>
                            <ul className="aside__list">
                                {categories?.map((category, index) => (
                                    <li key={index} className="aside__item">
                                      <Link className="aside__link" to={category.name}>{category.name}</Link>
                                    </li>
                                ))}
                            </ul>
                          </>
                        )}
                    </nav>
                </aside>
                <section className="main__products">
                    <div className="main__pages">
                        <a className="main__page" href="#">Inicio</a>
                        <p>/</p>
                        <a className="main__page active" href="#">Medicamentos</a>
                    </div>
                    {isLoadingProducts ? (
                      <ProductSkeleton />
                    ) : (
                      <div className="main__grid">
                        {products?.map((product, index) => (
                          <Product key={index} product={product} />
                        ))}
                      </div>
                    )}
                </section>
            </div>
        </div>
    </main>
    </div>
  )
}
