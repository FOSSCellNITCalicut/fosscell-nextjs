import styles from '@/styles/Events.module.css'
import axios from 'axios'
import Link from 'next/link';
import parse from 'html-react-parser'
import { useState, useEffect } from 'react';


export async function getServerSideProps() {
  return {
    props: {
      site : process.env.SITE
    }
  }
}

function ParseDate({date}) {
    let formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    // hour: "2-digit",
    // minute: "2-digit",
    // hour12: false
    })
    return (
    <p className={styles['event-card-date']}>
        {formattedDate}
    </p>
    )
}

export default function Events({site}) {
    const [loading, setLoading] = useState(true);
    const [newsData, setNewsData] = useState(null);
    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

useEffect(() => {
    async function loadData() {
        const ret = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/?number=6&page=${pageNo}`);
        let response = await ret.data;
        let data = await response.posts.slice(0, 6);
        data =  await data.map((news) => {
          return {
            id : news.ID,
            date : news.date,
            title : news.title,
            description : news.content
          }
        })
      setLoading(false);
      setNewsData(data.length === 0 ? null : data);
      setTotalPages(parseInt((response.found + 5)/6));
    }
    loadData();
}, [pageNo])



const nextPage = () => {
  if (pageNo < totalPages) {
    setPageNo(pageNo + 1);
    setLoading(true);
    setNewsData(null);
  }
}

const prevPage = () => {
    if (pageNo > 1) {
        setPageNo(pageNo - 1);
        setLoading(true);
        setNewsData(null);
    }
}

    

    return (
        <>
        <div className={styles['event-list']}>
                
            {
              loading && <div className={styles['loading-wrapper']}>
                <div className={styles['loading-spinner']}></div>
                </div>
            }
            { newsData && 

                ( 
                    newsData.map((news) => {
                      let ret = null
                      if (news) {
                        ret = (
                      <Link
                      key={news.id}
                      href={`/events/${news.id}`}
                      passHref
                      className={styles['event-card']}
                      >
                            <ParseDate date={news.date} />
                            <h3 className={styles['event-card-heading']}>
                                {parse(news.title)}
                            </h3>
                            <div className={styles['event-card-desc']}>
                              {parse(news.description)}
                            </div>
                      </Link>
                        )
                      }
                      return ret;
                    })
                 )
            }
        <div className={styles['nav-bar']}>
            <button className={`${styles['button']} ${pageNo == 1 ? styles['button-inactive'] : ''}`} onClick={prevPage}>Prev</button>
            <button className={`${styles['button']} ${pageNo === totalPages ? styles['button-inactive'] : ''}`} onClick={nextPage}>Next</button>
        </div>
        </div>  
        </>
    )
    }
