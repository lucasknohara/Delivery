function Contact() {
    return (
        <section id="contato" className="bg-orange-50 px-6 py-20">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Entre em contato
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-gray-600">
                    Envie sua mensagem para o GourmetOn.
                </p>

                <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
                    <div className="text-left">
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Seu e-mail
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    <div className="text-left">
                        <label
                            htmlFor="mensagem"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Sua mensagem
                        </label>

                        <textarea
                            id="mensagem"
                            placeholder="Digite sua mensagem..."
                            rows="5"
                            className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact