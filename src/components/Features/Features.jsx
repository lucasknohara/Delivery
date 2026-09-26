import FeaturesCard from "./FeaturesCard/FeaturesCard.jsx"

function Features() {
    return (
        <section id="funcionalidades">
            <h2>Funcionalidades</h2>

            <p>Encontre suas comidas favoritas, use filtros e tenha mais facilidade na hora de fazer seu pedido</p>

            <div>
                <FeaturesCard titulo="Buscar comidas" descricao="Encontrar pratos pelo nome ou tipo de comida" />
                <FeaturesCard titulo="Filtros" descricao="Filtre por categoria, preço ou preferência" />
                <FeaturesCard titulo="Acompanhar pedido" descricao="Acompanhe o status do seu pedido" />
                <FeaturesCard titulo="Favoritos" descricao="Salve restaurantes ou pratos que você gostou" />
            </div>
        </section>
    )
}

export default Features