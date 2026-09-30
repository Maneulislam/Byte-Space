import { useState } from "react";

const BuildSkills = () => {
    const [selectedCategory, setSelectedCategory] = useState("Featured");

    const categories = [
        "Featured",
        "Music",
        "Drawing & Painting",
        "Marketing",
        "Animation",
        "Social Media",
        "UI/UX Design",
        "Creative Marketing",
        "Digital Illustration",
        "Film & Video",
        "Crafts",
        "Freelance & Entrepreneurship",
        "Graphic Design",
        "Photography",
        "Productivity",
        "Web Development",
        "Data Science",
        "Cooking",
    ];

    return (
        <section className="w-full bg-white text-slate-800 font-sans py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Discover Your Passion,
                        <br />
                        Build Your Skills
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
                    {categories.map((category) => {
                        const isSelected = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-200 cursor-pointer ${isSelected
                                    ? "bg-[#ccff00] text-slate-900 font-bold shadow-sm"
                                    : "bg-slate-100 text-slate-700 font-medium hover:bg-slate-200"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}

                    <button className="px-2 py-2.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
                        + More
                    </button>
                </div>
            </div>
        </section>
    );
}
export default BuildSkills;