import Logo from '../../components/Logo/Logo';

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-gray-200 bg-white text-slate-700 py-10 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 pb-12 lg:pb-16">

                    <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-2">
                            <Logo />
                        </div>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
                            Stay up to date with our latest features and releases by joining our newsletter.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-slate-500 text-slate-800 text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-slate-900 font-semibold px-7 py-2.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="text-xs text-slate-500 leading-normal max-w-md">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4 lg:pt-0">
                        <div className="space-y-3">
                            <h4 className="text-slate-900 font-semibold text-sm mb-1">Explore</h4>
                            <a href="#" className="block text-slate-600 hover:text-slate-950 font-medium text-sm transition-colors">
                                Featured Courses
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Featured Categories
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Business
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                IT
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Design
                            </a>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-slate-900 font-semibold text-sm mb-1">Categories</h4>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Development
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Marketing
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Photography
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Finance
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Sport
                            </a>
                        </div>

                        <div className="space-y-3 col-span-2 sm:col-span-1">
                            <h4 className="text-slate-900 font-semibold text-sm mb-1">Company</h4>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Become a Creator
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Affiliate Program
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Contact
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                Help
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                About
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
                    <p>© 2023 ByteSpace. All rights reserved.</p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <a href="#" className="hover:text-slate-800 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-slate-800 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-slate-800 transition-colors">
                            Cookies Settings
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;