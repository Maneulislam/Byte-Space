import { Outlet } from 'react-router';

const AuthenticationLayOut = () => {
    return (
        <div className=" w-full flex items-center justify-center">
            <Outlet></Outlet>
        </div>
    );
};

export default AuthenticationLayOut;