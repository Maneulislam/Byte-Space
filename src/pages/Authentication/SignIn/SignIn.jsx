import { FaFacebookF, FaGoogle, FaStar, FaChartBar } from 'react-icons/fa';
import Logo from '../../../components/Logo/Logo';
import { Link } from 'react-router';

const SignIn = () => {
    return (
        <div className='min-h-screen w-full bg-[#0052FF]'>
            <div className='max-w-5xl mx-auto mt-10 text-white'>

                <Logo></Logo>

            </div>


            <div
                className=" flex items-center justify-center p-6 md:p-12 relative overflow-hidden text-white"

            >


                <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

                    <div className="lg:col-span-6 space-y-8 -mt-20">


                        <div className="space-y-3 max-w-md">
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Sign in with ease
                            </h1>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
                            </p>
                        </div>

                        <div className="relative pt-6 min-h-90 max-w-md">
                            <div className="pointer-events-none absolute left-0 top-0 text-[#CCFF00] z-20">
                                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="20">
                                    <ellipse cx="50" cy="50" rx="30" ry="20" transform="rotate(-20 50 50)" />
                                </svg>
                            </div>

                            <div className="pointer-events-none absolute left-[-1rem] bottom-[-1rem] text-[#CCFF00] z-20">
                                <svg width="90" height="90" viewBox="0 0 100 100" fill="currentColor">
                                    <polygon points="50,10 90,85 10,85" />
                                </svg>
                            </div>

                            <div className="pointer-events-none absolute right-4 bottom-[20%] text-white opacity-90 z-20">
                                <svg width="90" height="100" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M 20 20 L 80 40 L 25 65 L 85 90" />
                                </svg>
                            </div>

                            <div className="absolute left-0 top-10 w-64 bg-white text-slate-900 rounded-2xl p-4 shadow-xl z-0 transform -rotate-3 border border-slate-100">
                                <div className="bg-slate-100 rounded-xl h-24 mb-3 flex items-center justify-center text-xs text-slate-400">
                                    <span className="px-2 py-1 bg-white/80 rounded-full text-[10px]">17 Lessons</span>
                                </div>
                                <h4 className="font-bold text-sm">Build Digital</h4>
                                <p className="text-[10px] text-slate-400">by puerperal studio</p>
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                                        <FaChartBar className="text-[8px]" /> Beginner
                                    </span>
                                    <span className="text-blue-600 font-bold text-xs">$25<span className="text-[9px] text-slate-400 font-normal">/lifetime</span></span>
                                </div>
                            </div>

                            <div className="absolute left-16 top-0 w-72 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl z-10 border border-slate-100">
                                <div className="relative bg-slate-900 text-white rounded-xl h-28 mb-3 p-2 overflow-hidden flex flex-col justify-between">
                                    <div className="flex gap-1 text-[9px]">
                                        <span className="bg-white/20 px-2 py-0.5 rounded-full">17 Lessons</span>
                                        <span className="bg-white/20 px-2 py-0.5 rounded-full">2 hours 16 mins</span>
                                        <span className="bg-white/20 px-2 py-0.5 rounded-full">59 Comments</span>
                                    </div>
                                    <div className="h-10 w-full bg-blue-500/20 rounded border border-blue-400/30 flex items-center justify-center">
                                        <div className="w-3/4 h-2 bg-blue-400 rounded-full animate-pulse" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-sm">the Power of Big Data</h3>
                                    <span className="flex items-center gap-1 text-xs font-semibold">
                                        4.5 <FaStar className="text-yellow-400 text-[10px]" />
                                    </span>
                                </div>
                                <p className="text-[10px] text-slate-400">by purepearl studio</p>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1 text-slate-600">
                                        <FaChartBar className="text-[8px]" /> Beginner
                                    </span>
                                    <div className="flex -space-x-1.5 overflow-hidden">
                                        <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="" />
                                        <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="" />
                                        <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="" />
                                        <span className="flex items-center justify-center h-5 w-5 rounded-full bg-slate-900 text-[8px] font-bold text-white ring-1 ring-white">26+</span>
                                    </div>
                                </div>

                                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-blue-600 font-bold text-sm">$25<span className="text-[10px] text-slate-400 font-normal">/lifetime</span></span>
                                </div>
                            </div>

                            <div className="absolute left-20 bottom-2 bg-[#CCFF00] text-slate-900 rounded-2xl p-3 shadow-lg z-10 w-52">
                                <p className="font-bold text-xs">Happy Students</p>
                                <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700">
                                    <span>4.5</span>
                                    <span className="text-slate-500">(240)</span>
                                    <FaStar className="text-blue-600 text-[9px]" />
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <div className="flex -space-x-1 overflow-hidden">
                                        <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="" />
                                        <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="" />
                                        <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="" />
                                    </div>
                                    <span className="bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">2K+</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        <div className="bg-white text-slate-900 rounded-[32px] p-8 sm:p-12 w-full max-w-md shadow-2xl">
                            <span className="text-blue-600 text-sm font-medium">Sign In</span>
                            <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-8">
                                Welcome Back
                            </h2>

                            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-600">Email</label>
                                    <input
                                        type="email"
                                        placeholder="designer@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-slate-50/50"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-600">Password</label>
                                    <input
                                        type="password"
                                        defaultValue="********"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-slate-50/50"
                                    />
                                </div>

                                <div className="flex justify-end pt-2">
                                    <button
                                        type="submit"
                                        className="bg-[#CCFF00] hover:bg-[#b8e600] text-slate-900 font-bold px-7 py-2.5 rounded-full transition-all duration-200 cursor-pointer text-sm shadow-sm"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>

                            <div className="relative my-8 text-center">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-200"></div>
                                </div>
                                <span className="relative bg-white px-4 text-xs text-slate-400">or</span>
                            </div>

                            <div className="flex justify-center gap-4">
                                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-800">
                                    <FaFacebookF className="text-lg" />
                                </button>
                                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-800">
                                    <FaGoogle className="text-lg" />
                                </button>
                            </div>

                            <div className="mt-8 text-center text-xs text-slate-500">
                                New user?{' '}
                                <Link to={'/signup'} className="text-blue-600 font-medium hover:underline">
                                    Create an account
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignIn;