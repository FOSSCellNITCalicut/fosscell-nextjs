import styles from '@/styles/HomeEvents.module.css'
import { useState, useEffect } from 'react';
import {AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import Link from 'next/link'
import parse from 'html-react-parser'
import axios from 'axios'
import { useEventContext } from './EventContext';


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



export default function HomeEvents({site}) {

// const [loading, setLoading] = useState(true);
// const [newsData, setNewsData] = useState(null);
const {newsData, setNewsData, loading, setLoading, currentPage, setCurrentPage} = useEventContext();
const [cardsPerPage, setCardPerPage] = useState(1);
// const [currentPage, setCurrentPage] = useState(0);
const [hidden, setHidden] = useState(false);
let totalPages = 6 / cardsPerPage;


useEffect(() => {
    const handleCardsPerPage = () => {
        setCardPerPage(window.innerWidth > 900 ? 3 : window.innerWidth > 700 ? 2 : 1);
    }
    handleCardsPerPage();
    async function loadData() {
        const ret = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/?number=6&page=1`);
        let data = await ret.data;
        data = await data.posts.slice(0, 6);
        data =  await data.map((news) => {
          return {
            id : news.ID,
            date : news.date,
            title : news.title,
            description : news.content
          }
        })
      setLoading(false);
      setNewsData(data);
    }
    window.addEventListener('resize', handleCardsPerPage);
    if (!newsData) {
      loadData();
    }
    return  () => {
        window.removeEventListener('resize', handleCardsPerPage)
    }
}, [])




const goToNextPage = () => {
  setHidden(true); 
  setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  setTimeout(() => {
     setHidden(false); 
  }, 100);
};


const goToPreviousPage = () => {
  setHidden(true); 
  setCurrentPage((prevPage) =>
    prevPage === 0 ? totalPages - 1 : prevPage - 1
  );
  setTimeout(() => {
     setHidden(false); 
  }, 100);
};

const startIndex = currentPage * cardsPerPage;

return (
    <div className={styles['event-container']}>
        <h2 className={styles['event-heading']}>
            News & Events
        </h2>
        <div className={styles['event-list-wrapper']}> 

            <AiOutlineDoubleLeft
            className={styles['next-prev-button']}
            onClick={goToPreviousPage}
            size="30"
            />
            {
              loading && <div className={styles['loading-wrapper']}>
                <div className={styles['loading-spinner']}></div>
                </div>
            }
            {
              newsData && (

              <div className={styles['event-list']}
              >
                  {
                      newsData.slice(startIndex, startIndex + cardsPerPage).map((news) => {
                        let ret = null
                        if (news) {
                          ret = (
                        <Link
                        key={news.id}
                        href={`/events/${news.id}`}
                        passHref
                        className={`${styles['event-card']} ${hidden ? styles['hidden-card'] : ""}`}
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

                  }
              </div>
              )
            }
            <AiOutlineDoubleRight
            className={styles['next-prev-button']}
            onClick={goToNextPage}
            size="30"
            />
        </div>
        <Link className={styles['event-read-more']} href='/events'>
           Read More 
        </Link>

    </div>
)
}