import { Link } from 'react-router';
import logo from '../../assets/Logo.png'
const Logo = () => {
    return (
        <Link to={'/'}>
            <div className='flex items-center gap-2 '>
                <img className='w-9 h-9' src={logo} alt="" />
                <h3 className='text-2xl font-extrabold items-end -mb-3'>
                    ByteSpace
                </h3>
            </div>
        </Link>
    );
};

export default Logo;