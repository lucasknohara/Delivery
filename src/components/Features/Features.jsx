import FeaturesCard from "./FeaturesCard/FeaturesCard.jsx"

function Features() {
    return (
        <section id="funcionalidades" className="bg-orange-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Funcionalidades</h2>
                </div>

                <p className="mx-auto mt-4 max-w-2xl text-gray-600 pb-10">Encontre suas comidas favoritas, use filtros e tenha mais facilidade na hora de fazer seu pedido</p>
            </div>
            

            

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <FeaturesCard titulo="Buscar comidas" descricao="Encontrar pratos pelo nome ou tipo de comida" />
                <FeaturesCard titulo="Filtros" descricao="Filtre por categoria, preço ou preferência" />
                <FeaturesCard titulo="Acompanhar pedido" descricao="Acompanhe o status do seu pedido" />
                <FeaturesCard titulo="Favoritos" descricao="Salve restaurantes ou pratos que você gostou" />
            </div>
        </section>
    )
}

export default Features