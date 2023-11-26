import { Link } from 'react-router-dom';
import './index.scss';
import LogoA from '../../assets/images/logo-a.png';
import LogoSubstitles from '../../assets/images/logo_sub.png';

const Sidebar = () => (
    <div className='nav-bar'>

{/* default home page */}

        <Link className='logo' to='/'>
            <img src={LogoA} alt="logo" />
            <img className="sub-logo" src={LogoSubstitles} alt="slobodan" />
        </Link>
    </div>
)

export default Sidebar