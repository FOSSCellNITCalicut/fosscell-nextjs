import { useState } from "react";
import styles from '@/styles/People.module.css'

// import Aabid from "@/public/images/Team/Aabid Mohamed.jpg"
import Abin from "@/public/images/Team/Abin_Latheef.jpg"
import Afraz from "@/public/images/Team/Afraz Ahmed.jpeg"
import Alen from "@/public/images/Team/Alen_Antony.jpg"
import Aravind from "@/public/images/Team/Aravind I M.jpeg"
import Arjun from "@/public/images/Team/Arjun_M_Murali.jpeg"
import Bhukya from "@/public/images/Team/Bhukya Chetan Ram.jpg"
import Cliford from "@/public/images/Team/Cliford.jpg"
import Hadif from "@/public/images/Team/Hadif_Yassin_Hameed.JPG"
import Hemanth from "@/public/images/Team/Hemanth Chodisetti.jpg"
import JoelJohn from "@/public/images/Team/Joel George John.jpg"
import John from "@/public/images/Team/John_D.png"
import Juby from "@/public/images/Team/Juby Johnson.JPG"
import Madhav from "@/public/images/Team/Madhav_Prabhu.jpg"
import Afthab from "@/public/images/Team/Mohamed_Afthab.jpg"
import Jaseem from "@/public/images/Team/Muhammed Jaseem.jpg"
import Neena from "@/public/images/Team/Neena_MS.jpg"
import Piyush from "@/public/images/Team/Piyush Soni.jpg"
import Pranav from "@/public/images/Team/Pranav Prashant.jpeg"
import PranavNair from "@/public/images/Team/Pranav R Nair.jpg"
import Rajat from "@/public/images/Team/Rajat.jpg"
import Simmon from "@/public/images/Team/Simon Shaji.jpeg"
import Sinadin from "@/public/images/Team/Sinadin Shan.jpg"
import Sree from "@/public/images/Team/Sreevalsan.jpeg"
import Vedasree from "@/public/images/Team/Vedasree Rodi.jpeg"
import Vimal from "@/public/images/Team/Vimal Joseph.JPG"
import Ameen from "@/public/images/Team/Mohammed Ameen.jpg"
import Unnati from "@/public/images/Team/Unnati.jpg"
import Nazim from "@/public/images/Team/Nazim Jabir.jpeg"
import Chacko from "@/public/images/Team/Chacko James.jpeg"
import Nithin from "@/public/images/Team/Nithin Manoj.jpeg"
import Vysakh from "@/public/images/Team/Vysakh Premkumar.jpeg"

import Image from 'next/image'

const alumni =[
    {
    id:1,
    name:"Abin Latheef",
    position:"Alumni",
    image:Abin
},
{
    id:2,
    name:"Aravind I M",
    position:"Alumni",
    image:Aravind
},
{
    id:3,
    name:"Arjun M Murali",
    position:"Alumni",
    image:Arjun
},
{
    id:4,
    name:"Cliford",
    position:"Alumni",
    image:Cliford
},
{
    id:5,
    name:"Hadif Yassin Hameed",
    position:"Alumni",
    image:Hadif
},
{
    id:6,
    name:"John D",
    position:"Alumni",
    image:John
},
{
    id:7,
    name:"Muhammed Jaseem",
    position:"Alumni",
    image:Jaseem
},
{
    id:8,
    name:"Rajat",
    position:"Alumni",
    image:Rajat
},
{
    id:9,
    name:"Sinadin Shan",
    position:"Alumni",
    image:Sinadin
},
{
    id:10,
    name:"Vimal Joseph",
    position:"Alumni",
    image:Vimal
},
{
    id:11,
    name : "Nazim Jabir",
    position:"Alumni",
    image:Nazim
},
{
    id:12,
    name: "Nithin Puthalath",
    position:"Alumni",
    image:Nithin
}
]

const member =[
    {
        id:1,
        name:"Mohamed Afthab",
        position:"Secretary",
        image:Afthab
    },
    {
        id:2,
        name:"Madhav Prabhu C M",
        position:"Joint Secretary",
        image:Madhav
    },
    {
        id:3,
        name:"Mohammed Ameen",
        position:"Treasurer",
        image:Ameen
    },
    {
        id:4,
        name:"Vysakh Premkumar",
        position:"Mentor",
        image:Vysakh
    },
    {
        id:5,
        name:"Sreevalsan S",
        position:"Event Coordinator",
        image:Sree
    },
    {
        id:6,
        name:"Neena M S",
        position:"Content and Outreach",
        image:Neena
    },
    {
        id:7,
        name:"Hemanth Chodisetti",
        position:"Content and Outreach",
        image:Hemanth
    },
    {
        id:8,
        name:"Afraz Ahmed",
        position:"Marketing Head",
        image:Afraz
    },
    {
        id:9,
        name:"Joel George John",
        position:"Media Head",
        image:JoelJohn
    },
    {
        id:10,
        name:"Alen Antony",
        position:"Member",
        image:Alen
    },
    {
        id:11,
        name:"Unnati",
        position:"Member",
        image:Unnati
    },
    {
        id:12,
        name:"Bhukya Chetan Ram",
        position:"Member",
        image:Bhukya
    },
    {
        id:13,
        name:"Juby Johnson",
        position:"Member",
        image:Juby
    },
    {
        id:14,
        name:"Piyush Soni",
        position:"Member",
        image:Piyush
    },
    {
        id:15,
        name:"Pranav Prashant",
        position:"Member",
        image:Pranav
    },
    {
        id:16,
        name:"Pranav R Nair",
        position:"Member",
        image:PranavNair
    },
    {
        id:17,
        name:"Simmon Mathew Shaji",
        position:"Member",
        image:Simmon
    },
    {
        id:18,
        name:"Vedasree Rodi",
        position:"Member",
        image:Vedasree
    },
    {
        id: 19,
        name:"Chacko James",
        position:"Member",
        image:Chacko
    }
]

export default function People() {
   const [members, setMembers] = useState(true); 

   const toggleMembers = () => {
    setMembers(true);
   }

   const toggleAlumni = () => {
    setMembers(false);
   }


   return (
    <div className={styles['people-container']}>
        <div className={styles['people-nav']}>
            <button className={`${styles['nav-button']} ${members ? styles['nav-active'] : ''}`} onClick={toggleMembers}>Members</button>
            <button className={`${styles['nav-button']} ${!members ? styles['nav-active'] : ''}`} onClick={toggleAlumni}>Alumni</button>
        </div>
        <div className={styles['people-list']}>
            {members && (
               member.map((member) => {
                return (
                    <div key={member.id} className={styles['member-card']}>
                        <div className={styles['image-wrapper']}>
                            <Image
                            className={styles['avatar']}
                            src={member.image}
                            alt={"profile"}
                            // layout="intrinsic"
                            width={150}
                            height={150}
                            // objectFit="scale-down" 
                        />
                        </div>
                        <h2 className={styles['member-name']}>{member.name}</h2>
                        <p className={styles['member-position']}>{member.position}</p>
                    </div>
                )
               }) 
            )}
            {!members && (
               alumni.map((member) => {
                return (
                    <div key={member.id} className={`${styles['member-card']} ${styles['alumni-card']}`}>
                        <div className={styles['image-wrapper']}>
                            <Image
                            className={styles['avatar']}
                            src={member.image}
                            alt={"profile"}
                            // layout="intrinsic"
                            width={150}
                            height={150}
                            // objectFit="scale-down" 
                        />
                        </div>
                        <h2 className={styles['member-name']}>{member.name}</h2>
                        {/* <p className={styles['member-position']} >{member.position} </p> */}
                    </div>
                )
               }) 
            )}
        </div>
    </div>
   )
}