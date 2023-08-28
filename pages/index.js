import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import HomeEvents from '@/components/HomeEvents'
import axios from 'axios'

// const inter = Inter({ subsets: ['latin'] });


export async function getServerSideProps() {
  const ret = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.SITE}/posts/`);
  const data = await ret.data;
  let newsData = await data.posts.slice(0, 6);
  newsData =  await newsData.map((news) => {
    return {
      id : news.ID,
      date : news.date,
      title : news.title,
      description : news.content
    }
  })
  return {
    props : {
      newsData,
    }
  }
}

export default function Home({newsData}) {
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
                      alt={"Hero Image"}
                      layout="intrinsic"
                      width={587}
                      height={460}
                      objectFit="scale-down" 
                  />
          </div>
      </div>
      <HomeEvents newsData={newsData}/>
    </div> 
  )
}
