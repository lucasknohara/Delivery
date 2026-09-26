function TestimonialsCard(props) {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{props.nome}</h3>


                <span className="text-sm font-medium text-orange-500">{props.avaliacao}</span>
            </div>
            

            <p className="leading-relaxed text-gray-600">{props.texto}</p>
        </div>
    )
}

export default TestimonialsCard