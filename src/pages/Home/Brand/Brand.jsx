
const Brand = () => {
    return (
        <section className="w-full bg-gray-100 py-8 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">

                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 fill-slate-700" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.82.13-1.61.37-2.35 1.5 1.34 3.49 2.15 5.63 2.15 3.1 0 5.86-1.7 7.29-4.26 1.7 1.83 2.71 4.28 2.71 6.96 0 4.41-3.59 8-8 8z" />
                        </svg>
                        <span className="text-xl font-extrabold tracking-tight text-slate-800">Logoipsum</span>
                    </div>


                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 fill-slate-700" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                        </svg>
                        <span className="text-xl font-extrabold tracking-tight text-slate-800">Logoipsum</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 fill-slate-700" viewBox="0 0 24 24">
                            <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                        </svg>
                        <span className="text-xl font-extrabold tracking-tight text-slate-800">Logoipsum</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 fill-slate-700" viewBox="0 0 24 24">
                            <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z" />
                        </svg>
                        <span className="text-xl font-extrabold tracking-tight text-slate-800">Logoipsum</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 fill-slate-700" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                        </svg>
                        <span className="text-xl font-bold tracking-tight text-slate-800">Logoipsum</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Brand;