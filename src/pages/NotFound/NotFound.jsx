import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="w-full min-h-screen bg-[#003BE2] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans px-4 text-center">
            <div
                className="absolute inset-0 z-0 pointer-events-none"

            />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
                <div className="relative flex flex-col items-center justify-center">
                    <h1 className="text-[160px] sm:text-[240px] md:text-[320px] font-extrabold leading-none tracking-tight bg-linear-to-b from-[#CCFF00] via-[#B5EC00] to-[#60A000] bg-clip-text text-transparent select-none">
                        404
                    </h1>

                    <h2 className="absolute top-[80%] sm:top-[90%] -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] text-white w-full px-2">
                        The page you are looking for doesn't exist
                    </h2>
                </div>

                <p className="text-[11px] sm:text-xs text-white/80 max-w-md mt-2 mb-8 leading-relaxed font-normal">
                    Try to use a correct url or go back to homepage to start again
                </p>

                <Link
                    to="/"
                    className="bg-[#CCFF00] hover:bg-[#b8e600] text-slate-900 font-bold px-8 py-2.5 rounded-full text-xs transition-all duration-200 transform hover:scale-105 shadow-md cursor-pointer"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;