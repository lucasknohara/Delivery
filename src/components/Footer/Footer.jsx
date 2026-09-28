function Footer() {
    return (
        <footer className="bg-gray-900 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex gap-6 text-sm">
                    <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-700 pb-8 md:flex-row">
                        <a
                            href="https://www.linkedin.com/in/lucas-kaoru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 transition hover:text-white"
                        >
                            LinkedIn
                        </a>

                        <a href="lucasnohara51@gmail.com" className="text-gray-300 transition hover:text-white">
                            GourmetOn@gmail.com
                        </a>
                    
                        <a href="#termos" className="text-gray-300 transition hover:text-white">Termos de Uso</a>
                    </div>

                    <div className="pt-6 text-center text-sm text-gray-400">
                        <p> Copyright © 2026 GourmetOn. Todos os direitos reservados.</p>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer