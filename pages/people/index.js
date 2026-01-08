import { useState } from "react";
import styles from '@/styles/People.module.css'

// import Aabid from "@/public/images/Team/Aabid Mohamed.jpg"


//B24s
import Alfin from "@/public/images/Team/Alfin.jpg"
import AmanTS from "public/images/Team/Aman_T_S.jpeg"

import DevaVinod from "@/public/images/Team/Deva_Vinod.jpg"
import EliasJoby from "@/public/images/Team/Elias_Joby.jpg"
import IbinuJaleel from "@/public/images/Team/Ibinu_Jaleel.jpg"
import JefinJoji from "@/public/images/Team/Jefin_Joji.jpg"
import SharadChandra from "public/images/Team/Sharad_Chandra_M .jpg"
import ShriramKiran from "@/public/images/Team/Shriram_Kiran.jpg"
import Harshvardhan from "@/public/images/Team/Harsh.jpg"
import AmilK from "public/images/Team/Amil_K.jpeg"



//B23s and B22s

import Akhil from "@/public/images/Team/Akhil_T.jpg"
import AnirudhNambiar from "public/images/Team/Anirudh_Nambiar .jpg"
import Jumana from "@/public/images/Team/Jumana.jpg"
import Abhishek from "@/public/images/Team/Abhishek_Mohan_S.jpg"
import Adil from "@/public/images/Team/Adil_Abdul_Jabbar.jpg"
import AKSHAY_RAJ_P from "@/public/images/Team/AKSHAY_RAJ_P.jpg"
import arun_natarajan from "@/public/images/Team/arun_natarajan.jpg"
import Adithyan from "@/public/images/Team/Adithyan_V.jpg"
import SahilMuhammed from "public/images/Team/Sahil_Muhammed.jpeg"
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
    id: 1,
    name: "Mohammed Ameen",
    position: "Alumni",
    image: Ameen
},
{
    id: 2,
    name: "Hemanth Chodisetti",
    position: "Alumni",
    image: Hemanth
},
{
    id: 3,
    name: "Adil",
    position: "Alumni",
    image: Adil
},
{
    id: 4,
    name: "Afraz Ahmed",
    position: "Alumni ",
    image: Afraz
},
{
    id: 5,
    name: "Vivek",
    position: "Alumni",
    image: Vivek
},
{
    id: 6,
    name: "Bhukya Chetan Ram",
    position: "Alumni",
    image: Bhukya
},
{
    id: 7,
    name: "Piyush Soni",
    position: "Alumni",
    image: Piyush
},
{
    id: 8,
    name: "Pranav Prashant",
    position: "Alumni",
    image: Pranav
},
{
    id: 9,
    name: "Pranav R Nair",
    position: "Alumni",
    image: PranavNair
},
{
    id: 10,
    name: "Vedasree Rodi",
    position: "Alumni",
    image: Vedasree
},
{
    id: 11,
    name: "Joel George John",
    position: "Alumni",
    image: JoelJohn
},
{
    id: 12,
    name: "Harshini Babu",
    position: "Alumni",
    image: Harshini_Babu
},    


{
    id: 13,
    name: "Jumana",
    position: "Alumni",
    image: Jumana
},
{
    id: 14,
    name: "Abhishek",
    position: "Alumni",
    image: Abhishek
},

{
    id: 15,
    name: "Akshay Raj P",
    position: "Alumni",
    image: AKSHAY_RAJ_P
},


{
    id:16,
    name:"Mohamed Afthab",
    position:"Alumni",
    image:Afthab
},
{
    id:17,
    name:"Madhav Prabhu C M",
    position:"Alumni",
    image:Madhav
},
{
    id:18,
    name:"Vysakh Premkumar",
    position:"Alumni",
    image:Vysakh
},
{
    id:19,
    name:"Sreevalsan S",
    position:"Alumni",
    image:Sree
},
{
    id:20,
    name:"Neena M S",
    position:"Alumni",
    image:Neena
},
{
    id:21,
    name:"Alen Antony",
    position:"Alumni",
    image:Alen
},
{
    id:22,
    name:"Juby Johnson",
    position:"Alumni",
    image:Juby
},
{
    id:23,
    name:"Simmon Mathew Shaji",
    position:"Alumni",
    image:Simmon
},
{
    id:24,
    name:"Chacko James",
    position:"Alumni",
    image:Chacko
},
{
    id:25,
    name:"Abin Latheef",
    position:"Alumni",
    image:Abin
},
{
    id:26,
    name:"Aravind I M",
    position:"Alumni",
    image:Aravind
},
{
    id:27,
    name:"Arjun M Murali",
    position:"Alumni",
    image:Arjun
},
{
    id:28,
    name:"Cliford",
    position:"Alumni",
    image:Cliford
},
{
    id:29,
    name:"Hadif Yassin Hameed",
    position:"Alumni",
    image:Hadif
},
{
    id:30,
    name:"John D",
    position:"Alumni",
    image:John
},
{
    id:31,
    name: "Nithin Puthalath",
    position:"Alumni",
    image:Nithin
}
]

const member = [
    {
    id: 1,
    name: "Akhil",
    position: "Secretary",
    image: Akhil
    },

    {
        id: 2,
        name: "Prithvi G Bhat",
        position: "Joint Secretary",
        image: Prithvi_G_Bhat
    },

    
    {
        id: 4,
        name: "Arjith Lal",
        position: "Treasurer",
        image: Arjith_Lal
    },


    {
        id: 5,
        name: "Sahil Muhammed",
        position: "Assistant Secretary",
        image: SahilMuhammed
    },

    {
        id: 3,
        name: "Rehan",
        position: "Goated Member",
        image: Rehan
    },


    {
        id: 6,
        name: "Anirudh Nambiar",
        position: "Workshop Lead",
        image: AnirudhNambiar
    },

    {
        id: 22,
        name: "Harshvardhan",
        position: "Linux Ambassador",
        image: Harshvardhan
    },



    {
    id: 23,
    name: " Amil K",
    position: "Marketting Head",
    image: AmilK
},



    {
        id: 7,
        name: "Noufal Rahim",
        position: "Outreach Head",
        image: noufal_rahim
    },

      {
        id: 8,
        name: "Aman TS",
        position: "Documentation Lead",
        image: AmanTS
    },


      {
        id: 9,
        name: "Jefin Joji",
        position: "Event Coordinator",
        image: JefinJoji
    },
   
    {
        id: 10,
        name: "Vinit Keshri",
        position: "Content Head",
        image: Vinit_Keshri
    },
   
    
    {
        id: 11,
        name: "Arun Natarajan",
        position: "Design Head",
        image: arun_natarajan
    },
 
    
    
    
    {
        id: 12,
        name: "Adithyan V",
        position: "Member",
        image: Adithyan
    },
    {
        id: 13,
        name: "Alfin",
        position: "Member",
        image: Alfin
    },
  
    
    {
        id: 14,
        name: "Deva Vinod",
        position: "Member",
        image: DevaVinod
    },
    {
        id: 15,
        name: "Elias Joby",
        position: "Member",
        image: EliasJoby
    },
    {
        id: 16,
        name: "Ibinu Jaleel",
        position: "Member",
        image: IbinuJaleel
    },
  
    
    {
        id: 17,
        name: "Sharad Chandra",
        position: "Member",
        image: SharadChandra
    },
    {
        id: 18,
        name: "Shriram Kiran",
        position: "Member",
        image: ShriramKiran
    },
    
    // {
    //     id:11,
    //     name:"Unnati",
    //     position:"Member",
    //     image:Unnati
    // },
    
    
    
   
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
