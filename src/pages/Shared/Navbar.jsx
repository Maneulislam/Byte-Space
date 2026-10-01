import { FiShoppingBag, FiMenu } from 'react-icons/fi';
import Logo from '../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-3 py-2 border-none outline-none shadow-none rounded-none focus:outline-none focus:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent bg-transparent! transition-all ${isActive
                            ? 'text-white font-bold'
                            : 'text-white/80 hover:text-white font-medium'
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        `px-3 py-2 border-none outline-none shadow-none rounded-none focus:outline-none focus:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent bg-transparent! transition-all ${isActive
                            ? 'text-white font-bold'
                            : 'text-white/80 hover:text-white font-medium'
                        }`
                    }
                >
                    Courses
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/creators"
                    className={({ isActive }) =>
                        `px-3 py-2 border-none outline-none shadow-none rounded-none focus:outline-none focus:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent bg-transparent! transition-all ${isActive
                            ? 'text-white font-bold'
                            : 'text-white/80 hover:text-white font-medium'
                        }`
                    }
                >
                    Creators
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-[#003BE2] text-white shadow-md py-4">
            <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white p-2">
                            <FiMenu size={24} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-[#003BFF] rounded-box w-52 text-white border border-blue-500"
                        >
                            {navLinks}
                            <div className="divider my-1 border-blue-400"></div>
                            <li><Link to="/signin">Sign In</Link></li>
                            <li><Link to="/join">Join Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <Logo />
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-sm sm:text-base">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-4 sm:gap-6">
                    <NavLink to="/signin" className="hover:text-opacity-80 font-medium text-sm sm:text-base hidden sm:inline-block">
                        Sign In
                    </NavLink>
                    <NavLink to="/join" className="hover:text-opacity-80 font-medium text-sm sm:text-base">
                        Join Us
                    </NavLink>
                    <button className="btn btn-ghost btn-circle text-white hover:bg-blue-700">
                        <FiShoppingBag size={22} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;