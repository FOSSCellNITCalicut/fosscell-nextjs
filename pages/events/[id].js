import axios from 'axios'
import parse from 'html-react-parser'
import styles from '@/styles/EventDetails.module.css'

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
  
  const ret = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.SITE}/posts/${params.id}`);
  const data = await ret.data;
  let newsData = await ret.data;
  newsData =  {
      id : newsData.ID,
      date : newsData.date,
      title : newsData.title,
      description : newsData.content
    }
  return {
    props : {
      newsData,
    }
  }
}


export default function EventDetails({newsData}) {
    return (
      <div className={styles['container']}>
        <div className={styles['event-container']}>
            <h3 className={styles['event-card-heading']}>
                {parse(newsData.title)}
            </h3>
            <ParseDate date={newsData.date} />
            <div className={styles['event-card-desc']}>
                {parse(newsData.description)}
            </div>
            {/* <p className={styles['event-card-desc']}>
            </p> */}
        </div>
      </div>
    )
}