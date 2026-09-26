function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white/90 shadow-md backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#home" className="text-2xl font-bold text-orange-500">GourmetOn</a>

                <div className="flex items-center gap-8">
                    <a href="#home" className="font-medium text-gray-700 transition hover:text-orange-500">Início</a>
                    <a href="#sobre" className="font-medium text-gray-700 transition hover:text-orange-500">Sobre</a>
                    <a href="#funcionalidades" className="font-medium text-gray-700 transition hover:text-orange-500">Funcionalidades</a>
                    <a href="#depoimentos" className="font-medium text-gray-700 transition hover:text-orange-500">Depoimentos</a>
                    <a href="#contato" className="font-medium text-gray-700 transition hover:text-orange-500">Contato</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar