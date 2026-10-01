import { useState } from 'react';
import { useParams, useLoaderData } from 'react-router';
import { FaShareAlt, FaStar, FaPlayCircle, FaCheckCircle, FaFileAlt, FaVideo, FaCertificate, FaUserFriends, FaSignal } from 'react-icons/fa';
import NotFound from '../NotFound/NotFound';

const CourseDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('about');

    const coursesData = useLoaderData();
    const course = coursesData?.find((item) => String(item.id) === String(id));

    if (!course) {
        return <NotFound></NotFound>
    }

    const keyPointsList = [
        "Foundational Concepts",
        "Design Principles Mastery",
        "Advanced Techniques in Digital Creation",
        "Project Showcase and Critique",
        "Optimizing for Various Platforms",
        "Digital Asset Management Best Practices",
        "Monetization Strategies",
        "Capstone Project: Building Your Portfolio"
    ];

    return (
        <div className="w-full bg-[#F8FAFC] font-sans antialiased text-slate-800 min-h-screen relative">
            <div className="w-full bg-[#003BE2] text-white pt-10 relative">
                <div
                    className="absolute inset-0 z-0"

                />

                <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="space-y-2 max-w-2xl">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                                {course.title || "Build Digital Asset: A Comprehensive Guide"}
                            </h1>
                            <p className="text-white/80 text-xs sm:text-sm">
                                Unlock the Power of Digital Creation with Expert Guidance
                            </p>
                            <p className="text-xs text-white/70 pt-1">
                                by <span className="text-[#CCFF00] font-semibold underline cursor-pointer">{course.author || "purepearl studio"}</span>
                            </p>
                        </div>

                        <button className="bg-[#CCFF00] hover:bg-white/30 text-black text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-md transition cursor-pointer">
                            <FaShareAlt className="text-xs" />
                            <span>Share</span>
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs mb-8">
                        <span className="bg-white text-slate-800 font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm text-xs">
                            <FaSignal className="text-blue-600 text-[10px]" /> {course.level || 'Intermediate'}
                        </span>
                        <span className="bg-white text-slate-800 font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm text-xs">
                            <FaStar className="text-yellow-400 text-sm" /> {course.rating || '4.8'} <span className="text-slate-400">({course.comments || '172'} reviews)</span>
                        </span>
                        <span className="bg-white text-slate-800 font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm text-xs">
                            <FaUserFriends className="text-blue-600 text-xs" /> {course.enrolledCount || '199'} Students
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 pb-8">
                            <div className="relative w-full h-64 sm:h-80 md:h-[380px] bg-slate-200 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl flex items-center justify-center">
                                <img
                                    src={course.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-105 cursor-pointer">
                                        <FaPlayCircle className="text-4xl sm:text-5xl text-slate-900 ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 hidden lg:block"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-8 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center gap-2 bg-slate-200/60 p-1.5 rounded-full w-fit">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeTab === 'about'
                                    ? 'bg-[#CCFF00] text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                About
                            </button>

                            <button
                                onClick={() => setActiveTab('lessons')}
                                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeTab === 'lessons'
                                    ? 'bg-[#CCFF00] text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                Lessons
                            </button>

                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeTab === 'reviews'
                                    ? 'bg-[#CCFF00] text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                Reviews
                            </button>
                        </div>

                        {activeTab === 'about' && (
                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-base font-bold text-slate-900">Description</h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "{course.title || 'Build Digital Asset: A Comprehensive Guide'}". This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-base font-bold text-slate-900">Sneak Peak</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400" alt="Sneak peak 1" className="w-full h-24 object-cover rounded-2xl shadow-sm" />
                                        <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400" alt="Sneak peak 2" className="w-full h-24 object-cover rounded-2xl shadow-sm" />
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" alt="Sneak peak 3" className="w-full h-24 object-cover rounded-2xl shadow-sm" />
                                        <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400" alt="Sneak peak 4" className="w-full h-24 object-cover rounded-2xl shadow-sm" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-base font-bold text-slate-900">Key Points</h3>
                                    <div className="space-y-2.5">
                                        {keyPointsList.map((point, index) => (
                                            <div key={index} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                                                <FaCheckCircle className="text-blue-600 text-sm flex-shrink-0" />
                                                <span>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'lessons' && (
                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-slate-900">Explore the Modules</h3>
                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-sm font-bold text-slate-900">Lesson List</h4>
                                    <div className="space-y-5">
                                        {[
                                            {
                                                title: 'Module 1: Introduction to Digital Assets',
                                                desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."
                                            },
                                            {
                                                title: 'Module 2: Design Principles for Impact',
                                                desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
                                            },
                                            {
                                                title: 'Module 4: User-Centric Design Strategies',
                                                desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
                                            },
                                            {
                                                title: 'Module 5: Interactive Media and Engagement',
                                                desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
                                            },
                                            {
                                                title: 'Module 6: Project Showcase and Critique',
                                                desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
                                            },
                                            {
                                                title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                                                desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] flex items-center justify-center flex-shrink-0 text-slate-900 shadow-sm">
                                                    <FaVideo className="text-lg" />
                                                </div>
                                                <div className="space-y-1 pt-0.5">
                                                    <h5 className="text-xs sm:text-sm font-bold text-slate-800">{item.title}</h5>
                                                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-sm font-bold text-slate-900">Lesson Content</h4>
                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                        Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">Lesson Progress Tracking</h4>
                                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                                            Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                                        </p>
                                    </div>

                                    <div className="border border-slate-200 rounded-2xl p-5 space-y-3 bg-white shadow-xs">
                                        <span className="text-xs font-semibold text-slate-700 block">Learning Progress</span>
                                        <span className="text-2xl font-extrabold text-slate-900 block">55%</span>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#CCFF00] rounded-full w-[55%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-slate-900">What Learners Are Saying</h3>
                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                        Discover what our learners have to say about their experience with '{course?.title || "Build Digital Assets: A Comprehensive Guide"}'. Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                                    </p>
                                </div>

                                <div className="border border-slate-200/80 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 bg-white">
                                    <div className="w-32 h-32 bg-[#CCFF00] rounded-2xl flex flex-col items-center justify-center p-4 flex-shrink-0">
                                        <span className="text-xs font-semibold text-slate-800">Ratings</span>
                                        <span className="text-3xl font-extrabold text-slate-900">4.7</span>
                                    </div>

                                    <div className="w-full space-y-2">
                                        {[
                                            { stars: 5, count: 720, percent: '80%' },
                                            { stars: 4, count: 120, percent: '35%' },
                                            { stars: 3, count: 21, percent: '10%' },
                                            { stars: 2, count: 12, percent: '5%' },
                                            { stars: 1, count: 16, percent: '8%' }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#CCFF00] rounded-full" style={{ width: item.percent }} />
                                                </div>
                                                <div className="flex items-center gap-0.5 text-slate-700 text-[10px]">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <FaStar key={i} className="text-slate-800" />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-slate-500 w-8 text-right font-medium">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-slate-900">Individual Reviews:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="bg-[#CCFF00] text-slate-900 font-bold px-4 py-2 rounded-full text-xs shadow-xs cursor-pointer">
                                            All rating
                                        </button>
                                        {[5, 4, 3, 2, 1].map((star) => (
                                            <button key={star} className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-4 py-2 rounded-full text-xs flex items-center gap-1 transition cursor-pointer">
                                                <FaStar className="text-slate-800 text-[11px]" />
                                                <span>{star}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        {
                                            name: 'PurePearl Studio',
                                            role: 'UI/UX Designer',
                                            time: 'a year ago',
                                            avatar: 'https://i.pravatar.cc/100?img=33',
                                            comment: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"'
                                        },
                                        {
                                            name: 'Albert Flores',
                                            role: 'UI/UX Designer',
                                            time: 'a year ago',
                                            avatar: 'https://i.pravatar.cc/100?img=12',
                                            comment: '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"'
                                        },
                                        {
                                            name: 'Cody Fisher',
                                            role: 'UI/UX Designer',
                                            time: 'a year ago',
                                            avatar: 'https://i.pravatar.cc/100?img=60',
                                            comment: '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."'
                                        }
                                    ].map((review, index) => (
                                        <div key={index} className="border border-slate-200/80 rounded-3xl p-6 bg-white space-y-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                                                    <div>
                                                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">{review.name}</h5>
                                                        <p className="text-[10px] text-slate-400">{review.role}</p>
                                                    </div>
                                                </div>
                                                <span className="text-[11px] text-slate-400">{review.time}</span>
                                            </div>

                                            <div className="flex items-center gap-1 text-slate-800 text-xs">
                                                {Array.from({ length: 5 }).map((_, r) => (
                                                    <FaStar key={r} />
                                                ))}
                                            </div>

                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                                {review.comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="lg:absolute lg:-top-111.25 lg:right-0 lg:w-full bg-white text-slate-800 border border-slate-200/80 rounded-3xl p-6 shadow-2xl space-y-6 z-30">
                            <div>
                                <h4 className="font-bold text-sm text-slate-900 mb-4">
                                    {course.lessons || '112'} Lessons ({course.duration || '24 hours'})
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-slate-400">01</span>
                                            <span className="font-medium text-slate-700">Introduction to Digital Assets</span>
                                        </div>
                                        <span className="text-blue-600 font-semibold">12 mins</span>
                                    </div>

                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-slate-400">02</span>
                                            <span className="font-medium text-slate-700">Design Principles for Impacts</span>
                                        </div>
                                        <span className="text-blue-600 font-semibold">21 mins</span>
                                    </div>

                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-slate-400">03</span>
                                            <span className="font-medium text-slate-700 leading-tight">Advanced Techniques in Digital Creation</span>
                                        </div>
                                        <span className="text-blue-600 font-semibold shrink-0">15 mins</span>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-400 pt-4 leading-relaxed">
                                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                                </p>
                            </div>

                            <div className="space-y-3 pt-1 border-t border-slate-100">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-extrabold text-blue-600">${course.price || '25'}</span>
                                    <span className="text-xs text-slate-400">/lifetime</span>
                                </div>
                                <button className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-slate-900 font-bold py-3.5 rounded-full text-xs shadow-md transition cursor-pointer">
                                    Enroll Now
                                </button>
                            </div>

                            <div className="space-y-3 pt-1">
                                <h5 className="font-bold text-xs text-slate-900">This course include</h5>
                                <div className="space-y-2.5 text-xs text-slate-600">
                                    <div className="flex items-center gap-2.5">
                                        <FaFileAlt className="text-blue-600" />
                                        <span>Learning Resources</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <FaVideo className="text-blue-600" />
                                        <span>Quality Lesson Videos</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <FaCertificate className="text-blue-600" />
                                        <span>Certificate of Completion</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <FaUserFriends className="text-blue-600" />
                                        <span>Private Consultation</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 space-y-3">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={course.avatars?.[0] || "https://i.pravatar.cc/100?img=33"}
                                        alt="Creator"
                                        className="w-10 h-10 rounded-full object-cover border"
                                    />
                                    <div>
                                        <p className="font-bold text-xs text-slate-900">{course.author || "PurePearl Studio"}</p>
                                        <p className="text-[10px] text-slate-400">Professional Creator</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-400 leading-relaxed">
                                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                                </p>
                                <button className="w-full py-2.5 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer">
                                    See Full Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;