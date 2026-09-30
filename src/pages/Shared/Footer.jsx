import Logo from '../../components/Logo/Logo';

const Footer = () => {
    return (
        <footer className="w-full bg-white text-slate-700 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 pb-16">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            <Logo></Logo>
                        </div>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-5 py-2 rounded-full border border-slate-300 focus:outline-none focus:border-slate-400 text-slate-800 text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#CCFF00] hover:bg-[#b8e600] text-slate-900 font-semibold px-8 py-2 rounded-full transition-all duration-200 cursor-pointer"
                            >
                                Search
                            </button>
                        </form>

                        <p className="text-xs text-slate-500 leading-normal">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-16">
                        <div className="space-y-3">
                            <a href="#" className="block text-slate-800 hover:text-slate-950 font-medium text-sm">
                                Featured Courses
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Featured Categories
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Business
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                IT
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Design
                            </a>
                        </div>

                        <div className="space-y-3">
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Development
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Marketing
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Photography
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Finance
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Sport
                            </a>
                        </div>

                        <div className="space-y-3 col-span-2 sm:col-span-1">
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Become a Creator
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Affiliate Program
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Contact
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                Help
                            </a>
                            <a href="#" className="block text-slate-600 hover:text-slate-900 text-sm">
                                About
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© 2023 ByteSpace. All rights reserved.</p>
                    <div className="flex items-center gap-6">
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