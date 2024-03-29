import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image'
import {useRouter} from 'next/router'
import {
    BsDiscord,
    BsInstagram,
    BsTwitter,
    BsTelegram,
    BsFacebook, 
    BsLinkedin,
    BsMastodon
  } from "react-icons/bs";
import { useEventContext } from './EventContext';
export default function Footer() {
    
    const {pathname} = useRouter();
    const [mobile, setMoblie] = useState(false);
    const {hid} = useEventContext();
    return (
        <div className={`${styles['footer']} ${!hid && pathname === '/' ? styles['newsletter-long'] : ""}`}>
            <div className={styles['footer-navbar']}>
                <Link
                 href='/'
                 passHref
                 className={styles['footer-logo']}
                 >
                        <Image
                            src={"/images/logo.svg"}
                            alt={"FOSSCell logo"}
                            layout="intrinsic"
                            width={230}
                            height={84}
                            objectFit="scale-down" 
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
            </div>
            {/* <div className={styles['footer-social-contact-wrapper']}> */}
                <div className={styles['social-media-wrapper']}>
                    <h1 className={styles['social-contact-heading']}>Social Media</h1>
                    <Link href="mailto:fosscell@nitc.ac.in" className={styles['footer-mail-mobile']}>
                        fosscell@nitc.ac.in
                    </Link>
                    <div className={styles['social-media-list']}>
                        <Link href="https://mastodon.social/@FOSSCell@floss.social">
                            <BsMastodon className={styles["logo"]} size="20" />
                        </Link>
                        <Link href="https://www.instagram.com/fosscellnitc/">
                            <BsInstagram className={styles["logo"]} size="20" />
                        </Link>
                        <Link href="https://twitter.com/fosscell">
                            <BsTwitter className={styles["logo"]} size="20" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/foss-cell-nitc/">
                            <BsLinkedin className={styles["logo"]} size="20" />
                        </Link>                        
                    </div>  

                </div>  
                <div className={styles['contact-wrapper']}>
                    <h1 className={styles['social-contact-heading']}>Contact Us</h1>
                    <Link href="mailto:fosscell@nitc.ac.in">
                        fosscell@nitc.ac.in
                    </Link>
                </div>
            {/* </div> */}
        </div>
        
    )
}