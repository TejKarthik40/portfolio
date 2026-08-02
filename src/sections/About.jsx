import { motion } from "framer-motion";
import {
    FaUserGraduate,
    FaLaptopCode,
    FaBriefcase,
    FaLightbulb
} from "react-icons/fa";

export default function About(){

    const cards=[

        {
            icon:<FaUserGraduate/>,
            title:"Education",
            text:"Computer Science student passionate about building modern web applications and continuously learning new technologies."
        },

        {
            icon:<FaLaptopCode/>,
            title:"Development",
            text:"Experienced with React, Java, Spring Boot, SQL and creating responsive full-stack applications."
        },

        {
            icon:<FaBriefcase/>,
            title:"Career Goal",
            text:"Seeking Software Engineer opportunities where I can solve real-world problems and contribute to impactful products."
        },

        {
            icon:<FaLightbulb/>,
            title:"Interests",
            text:"Web Development, System Design, Problem Solving, AI and Cloud Technologies."
        }

    ];

    return(

<section className="about" id="about">

<div className="section-header">
  <span className="section-tag">ABOUT ME</span>
  <h2>Who I Am & What I Build</h2>
  <p>
    Passionate about creating scalable applications and continuously
    improving my software engineering skills.
  </p>
</div>

<motion.p

className="about-text"

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6}}

viewport={{once:true}}

>

I am a passionate Full Stack Developer with strong foundations in Java,
React, Spring Boot and SQL. I enjoy creating modern, responsive and
user-friendly applications while continuously improving my problem-solving
skills and learning new technologies.

</motion.p>

<div className="about-grid">

{

cards.map((card,index)=>(

<motion.div

className="about-card"

key={index}

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.2}}

viewport={{once:true}}

>

<div className="about-icon">

{card.icon}

</div>

<h3>

{card.title}

</h3>

<p>

{card.text}

</p>

</motion.div>

))

}

</div>

</section>

    );

}