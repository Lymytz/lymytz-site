import {motion} from "framer-motion";

const MosaicSection = () => {
    const images = [
        {src: "/images/welcome.webp", alt: "Dashboard",label: "Dashboard clair" },
        {src: "/images/profil.webp", alt: "Cloud", label: "100% Cloud" },
        {src: "/images/part-catalogue.webp", alt: "Gestion Clients" ,label: "Gestion des clients"},
        {src: "/images/ecran_dashboard.webp", alt: "Statistiques",label: "Statistiques détaillées"},
        {src: "/images/ecran_production.webp", alt: "Sécurité", label: "Sécurité avancée" },
        {src: "/images/profil.webp", alt: "Cloud", label: "100% Cloud" },
    ];
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center bg-white overflow-hidden">
            <div className="relative w-[400px] h-[400px]">
                {images.map((img, idx) => {
                    const angle = (360 / images.length) * idx; // décalage angulaire
                    return (
                        <motion.div
                            key={idx}
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }}
                            className="absolute top-1/2 left-1/2 origin-center"
                            style={{
                                transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`,
                            }}
                        >
                            <div className="w-32 h-44 rounded-xl overflow-hidden shadow-xl">
                                <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    )
};

export default MosaicSection;
