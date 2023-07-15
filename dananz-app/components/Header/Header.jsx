import Image from 'next/image'
import logo from '../../public/icons/logo.svg'
import arrowDown from '../../public/icons/arrow-dwn.svg'
import imageBgHeader from '../../public/icons/bg-1.svg'
import { HiMenuAlt3 } from 'react-icons/hi';
import './Header.scss'
import Link from 'next/link';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__wrap'>
                <div className='header__logo-wrap'>
                    <Image src={logo} alt="logo" className='header__logo-img' />
                </div>
                <ul className='header__ul'>
                    <Link href='/' className='header__li'>Home</Link>
                    <Link href='pages/about' className='header__li'>About us</Link>
                    <Link href='pages/service' className='header__li'>Service</Link>
                    <Link href='pages/page' className='header__li'>Page<Image src={arrowDown} alt="стрелка" className='header__arrow-down'/></Link>
                    <Link href='pages/blog' className='header__li'>Blog<Image src={arrowDown} alt="стрелка" className='header__arrow-down'/></Link>
                </ul>
                <button className='header__button'>
                    <span className='header__button-span'>Contact us</span>
                </button>
            </div>
            <button className=' header__button header__burger-menu'>
            <HiMenuAlt3 className='header__burger-img'/>
            </button>
            <Image src={imageBgHeader} alt='картинка фона header' className='header__bg-image'/>
        </header>
    )
}
