import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import HomeEvents from '@/components/HomeEvents'

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {


  return (
    <div className={styles['home']}>
      <div className={styles['intro-container']}>
          <div className={styles['intro-passage']}>
              <h1 className={styles['intro-heading']}>
                  Free Software Community of NITC.
              </h1>
              <p className={styles['intro-desc1']}>
              FOSSCell is a technical club that promotes and strengthens the Free and Open Source Software ecosystem in NITC. 
              </p>
              <p className={styles['intro-desc2']}>
              Join us and make a difference.
              </p>
          </div>  
          <div
            className={styles['intro-image']}
            >
                  <Image
                      src={"/images/HeroImage.svg"}
                      alt={"FOSSCell logo"}
                      layout="intrinsic"
                      width={587}
                      height={460}
                      objectFit="scale-down" 
                  />
          </div>
      </div>
      <HomeEvents />
    </div> 
  )
}
