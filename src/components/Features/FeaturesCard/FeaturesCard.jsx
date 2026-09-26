function FeaturesCard(props) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">{props.titulo}</h3>
            <p className="mt-3 leading-relaxed text-gray-600">{props.descricao}</p>
        </div>
    )
}

export default FeaturesCard