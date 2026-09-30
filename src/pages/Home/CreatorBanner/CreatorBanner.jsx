
const CreatorBanner = () => {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#0052FF] min-h-100 flex items-center justify-center py-16 px-4 text-center text-white"

        >
            <div className="pointer-events-none absolute -left-8 -top-4 md:left-[2%] md:top-[5%] text-[#CCFF00] select-none">
                <svg width="180" height="180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 10 20 L 70 35 L 20 55 L 80 75" />
                </svg>
            </div>

            <div className="pointer-events-none absolute left-[12%] top-[8%] text-white opacity-95 select-none hidden sm:block">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 20 25 L 70 40 L 30 65 L 75 80" />
                </svg>
            </div>

            <div className="pointer-events-none absolute -left-12 -bottom-16 md:left-[2%] md:-bottom-8 text-[#CCFF00] select-none">
                <svg width="240" height="240" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="22">
                    <ellipse cx="60" cy="60" rx="45" ry="32" transform="rotate(-15 60 60)" />
                </svg>
            </div>

            <div className="pointer-events-none absolute -left-8 bottom-[15%] text-white select-none hidden sm:block">
                <svg width="110" height="130" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M 50 10 C 70 10, 85 80, 80 90 C 75 98, 25 98, 20 90 C 15 80, 30 10, 50 10 Z" />
                </svg>
            </div>

            <div className="pointer-events-none absolute right-[12%] top-[5%] text-[#CCFF00] select-none">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                    <polygon points="50,10 90,75 10,75" fill="#CCFF00" />
                    <polygon points="50,10 90,75 50,85" fill="#A0DB00" />
                </svg>
            </div>

            <div className="pointer-events-none absolute -right-8 top-[8%] text-white opacity-95 select-none">
                <svg width="150" height="210" viewBox="0 0 100 140" fill="currentColor" className="rotate-25">
                    <rect x="15" y="15" width="70" height="110" rx="35" />
                </svg>
            </div>

            <div className="pointer-events-none absolute right-[2%] -bottom-8 text-[#CCFF00] select-none">
                <svg width="180" height="200" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 20 20 L 80 40 L 25 65 L 85 90 L 30 110" />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.2]">
                    Unlock Your Potential as a <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </h1>

                <div className="max-w-3xl mx-auto  p-3 sm:p-4 rounded-sm">
                    <p className="text-white/95 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed tracking-wide">
                        Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                    </p>
                </div>

                <div className="pt-2">
                    <button className="bg-[#CCFF00] hover:bg-[#b8e600] text-slate-950 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 cursor-pointer">
                        Join as Creator
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CreatorBanner;