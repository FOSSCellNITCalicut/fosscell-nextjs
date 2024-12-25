import styles from '@/styles/Form.module.css'
import axios from 'axios'
import Link from 'next/link';
import parse from 'html-react-parser'
import { useState, useEffect } from 'react';
import { useEventsPageContext } from '@/components/EventContext';
import ClickHereSvg from '@/components/ClickhereSvg';


export async function getServerSideProps() {
  return {
    props: {
      site : process.env.SITE
    }
  }
}

export default function Events({site}) {
    // const [loading, setLoading] = useState(true);
    // const [newsData, setNewsData] = useState(null);
    // const [pageNo, setPageNo] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    const {newsData, setNewsData, loading, setLoading, pageNo, setPageNo, totalPages, setTotalPages} = useEventsPageContext();
      

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
            description : news.content,
            image: news.featured_image
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
        <div className={styles['container']}>
          <div className={styles['event-list']}>
            <div className={styles['form-container']}>
          {/* <iframe style="border:none;width:100%;" id="git-workshop-registration-qiojbl-1-1-1-2" src="https://opnform.com/forms/git-workshop-registration-qiojbl-1-1-1-2"></iframe><script type="text/javascript" onload="initEmbed('git-workshop-registration-qiojbl-1-1-1-2')" src="https://opnform.com/widgets/iframe.min.js"></script>  */}
          <iframe
  className={styles['form-frame']}
  // style={{ border: "none", width: "100%", height: "100vh" }}
  id="git-workshop-registration-qiojbl-1-1-1-2"
  src="https://opnform.com/forms/git-workshop-registration-qiojbl-1-1-1-2"
></iframe>
<script
  type="text/javascript"
  onLoad="initEmbed('git-workshop-registration-qiojbl-1-1-1-2')"
  src="https://opnform.com/widgets/iframe.min.js"
></script>
              </div>
        </div>
        </div>  
        </>
    )
    }
