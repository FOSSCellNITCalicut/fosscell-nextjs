import { useState } from "react";
import styles from '@/styles/People.module.css'

// import Aabid from "@/public/images/Team/Aabid Mohamed.jpg"

//B23s and B22s

import Akhil from "@/public/images/Team/Akhil_T.jpg"
import Jumana from "@/public/images/Team/Jumana.jpg"
import Abhishek from "@/public/images/Team/Abhishek_Mohan_S.jpg"
import Adil from "@/public/images/Team/Adil_Abdul_Jabbar.jpg"
import AKSHAY_RAJ_P from "@/public/images/Team/AKSHAY_RAJ_P.jpg"
import arun_natarajan from "@/public/images/Team/arun_natarajan.jpg"
import Harshini_Babu from "@/public/images/Team/Harshini_Babu.jpg"
import noufal_rahim from "@/public/images/Team/noufal_rahim.jpg"
import Prithvi_G_Bhat from "@/public/images/Team/Prithvi_G_Bhat.jpg"
import Vinit_Keshri from "@/public/images/Team/Vinit_Keshri.jpg"
import Vivek from "@/public/images/Team/Vivek.jpg"
import Arjith_Lal from "@/public/images/Team/Arjith_Lal.jpg"
import Rehan from "@/public/images/Team/Rehan.jpg"

// B21s
import Afraz from "@/public/images/Team/Afraz Ahmed.jpeg"
import Ameen from "@/public/images/Team/Mohammed Ameen.jpg"
import Unnati from "@/public/images/Team/Unnati.jpg"
import Piyush from "@/public/images/Team/Piyush Soni.jpg"
import Pranav from "@/public/images/Team/Pranav Prashant.jpeg"
import Hemanth from "@/public/images/Team/Hemanth Chodisetti.jpg"

// B20s
import Juby from "@/public/images/Team/Juby Johnson.JPG"
import Madhav from "@/public/images/Team/Madhav_Prabhu.jpg"
import Afthab from "@/public/images/Team/Mohamed_Afthab.jpg"
import Chacko from "@/public/images/Team/Chacko James.jpeg"
import Neena from "@/public/images/Team/Neena_MS.jpg"

// B19s
import Abin from "@/public/images/Team/Abin_Latheef.jpg"
import Vysakh from "@/public/images/Team/Vysakh Premkumar.jpeg"

import Alen from "@/public/images/Team/Alen_Antony.jpg"
import Aravind from "@/public/images/Team/Aravind I M.jpeg"
import Arjun from "@/public/images/Team/Arjun_M_Murali.jpeg"
import Bhukya from "@/public/images/Team/Bhukya Chetan Ram.jpg"
import Cliford from "@/public/images/Team/Cliford.jpg"
import Hadif from "@/public/images/Team/Hadif_Yassin_Hameed.JPG"
import JoelJohn from "@/public/images/Team/Joel George John.jpg"
import John from "@/public/images/Team/John_D.png"

import Jaseem from "@/public/images/Team/Muhammed Jaseem.jpg"
import PranavNair from "@/public/images/Team/Pranav R Nair.jpg"
import Rajat from "@/public/images/Team/Rajat.jpg"
import Simmon from "@/public/images/Team/Simon Shaji.jpeg"
import Sinadin from "@/public/images/Team/Sinadin Shan.jpg"
import Sree from "@/public/images/Team/Sreevalsan.jpeg"
import Vedasree from "@/public/images/Team/Vedasree Rodi.jpeg"
import Vimal from "@/public/images/Team/Vimal Joseph.JPG"
import Nazim from "@/public/images/Team/Nazim Jabir.jpeg"
import Nithin from "@/public/images/Team/Nithin Manoj.jpeg"


import Image from 'next/image'


