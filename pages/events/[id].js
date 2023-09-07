import axios from 'axios'
import parse from 'html-react-parser'
import styles from '@/styles/EventDetails.module.css'
import { useState, useEffect } from 'react'

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

export async function getServerSideProps({params}) {
  
  return {
    props : {
      params,
      site : process.env.SITE
    }
  }
}


export default function EventDetails(props) {

  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState(null);

useEffect(() => {
    async function loadData() {
        const ret = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${props.site}/posts/${props.params.id}`);
        const data = await ret.data;
        let newsData = await ret.data;
        newsData =  {
            id : newsData.ID,
            date : newsData.date,
            title : newsData.title,
            description : newsData.content
          }
      setLoading(false);
      setNewsData(newsData);
    }
    loadData();
}, [])

    return (
      <div className={styles['container']}>
          <div className={styles['event-container']}>
              {loading && <div className={styles['loading-wrapper']}>
                <div className={styles['loading-spinner']}></div>
                </div>

              }
              {newsData && 
              <h3 className={styles['event-card-heading']}>
                  {parse(newsData.title)}
              </h3>
              }
              {newsData && 
              <ParseDate date={newsData.date} />
              }
              {newsData && 
              <div className={styles['event-card-desc']}>
                  {parse(newsData.description)}
              </div>
              }
          </div>
      </div>
    )
}