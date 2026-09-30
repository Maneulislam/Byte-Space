import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';


const RootLayout = () => {
    return (
        <div>


            <Navbar />


            <div>

                <main className="flex-grow">
                    <Outlet />
                </main>
            </div>




        </div>

    );
};

export default RootLayout;