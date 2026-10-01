import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import img from '../../../assets/hero-right-img.png';

const LIME = "#ccff00";

const avatars = [11, 12, 13, 14, 15, 16, 17];

const LimeSquiggle = ({ className = "" }) => (
    <svg viewBox="0 0 160 200" className={className} fill="none">
        <path
            d="M20 40 C60 10 130 20 120 45 C110 70 20 70 25 100 C30 130 120 110 125 135 C130 160 60 175 30 190"
            stroke={LIME}
            strokeWidth="34"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const WhiteSquiggle = ({ className = "" }) => (
    <svg viewBox="0 0 120 120" className={className} fill="none">
        <path
            d="M15 30 L95 20 L25 55 L100 50 L30 85 L90 95"
            stroke="#fff"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Cylinder = ({ className = "" }) => (
    <svg viewBox="0 0 120 150" className={className}>
        <path d="M10 25 L40 140 Q60 150 85 140 L118 40 Q70 5 10 25Z" fill={LIME} />
        <ellipse cx="62" cy="28" rx="52" ry="18" fill="#d9ff4d" />
    </svg>
);

const Pyramid = ({ className = "" }) => (
    <svg viewBox="0 0 120 120" className={className}>
        <path d="M60 8 L112 95 L20 100Z" fill="#fff" />
        <path d="M60 8 L112 95 L85 70Z" fill="#e6e9f5" />
        <path d="M20 100 L60 8 L50 70Z" fill="#f4f6ff" />
    </svg>
);

const Ring = ({ className = "" }) => (
    <svg viewBox="0 0 200 200" className={className}>
        <ellipse
            cx="100"
            cy="100"
            rx="62"
            ry="78"
            fill="none"
            stroke="#fff"
            strokeWidth="42"
            transform="rotate(-25 100 100)"
        />
    </svg>
);

const Banner = () => {
    return (
        <section
            className="relative min-h-screen w-full overflow-hidden bg-[#003BE2]"
            style={{
                fontFamily: "'Outfit', sans-serif",
            }}
        >
            <LimeSquiggle className="absolute -left-6 top-24 w-44 lg:w-60" />
            <WhiteSquiggle className="absolute left-32 top-56 hidden w-20 md:block" />
            <Cylinder className="absolute -right-10 top-28 w-40 lg:w-56" />
            <Pyramid className="absolute right-32 top-60 hidden w-28 md:block" />
            <Ring className="absolute -left-4 bottom-0 hidden w-60 md:block" />
            <WhiteSquiggle className="absolute -right-4 bottom-16 hidden w-52 md:block" />

            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-10 text-center">
                <h1
                    className="text-4xl font-semibold leading-tight text-white md:text-6xl"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    Get Access to Hundreds <br /> Courses Available
                </h1>

                <p className="mt-8 max-w-xl text-[13px] font-light text-white/80">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>

                <div className="mt-8 flex w-full max-w-xl items-center gap-3">
                    <label className="input input-lg h-11 flex-1 rounded-full border-0 bg-white text-sm shadow-none focus-within:outline-none">
                        <FiSearch className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="grow text-gray-700 placeholder:text-gray-400"
                        />
                    </label>
                    <button
                        className="btn h-9 min-h-0 rounded-full border-0 px-5 text-sm font-medium text-black shadow-none"
                        style={{ backgroundColor: LIME }}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 z-10 flex h-[50vh] w-full max-w-3xl -translate-x-1/2 justify-center items-end">
                <div
                    className="relative flex h-full w-full justify-center items-end rounded-t-full"
                    style={{ backgroundColor: LIME }}
                >
                    <img
                        src={img}
                        alt="Smiling student with laptop"
                        className="relative z-10 h-[108%] object-contain bottom-0"
                    />

                    <div className="absolute left-2 top-[20%] z-20 rounded-xl bg-white px-3.5 py-2.5 shadow-md md:left-24">
                        <p className="text-[13px] font-semibold text-gray-900">UI/UX Design</p>
                        <p className="text-[9px] text-gray-400">
                            200 Courses &nbsp;•&nbsp; 1000+ Students
                        </p>
                    </div>

                    <div className="absolute right-2 top-[28%] z-20 md:w-36 rounded-xl bg-white p-3 shadow-md md:right-44">
                        <p className="text-[10px] font-medium text-gray-600">Learning Progress</p>
                        <p className="mt-1 text-3xl font-extrabold text-gray-900">55%</p>
                        <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                            <div
                                className="h-full w-[55%] rounded-full"
                                style={{ backgroundColor: LIME }}
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-[6%] left-0 z-20 w-44 rounded-xl bg-white p-3 shadow-md md:left-10">
                        <p className="text-[11px] font-semibold text-gray-900">Happy Students</p>
                        <p className="flex items-center gap-1 text-[9px] text-gray-500">
                            4.5 <span className="text-gray-400">(240)</span>
                            <FaStar className="text-yellow-400" />
                        </p>
                        <div className="mt-1 flex items-center">
                            <div className="avatar-group -space-x-2.5 rtl:space-x-reverse">
                                {avatars.slice(0, 6).map((n) => (
                                    <div key={n} className="avatar">
                                        <div className="w-6 border-0">
                                            <img src={`https://i.pravatar.cc/48?img=${n}`} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <span
                                className="-ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-black"
                                style={{ backgroundColor: LIME }}
                            >
                                2K+
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;