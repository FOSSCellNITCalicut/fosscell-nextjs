import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'


export default function Navbar() {
    const {pathname} = useRouter();
   return (
            <nav className={styles['navbar']}>
                <Link
                 href='/'
                 passHref
                 className={styles['nav-logo']}
                 >
                        <Image
                            src={"/images/logos/fosscell.png"}
                            alt={"FOSSCell logo"}
                            layout="intrinsic"
                            width={248}
                            height={78}
                            objectFit="scale-down" 
                        />
                 </Link>
                 <div className={styles['nav-menu']}>
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
            </nav>  
   ) 
}