import styles from '@/styles/HomeEvents.module.css'
import { useState, useEffect } from 'react';
import {AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import Link from 'next/link'
export default function HomeEvents() {

const newsData = [
  {
    id : 1, 
    date : "April 1, 2100",
    title : "news1", 
    description : "descdescdescdescdescdescdescdescdescdesc"
  },
  {
    id : 2, 
    date : "April 1, 2100",
    title : "news2", 
    description : "descdescdescdescdescdescdescdescdescdesc"
  },
  {
    id : 3, 
    date : "April 1, 2100",
    title : "news3", 
    description : "descdescdescdescdescdescdescdescdescdesc"
  },
  {
    id : 4, 
    date : "April 1, 2100",
    title : "News 4's name is kinda big than usual headings", 
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae dui sodales, vehicula dui at, aliquam nibh. Nunc pellentesque vulputate elementum. Maecenas et ultrices nisl, a mattis metus. Aliquam tortor ex, sodales vel tincidunt eu, ullamcorper at nibh. Sed nunc urna, lacinia a efficitur at, pretium nec lorem. Nam faucibus risus ac mauris viverra, eu ullamcorper tortor elementum. Praesent libero elit, porttitor et tempus in, dapibus eu sapien. Pellentesque tincidunt vitae velit in ultrices. Duis vulputate rhoncus imperdiet. Nullam fringilla neque libero, ut mollis nulla placerat in. Ut placerat odio malesuada dui gravida consequat a eget ex. Nunc nunc libero, porttitor eu tellus ut, sodales tempor dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec fringilla leo id diam volutpat, at pharetra nisi scelerisque. Proin quis turpis consectetur, molestie turpis vitae, convallis dui"
  },
  {
    id : 5, 
    date : "April 1, 2100",
    title : "news5", 
    description : "descdescdescdescdescdescdescdescdescdesc"
  },
  {
    id : 6, 
    date : "April 1, 2100",
    title : "news6", 
    description : "descdescdescdescdescdescdescdescdescdesc"
  }
]
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
                    newsCards.map((news) =>
                    (
                      <Link
                      href={`/events/${news.id}`}
                      passHref
                      className={styles['event-card']}
                      >
                            <p className={styles['event-card-date']}>
                                {news.date}
                            </p>
                            <h3 className={styles['event-card-heading']}>
                                {news.title}
                            </h3>
                            <p className={styles['event-card-desc']}>
                                {news.description}
                            </p>
                      </Link>
                    ))
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