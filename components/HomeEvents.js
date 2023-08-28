import styles from '@/styles/HomeEvents.module.css'
import { useState, useEffect } from 'react';
import {AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import Link from 'next/link'
import parse from 'html-react-parser'


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



export default function HomeEvents({newsData}) {


const [cardsPerPage, setCardPerPage] = useState(1);
const [currentPage, setCurrentPage] = useState(0);
let totalPages = 6 / cardsPerPage;



useEffect(() => {
    const handleCardsPerPage = () => {
        setCardPerPage(window.innerWidth > 800 ? 3 : window.innerWidth > 600 ? 2 : 1);
    }
    handleCardsPerPage();
    window.addEventListener('resize', handleCardsPerPage);
    return  () => {
        window.removeEventListener('resize', handleCardsPerPage)

    }
}, [])

const goToNextPage = () => {
  setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
};


const goToPreviousPage = () => {
  setCurrentPage((prevPage) =>
    prevPage === 0 ? totalPages - 1 : prevPage - 1
  );
};

const startIndex = currentPage * cardsPerPage;
const newsCards = newsData.slice(startIndex, startIndex + cardsPerPage);

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
            <div className={styles['event-list']}>
                {
                    newsCards.map((news) => {
                      let ret = null
                      if (news) {
                        ret = (
                      <Link
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

                }
            </div>
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