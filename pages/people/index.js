import { useState } from "react";
import styles from '@/styles/People.module.css'
import { Ameen,Vimal,Vedasree,Sree,Sinadin,Simmon,Rajat,PranavNair,
    Pranav,Piyush,Neena,Jaseem,Afthab,Madhav,Juby,John,JoelRobin,JoelJohn,Hemanth,Hadif,
    Cliford,Aabid,Abin,Afraz,Alen,Aravind,Arjun,Bhukya } from "./images.js";

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
        name:"Joel Robin P",
        position:"Event Coordinator",
        image:JoelRobin
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
        name:"Abid Mohamed",
        position:"Member",
        image:Aabid
    },
    {
        id:11,
        name:"Alen Antony",
        position:"Member",
        image:Alen
    },
    {
        id:12,
        name:"Bhukya CHtan Ram",
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
                    <div className={styles['member-card']}>
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
                    <div className={styles['member-card']}>
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
        </div>
    </div>
   )
}