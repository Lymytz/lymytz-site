const ProductFront = () => {
    return (
        <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mt-15
        rounded-2xl ">
            {/* Image de fond nette */}
            <div className="absolute inset-0">
                <img
                    src="/images/page_app_capture.webp"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Voile sombre */}
                <div className="absolute inset-0 [background:oklch(0.424_0.199_265.638_/_0.65)]"></div>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-96 h-96 rounded-full blur-3xl bg-white/10 animate-spotlight"></div>
                </div>
            </div>

            {/* Contenu par-dessus */}
            <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">Vous avez une vision pour la gestion de vôtre entreprise</h1>
                <p className="text-lg font-medium text-red-700">
                    {'<--'} Notre approche est axée sur la compréhension de vos besoins et la fourniture
                    de solutions pratiques. Des consultations personnalisées à l'assistance pratique. {'-- >'}
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg font-semibold">
                    Découvrez nos solutions
                </button>
            </div>
        </section>
    )
};

export default ProductFront;
