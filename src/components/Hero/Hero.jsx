import imagem from "../../../public/ChurrascoDelicioso.jpg"

function Hero() {
    return (
        <section id="home" className="min-h-screen bg-orange-50 px-6 pt-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                <div>
                    <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">Deixe sua vida mais gostosa com GourmetOn</h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">Um aplicativo que não entrega apenas comida, mas deixa a vida de cada cliente com um tempero especial</p>
                    <button className="mt-8 rounded-full bg-orange-500 px-8 py-4font-bold text-white shadow-lg transitionhover:bg-orange-600 hover:scale-105">Tempere sua vida!</button>
                </div>

                <div>
                    <img src={imagem} alt="Foto inicio" className="h-[450px] w-full max-w-xl rounded-3xl object-cover shadow-2xl"></img>
                </div>
            </div>
        </section>
    )
}

export default Hero