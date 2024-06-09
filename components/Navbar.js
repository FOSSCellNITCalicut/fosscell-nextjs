import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import { FaBeer } from "react-icons/fa";
// import {GiHamburgerMenu} from "react-icons/gi"
import {SlMenu} from "react-icons/sl"
import {IoMdClose} from "react-icons/io"


export default function Navbar() {
    const {pathname} = useRouter();
    const [navVisibility, setNavVisibility] = useState(false);
    const [mobile, setMoblie] = useState(true);

    useEffect(() => {

      const handleResize = () => {
         setMoblie(window.innerWidth <= 1330);
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
       };

    }, [])

    const toggleNavVisibility = () => {
      if (navVisibility === true) {
         setNavVisibility(false);
      }
      else {

         setNavVisibility(true);
      }
    }

    const hiddenNavMenu = `${styles['nav-menu']} ${styles['hidden']}`
      
   return (
      <>
            <nav className={styles['navbar']}>
                <Link
                 href='/'
                 passHref
                 className={mobile ? styles['nav-logo-mobile'] : styles['nav-logo']}
                 >
                        <Image
                            src={"/images/logo.svg"}
                            alt={"FOSSCell logo"}
                            layout="intrinsic"
                            width={230}
                            height={84}
                            objectFit="scale-down" 
                            priority={true}
                        />
                 </Link>
                 {
                  !mobile && (

                     <div className={styles['nav-menu']}>
                     {/* <div className={styles['nav-menu']}> */}
                     <Link
                        className={pathname === '/' ? styles['nav-link-active'] : styles['nav-link']}
                        href='/'
                     >
                        Home
                     </Link>
                     <Link
                        className={pathname === '/events' ? styles['nav-link-active'] : styles['nav-link']}
                        href='/events'
                     >
                        Events
                     </Link>
                     <a
                     className={pathname === '/wiki' ? styles['nav-link-active'] : styles['nav-link']}
                     href='https://newsletter.fosscell.org/'
                     target='_blank'
                     rel='noopener noreferrer'
                     >
                     Blog
                     </a>
                     <a
                     className={pathname === '/wiki' ? styles['nav-link-active'] : styles['nav-link']}
                     href='https://wiki.fosscell.org'
                     target='_blank'
                     rel='noopener noreferrer'
                     >
                     Wiki
                     </a>
                     <Link
                        className={pathname === '/people' ? styles['nav-link-active'] : styles['nav-link']}
                        href='/people'
                     >
                        Our People
                     </Link>
                     <Link
                        className={pathname === '/whoweare' ? styles['nav-link-active'] : styles['nav-link']}
                        href='/whoweare'
                     >
                        Who We Are
                     </Link>
                     </div> 
                  )
                 }
                 {
                  mobile && (
                  <div className={styles['hamburger']}>
                     {navVisibility ? 
                     (
                        // <IoCloseSharp />
                        <IoMdClose
                        onClick={toggleNavVisibility}
                        size="30"
                        />
                     )
                     : 
                     (
                        <SlMenu
                        onClick={toggleNavVisibility}
                        size="30"
                        />
                     )
                     }

                  </div>
                  )
                 }
            </nav>  
            {mobile && (
            <nav className={`${styles['nav-menu-mobile']} ${navVisibility ? '' : styles['nav-menu-mobile-hidden']}`}>
                 <Link
                    className={pathname === '/' ? styles['nav-link-mobile-active'] : styles['nav-link-mobile']}
                    href='/'
                     onClick={toggleNavVisibility}
                 >
                    Home
                 </Link>
                 <Link
                    className={pathname === '/events' ? styles['nav-link-mobile-active'] : styles['nav-link-mobile']}
                    href='/events'
                     onClick={toggleNavVisibility}
                 >
                    Events
                 </Link>
                 <a
                     className={pathname === '/wiki' ? styles['nav-link-mobile-active'] : styles['nav-link-mobile']}
                     href='https://newsletter.fosscell.org/'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                  Blog
                  </a>
                 <a
                     className={pathname === '/wiki' ? styles['nav-link-mobile-active'] : styles['nav-link-mobile']}
                     href='https://wiki.fosscell.org'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                  Wiki
                  </a>
                 <Link
                    className={pathname === '/people' ? styles['nav-link-mobile-active'] : styles['nav-link-mobile']}
                    href='/people'
                     onClick={toggleNavVisibility}
                 >
                    Our People
                 </Link>
                 <Link
                    className={pathname === '/whoweare' ? styles['nav-link-mobile-active'] : styles['nav-link-mobile']}
                    href='/whoweare'
                     onClick={toggleNavVisibility}
                 >
                    Who We Are
                 </Link>
            </nav>
            )}
   </>
   ) 
}