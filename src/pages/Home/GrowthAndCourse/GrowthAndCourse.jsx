import { FaCheckCircle } from 'react-icons/fa';

import img1 from '../../../assets/hero-right-img.png';
import img2 from '../../../assets/course-left-img.png';

const GrowthAndCourse = () => {
    return (
        <div className="w-full relative overflow-hidden bg-[#F2F4F7] py-20 mt-16 px-4 min-h-screen">
            <div className="absolute top-[-10%] left-[-10%] w-250 h-250 rounded-full bg-[#E2F700] opacity-30 blur-[120px] pointer-events-none" />
            <div className="absolute top-[30%] right-[-10%] w-150 h-150 rounded-full bg-[#C084FC] opacity-35 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-125 h-125 rounded-full bg-[#818CF8] opacity-30 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center  p-8 md:p-12 rounded-3xl bg-white/40  ">
                    <div className="lg:col-span-6 space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight">
                            Your Path to Professional Growth Starts Here!
                        </h1>
                        <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        <div className="flex items-center gap-10 pt-4">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black text-[#2563EB]">12K</h3>
                                <p className="text-xs sm:text-sm text-[#64748B] font-medium">Students</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black text-[#2563EB]">70+</h3>
                                <p className="text-xs sm:text-sm text-[#64748B] font-medium">Courses</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black text-[#2563EB]">16</h3>
                                <p className="text-xs sm:text-sm text-[#64748B] font-medium">Creators</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex justify-center items-center">
                        <div className="w-full max-w-lg overflow-hidden rounded-2xl">
                            <img
                                src={img1}
                                alt="Professional Growth"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
                        <div className="w-full max-w-lg overflow-hidden rounded-2xl border-2 border-[#8B5CF6]">
                            <img
                                src={img2}
                                alt="Create & Manage Courses"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] leading-tight">
                            Create &amp; Manage Courses Easily.
                        </h2>
                        <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                            <span className="font-bold text-[#0F172A]">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>

                        <ul className="space-y-4 pt-2">
                            <li className="flex items-center gap-3 text-[#334155] font-semibold text-sm sm:text-base">
                                <FaCheckCircle className="text-[#2563EB] text-xl shrink-0" />
                                <span>Share Your Expertise</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#334155] font-semibold text-sm sm:text-base">
                                <FaCheckCircle className="text-[#2563EB] text-xl shrink-0" />
                                <span>Monetize Your Passion</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#334155] font-semibold text-sm sm:text-base">
                                <FaCheckCircle className="text-[#2563EB] text-xl shrink-0" />
                                <span>Flexibility and Autonomy</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#334155] font-semibold text-sm sm:text-base">
                                <FaCheckCircle className="text-[#2563EB] text-xl shrink-0" />
                                <span>Build a Community</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthAndCourse;