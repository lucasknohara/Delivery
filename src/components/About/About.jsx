import AboutCard from "./AboutCard/AboutCard.jsx"

function About() {
    return (
        <section id="sobre">
            <h1>Sobre</h1>

            <p>Como cada sistema dá um tempero a mais na sua vida</p>
            
            <div>
                <AboutCard titulo="Entrega rápida" descricao="Receba seu pedido rápido sem complicação" />
                <AboutCard titulo="Variedade" descricao="Encontre diferentes restaurantes" />
                <AboutCard titulo="Pagamento fácil" descricao="Pague de forma simples e segura" />
            </div>
        </section>
    )
}

export default About