import { useEffect, useState } from "react"

function Recipes() {
    const [comidas, setComidas] = useState([])

    useEffect(() => {
        async function buscarComidas() {
            const response = await fetch(
                "https://api.spoonacular.com/recipes/random?number=5&apiKey=9313d597cadf4b26bba133d4f3f34c01"
            )

            const data = await response.json()

            setComidas(data.recipes)
        }

        buscarComidas()
    }, [])

    return (
        <section className="bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Algumas opções para você
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Confira algumas das receitas encontradas pelo GourmetOn.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {comidas.map((comida) => (
                        <div
                            key={comida.id}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <img
                                src={comida.image}
                                alt={comida.title}
                                className="h-52 w-full object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {comida.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Recipes