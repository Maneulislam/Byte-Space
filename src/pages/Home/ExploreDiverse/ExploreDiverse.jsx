import { LuPen, LuCode, LuLaptop, LuBuilding, LuTrendingUp, LuCamera } from 'react-icons/lu';

const ExploreDiverse = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Explore Diverse Learning Paths at Bytespace
                </h2>
                <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
                <div className="card bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                        <LuPen className="w-6 h-6 text-slate-900" />
                    </div>
                    <span className="text-slate-800 font-semibold text-center text-sm md:text-base">
                        Design
                    </span>
                </div>

                <div className="card bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                        <LuCode className="w-6 h-6 text-slate-900" />
                    </div>
                    <span className="text-slate-800 font-semibold text-center text-sm md:text-base">
                        Development
                    </span>
                </div>

                <div className="card bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                        <LuLaptop className="w-6 h-6 text-slate-900" />
                    </div>
                    <span className="text-slate-800 font-semibold text-center text-sm md:text-base">
                        IT &amp; Software
                    </span>
                </div>

                <div className="card bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                        <LuBuilding className="w-6 h-6 text-slate-900" />
                    </div>
                    <span className="text-slate-800 font-semibold text-center text-sm md:text-base">
                        Business
                    </span>
                </div>

                <div className="card bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                        <LuTrendingUp className="w-6 h-6 text-slate-900" />
                    </div>
                    <span className="text-slate-800 font-semibold text-center text-sm md:text-base">
                        Marketing
                    </span>
                </div>

                <div className="card bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                        <LuCamera className="w-6 h-6 text-slate-900" />
                    </div>
                    <span className="text-slate-800 font-semibold text-center text-sm md:text-base">
                        Photography
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ExploreDiverse;