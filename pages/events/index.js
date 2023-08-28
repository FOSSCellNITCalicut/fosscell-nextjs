import styles from '@/styles/Events.module.css'
import axios from 'axios'
import Link from 'next/link';
import parse from 'html-react-parser'


export async function getServerSideProps() {
  const ret = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.SITE}/posts/`);
  const data = await ret.data;
  const newsData =  await data.posts.map((news) => {
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

export default function Events({newsData}) {
    console.log(newsData);
    return (
        <div className={styles['event-list']}>
                {
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

                }
        </div>  
    )
    }
