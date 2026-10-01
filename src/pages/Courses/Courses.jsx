import { useState } from 'react';
import { FiSearch, FiChevronDown, FiFilter, FiBarChart2, FiGrid, FiMenu, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useLoaderData } from 'react-router';


const Course = () => {
    const [selectedTag, setSelectedTag] = useState('Featured');
    const [currentPage, setCurrentPage] = useState(1);

    const courses = useLoaderData();

    return (
        <div className="w-full bg-white">
            <div
                className="w-full bg-[#003BE2] py-16 px-4 sm:px-6 flex flex-col items-center justify-center text-white relative overflow-hidden"

            >
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 text-center">
                    Find Your Next Course
                </h1>

                <div className="w-full max-w-xl flex items-center gap-3">
                    <div className="relative flex-1">
                        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-12 pr-5 py-3 rounded-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none shadow-md text-sm"
                        />
                    </div>

                    <button className="bg-[#CCFF00] hover:bg-[#b8e600] text-slate-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-200 text-sm shadow-md cursor-pointer whitespace-nowrap">
                        <span>Courses</span>
                        <FiChevronDown className="text-base" />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
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

                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    <button
                        onClick={() => setSelectedTag('Featured')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Featured'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Featured
                    </button>

                    <button
                        onClick={() => setSelectedTag('Music')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Music'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Music
                    </button>

                    <button
                        onClick={() => setSelectedTag('Drawing & Painting')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Drawing & Painting'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Drawing & Painting
                    </button>

                    <button
                        onClick={() => setSelectedTag('Marketing')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Marketing'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Marketing
                    </button>

                    <button
                        onClick={() => setSelectedTag('Animation')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Animation'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Animation
                    </button>

                    <button
                        onClick={() => setSelectedTag('Social Media')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Social Media'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Social Media
                    </button>

                    <button
                        onClick={() => setSelectedTag('UI/UX Design')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'UI/UX Design'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        UI/UX Design
                    </button>

                    <button
                        onClick={() => setSelectedTag('Creative Marketing')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Creative Marketing'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Creative Marketing
                    </button>

                    <button
                        onClick={() => setSelectedTag('Cooking')}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedTag === 'Cooking'
                            ? 'bg-[#CCFF00] text-slate-900 font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        Cooking
                    </button>
                </div>
            </div>


            <div className="max-w-7xl my-10 mx-auto p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <Link
                            to={`/course/${course.id || course._id}`}
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


            <div className="flex items-center justify-center gap-4 py-6 mb-10">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                    <FiChevronLeft className="text-3xl" />
                </button>

                <div className="flex items-center gap-4 text-2xl">
                    {[1, 2, 3, 4, 5].map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => setCurrentPage(pageNumber)}
                            className={`font-bold transition-colors cursor-pointer ${currentPage === pageNumber
                                ? 'text-slate-300'
                                : 'text-slate-800 hover:text-slate-600'
                                }`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 5))}
                    disabled={currentPage === 5}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                    <FiChevronRight className="text-3xl" />
                </button>
            </div>



        </div>
    );
};

export default Course;