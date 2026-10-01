import { FiBarChart2, FiFilter, FiGrid, FiMenu } from "react-icons/fi";
import { Link, useLoaderData } from "react-router";

const Creators = () => {

    const courses = useLoaderData();

    return (

        <div>

            <div className="w-full bg-[#003BE2] text-white p-8 sm:p-12 relative overflow-hidden font-sans">
                <div
                    className="absolute inset-0 z-0 pointer-events-none"

                />

                <div className="max-w-6xl mx-auto relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
                            alt="PurePearl Studio"
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover bg-pink-300"
                        />
                        <div className="space-y-1">
                            <div className="flex items-center gap-2.5">
                                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">PurePearl Studio</h2>
                                <span className="bg-[#CCFF00] text-slate-900 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                                    Creator
                                </span>
                            </div>
                            <p className="text-xs text-white/80 font-medium">
                                Passionate UI/UX, Web designer
                            </p>
                        </div>
                    </div>

                    <div className="max-w-4xl text-xs sm:text-sm text-white/90 leading-relaxed space-y-2">
                        <p>
                            Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
                        </p>
                        <p>
                            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-medium shadow-xs">
                                <span className="font-bold text-blue-600 mr-1">3</span> Products
                            </div>
                            <div className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-medium shadow-xs">
                                <span className="font-bold text-blue-600 mr-1">12</span> Followers
                            </div>
                        </div>

                        <button className="bg-[#CCFF00] hover:bg-[#b8e600] text-slate-900 text-xs font-bold px-6 py-2.5 rounded-full transition cursor-pointer shadow-sm">
                            Follow
                        </button>
                    </div>
                </div>



            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 mt-12 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors">
                            <FiFilter className="text-sm" />
                            <span>Filter</span>
                        </button>

                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors">
                            <FiBarChart2 className="text-sm" />
                            <span>Level</span>
                        </button>

                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors">
                            <FiGrid className="text-sm" />
                            <span>Category</span>
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors">
                        <FiMenu className="text-sm" />
                        <span>Most relevant</span>
                    </button>
                </div>
            </div>


            <div className="max-w-7xl my-6 mx-auto p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.slice(0, 6).map((course) => (
                        <Link
                            to={`/course/${course.id}`}
                            key={course.id || course._id}
                            className="card bg-base-100 border border-gray-200 rounded-3xl p-4 shadow-sm hover:shadow-md transition-all duration-300 block hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-16/10">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1 text-[11px] font-medium text-center">
                                    <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full text-gray-700 truncate">
                                        {course.lessons} Lessons
                                    </span>
                                    <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full text-gray-700 truncate">
                                        {course.duration}
                                    </span>
                                    <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full text-gray-700 truncate">
                                        {course.comments} Comments
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 grid gap-2">
                                <div className="grid grid-cols-[1fr_auto] items-start gap-2">
                                    <h3 className="font-bold text-gray-900 text-lg leading-snug truncate">
                                        {course.title}
                                    </h3>
                                    <div className="grid grid-cols-2 items-center gap-1 text-sm font-semibold text-gray-600">
                                        <span>{course.rating}</span>
                                        <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-400 font-medium">
                                    by <span className="text-indigo-600 font-semibold">{course.author}</span>
                                </p>

                                <div className="grid grid-cols-[auto_auto] justify-between items-center mt-2">
                                    <div className="grid grid-cols-[auto_auto] items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700">
                                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span>{course.level}</span>
                                    </div>

                                    <div className="grid grid-cols-[auto_auto] items-center">
                                        <div className="avatar-group -space-x-3">
                                            {course.avatars?.map((avatar, idx) => (
                                                <div key={idx} className="avatar border-2 border-white w-7 h-7 rounded-full">
                                                    <img src={avatar} alt="Student avatar" />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="bg-lime-400 text-black text-[11px] font-bold px-2 py-1 rounded-full -ml-2 z-10">
                                            {course.enrolledCount}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-2 pt-2 border-t border-gray-100">
                                    <span className="text-xl font-extrabold text-blue-600">${course.price}</span>
                                    <span className="text-xs font-medium text-gray-400">/lifetime</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Creators;