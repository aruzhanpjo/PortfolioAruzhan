import './index.scss'
import LogoA from '../../../assets/images/logo-a.png'

const Logo = () => {

    {/* one holds logo, other one is transparent*/}
    return (
        <div className="logo-container">
            <img className="solid-logo" src={LogoA} alt="a"/>
        </div>
    )
}

export default Logo;