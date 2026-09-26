import AboutCard from "./AboutCard/AboutCard.jsx"

function About() {
    return (
        <section id="sobre" className="bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Sobre</h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">Como cada sistema dá um tempero a mais na sua vida</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <AboutCard titulo="Entrega rápida" descricao="Receba seu pedido rápido sem complicação" />
                    <AboutCard titulo="Variedade" descricao="Encontre diferentes restaurantes" />
                    <AboutCard titulo="Pagamento fácil" descricao="Pague de forma simples e segura" />
                </div>
            </div>
        </section>
    )
}

export default About