
const OurCommunity = () => {
    return (
        <section className="relative w-full overflow-hidden bg-linear-to-br from-[#EEF7FF] bg-[#C084FC] to-[#F3F4F6] py-20 px-6 sm:px-12 md:px-20 min-h-screen flex flex-col justify-center">
            <div className="absolute top-[-10%] left-[-5%] w-100 h-100 rounded-full bg-[#3B82F6] opacity-15 blur-[120px] pointer-events-none" />
            <div className="absolute top-[10%] right-[10%] w-125 h-125 rounded-full bg-[#CCFF00] opacity-40 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[30%] w-112.5 h-112.5 rounded-full bg-[#3B82F6] opacity-20 blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-6">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                            Discover What Our <br className="hidden sm:inline" />
                            Community Is Saying
                        </h2>
                    </div>
                    <div className="lg:col-span-6">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-white/90 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
                                    alt="Sarah M."
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Sarah M.</h3>
                            <p className="text-sm font-semibold text-blue-600 mb-6">Enthusiastic Learner</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
                            </p>
                        </div>
                    </div>

                    <div className="card bg-white/90 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"
                                    alt="James L."
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">James L.</h3>
                            <p className="text-sm font-semibold text-blue-600 mb-6">Lifelong Learner</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
                            </p>
                        </div>
                    </div>

                    <div className="card bg-white/90 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250"
                                    alt="Alex B."
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Alex B.</h3>
                            <p className="text-sm font-semibold text-blue-600 mb-6">Inspired Creator</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCommunity;