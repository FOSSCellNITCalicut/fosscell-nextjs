import styles from '@/styles/WhoWeAre.module.css'
import Image from 'next/image'
export default function WhoWeAre() {
   return (
    <div className={styles['wwa-container']}>
        <div className={styles['sub-container']}>
          <div className={styles['wwa-text-wrapper']}>
            <h1 className={styles['wwa-heading']}>
                Who We Are
            </h1>   
            <p className={styles['wwa-text-desc']}>
                We are FOSSCell NITC -  a group of students from the National Institute of Technology Calicut, who are passionate about Free and Open-Source Software (FOSS). Our goal is to spread the knowledge of Free Software and raise awareness about the four fundamental freedoms that come bundled with each of these softwares. Our community is a bunch of enthusiastic free software evangelists and hobbyist developers who are committed to promoting and developing free software for the greater good.
            </p>
          </div>
          <div
            className={styles['wwa-image']}
            >
                  <Image
                      src={"/images/wwad1.png"}
                      alt={"Who We Are"}
                      layout="intrinsic"
                      width={617}
                      height={439}
                      objectFit="scale-down" 
                  />
          </div>
        </div>
        <div className={styles['sub-container']}>
          <div
            className={styles['wwa-image']}
            >
                  <Image
                      src={"/images/wwad2.png"}
                      alt={"What We Do"}
                      layout="intrinsic"
                      width={643}
                      height={439}
                      objectFit="scale-down" 
                  />
          </div>
          <div className={styles['wwa-text-wrapper']}>
            <h1 className={styles['wwa-heading']}>
                What We Do
            </h1>   
            <p className={styles['wwa-text-desc']}>
                Through workshops, training sessions, and software development, we empower individuals to explore FOSS, develop new skills, and make a meaningful impact. We foster collaboration, community building, and inclusivity, organizing events like FOSSMeet to bring together global experts who share their knowledge and insights.
            </p>
          </div>
        </div>
    </div>
   ) 
}