const alumni =[
{
    id:0,
    name:"Mohamed Afthab",
    position:"Alumni",
    image:Afthab
},
{
    id:1,
    name:"Madhav Prabhu C M",
    position:"Alumni",
    image:Madhav
},
{
    id:2,
    name:"Vysakh Premkumar",
    position:"Alumni",
    image:Vysakh
},
{
    id:3,
    name:"Sreevalsan S",
    position:"Alumni",
    image:Sree
},
{
    id:4,
    name:"Neena M S",
    position:"Alumni",
    image:Neena
},
{
    id:5,
    name:"Alen Antony",
    position:"Alumni",
    image:Alen
},
{
    id:6,
    name:"Juby Johnson",
    position:"Alumni",
    image:Juby
},
{
    id:7,
    name:"Simmon Mathew Shaji",
    position:"Alumni",
    image:Simmon
},
{
    id:8,
    name:"Chacko James",
    position:"Alumni",
    image:Chacko
},
{
    id:9,
    name:"Abin Latheef",
    position:"Alumni",
    image:Abin
},
{
    id:10,
    name:"Aravind I M",
    position:"Alumni",
    image:Aravind
},
{
    id:11,
    name:"Arjun M Murali",
    position:"Alumni",
    image:Arjun
},
{
    id:12,
    name:"Cliford",
    position:"Alumni",
    image:Cliford
},
{
    id:13,
    name:"Hadif Yassin Hameed",
    position:"Alumni",
    image:Hadif
},
{
    id:14,
    name:"John D",
    position:"Alumni",
    image:John
},
{
    id:15,
    name: "Nithin Puthalath",
    position:"Alumni",
    image:Nithin
}
]

const member = [
    {
        id: 0,
        name: "Mohammed Ameen",
        position: "Secretary",
        image: Ameen
    },
    {
        id: 1,
        name: "Hemanth Chodisetti",
        position: "Joint Secretary",
        image: Hemanth
    },
    {
        id: 2,
        name: "Adil",
        position: "Treasurer",
        image: Adil
    },
    {
        id: 3,
        name: "Afraz Ahmed",
        position: "Outreach Head",
        image: Afraz
    },
    {
        id: 4,
        name: "Vinit Keshri",
        position: "Content Head",
        image: Vinit_Keshri
    },
    {
        id: 5,
        name: "Noufal Rahim",
        position: "Tech Head",
        image: noufal_rahim
    },
    
    {
        id: 6,
        name: "Arun Natarajan",
        position: "Design Head",
        image: arun_natarajan
    },
    {
        id: 7,
        name: "Vivek",
        position: "Marketing Head",
        image: Vivek
    },
    {
        id: 8,
        name: "Joel George John",
        position: "Media Head",
        image: JoelJohn
    },
    {
        id: 9,
        name: "Harshini Babu",
        position: "Event Coordinator",
        image: Harshini_Babu
    },
    {
        id: 10,
        name: "Prithvi G Bhat",
        position: "Event Coordinator",
        image: Prithvi_G_Bhat
    },
    
    {
        id: 11,
        name: "Arjith Lal",
        position: "Event Coordinator",
        image: Arjith_Lal
    },
    // {
    //     id:11,
    //     name:"Unnati",
    //     position:"Member",
    //     image:Unnati
    // },
    
    {
        id: 12,
        name: "Bhukya Chetan Ram",
        position: "Member",
        image: Bhukya
    },
    {
        id: 13,
        name: "Piyush Soni",
        position: "Member",
        image: Piyush
    },
    {
        id: 14,
        name: "Pranav Prashant",
        position: "Member",
        image: Pranav
    },
    {
        id: 15,
        name: "Pranav R Nair",
        position: "Member",
        image: PranavNair
    },
    {
        id: 16,
        name: "Vedasree Rodi",
        position: "Member",
        image: Vedasree
    },
    {
        id: 17,
        name: "Akhil",
        position: "Member",
        image: Akhil
    },
    {
        id: 18,
        name: "Jumana",
        position: "Member",
        image: Jumana
    },
    {
        id: 19,
        name: "Abhishek",
        position: "Member",
        image: Abhishek
    },
    
    {
        id: 20,
        name: "Akshay Raj P",
        position: "Member",
        image: AKSHAY_RAJ_P
    },
    {
        id: 21,
        name: "Rehan",
        position: "Goated Member",
        image: Rehan
    }
];

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
