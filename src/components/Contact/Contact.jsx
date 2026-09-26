function Contact() {
    return (
        <section id="contato">
            <h2>Contato</h2>

            <p>Cadastre seu e-mail e fique por dentro das novidades do GourmetOn</p>

            <form>
                <label htmlFor="email">Digite seu e-mail</label>
                <input id="email" type="email"/>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact