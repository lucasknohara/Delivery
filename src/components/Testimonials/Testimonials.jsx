import TestimonialsCard from "./TestimonialsCard/TestimonialsCard.jsx"

function Testimonials() {
    return (
        <section id="depoimentos">
            <h2>Depoimentos</h2>

            <p>Veja o que nossos clientes estão dizendo sobre a experiência com o GourmetOn</p>

            <div>
                <TestimonialsCard nome="Lucas" texto='"Meu pedido chegou muito rápido e a comida estava excelente!"' avaliacao="10/10" />
                <TestimonialsCard nome="Pedro" texto='"Gostei muito da variedade de restaurantes e da facilidade para fazer o pedido."' avaliacao="10/10" />
                <TestimonialsCard nome="Sophia" texto='"O aplicativo é simples de usar e acompanhar o pedido ficou muito fácil."' avaliacao="10/10" />
            </div>
        </section>
    )
}

export default Testimonials