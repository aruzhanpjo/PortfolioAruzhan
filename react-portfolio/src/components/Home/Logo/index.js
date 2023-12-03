import './index.scss'
import LogoA from '../../../assets/images/logo-a.png'
import { useRef } from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    {/* one holds logo, other one is transparent*/}
    return ( 
        <div className="logo-container">
            <img className="solid-logo" src={LogoA} alt="a"/>
                <svg
                    width="500px"
                    height="500px"
                    version="1.1"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                    //xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <g
                    className='svg-container'
                    stroke="none"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                    >
                        <path d="M1275 4580 c-231 -36 -432 -155 -613 -360 -280 -318 -469 -762 -571
-1340 -176 -991 -83 -1875 260 -2455 73 -125 205 -267 300 -322 177 -105 412
-128 616 -61 220 72 408 284 533 600 25 66 40 74 40 24 0 -49 25 -171 49 -240
57 -162 173 -301 305 -367 170 -84 398 -78 592 16 121 59 189 130 261 275 98
198 137 381 138 655 0 177 -2 197 -28 298 -15 59 -35 123 -43 142 l-15 36 -47
-39 c-98 -81 -194 -123 -285 -123 -132 -1 -215 84 -267 274 -36 132 -41 203
-49 852 -5 352 -14 721 -21 820 -17 281 -65 571 -120 736 -26 76 -135 260
-204 342 -82 99 -214 168 -416 217 -98 24 -321 34 -415 20z m444 -1356 c109
-59 159 -171 168 -374 6 -150 -9 -246 -68 -425 -99 -300 -286 -605 -511 -833
-211 -214 -420 -309 -584 -266 -111 28 -168 85 -212 207 -23 65 -26 87 -27
222 0 175 13 251 81 455 99 298 261 563 480 786 99 102 170 157 254 199 84 42
124 54 202 63 86 10 157 -1 217 -34z"/>
                    </g>
                </svg>
        </div>
    )
}

export default Logo;




