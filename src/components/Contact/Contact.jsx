function Contact() {
    return (
        <section id="contato" className="bg-orange-50 px-6 py-20">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Contato</h2>

                <p className="mx-auto mt-4 max-w-xl text-gray-600">Cadastre seu e-mail e fique por dentro das novidades do GourmetOn</p>
            </div>

            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
                <div className="flex-1 text-left">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Seu Email</label>
                    
                </div>
                
                <input id="email" type="email" placeholder="Digite seu e-mail" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
                <button type="submit" className="self-end rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">Enviar</button>
            </form>
        </section>
    )
}

export default Contact