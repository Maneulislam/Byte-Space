import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';


const RootLayout = () => {
    return (
        <div>


            <Navbar />


            <div>

                <main className="flex-grow">
                    <Outlet />
                </main>
            </div>


            <Footer />

        </div>

    );
};

export default RootLayout;