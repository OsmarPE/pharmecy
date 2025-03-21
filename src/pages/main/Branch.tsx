import Banner from "@/components/main/Banner";
import Maps from "@/components/main/Maps";

export default function Branch() {
  return (
    <>
      <Banner title="Sucursales" />
      <main className="main-branch">
        <div className="container">
          <div className="main-branch__body">
            <p className="main-branch__text">Actualmente contamos con 27 sucursales en la Península de Yucatán, así como un Centro de Distribución en la Ciudad de Mérida.</p>
            <p className="main-branch__text">Para ver dirección, horarios y teléfonos de cualquiera de nuestras sucursales haga click en el marcador correspondiente en el mapa.</p>
            <section className="main-branch__grid">
              <div className="main-branch__map">
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
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
