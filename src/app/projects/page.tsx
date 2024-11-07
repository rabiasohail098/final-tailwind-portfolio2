"use client"
import React from 'react'
import { useEffect } from 'react'
import Heading from '../components/heading'
import Cards from '../components/cards'
import AOS from "aos"
import "aos/dist/aos.css"
const data = [
    {
        id:0,
        title:"Cli Based 13+ projects",
        des:"There are 13+ projects which is made by using typescript and inquirer.",
        img:"/images/cli.png",
        link:"https://github.com/rabiasohail098/cli-all-projects",
        tag:["TypeScript","Node","Inquirer"]
    },
    {
        id:1,
        title:"Background Changer",
        des:"This is a background changer project which is made by using next.js and tailwind.css.",
        img:"/images/bg-chan.png",
        link:"https://github.com/rabiasohail098/bg-changer-project",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:2,
        title:"Password Generator",
        des:"This is a password generator project which is made by using next.js and tailwind.css.",
        img:"/images/download.jpeg",
        link:'https://github.com/rabiasohail098/password-generator',
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:3,
        title:"Quiz App",
        des:"This is a Islamic Quiz App which is made by using next.js and tailwind.css.",
        img:"/images/quiz.png",
        link:"https://github.com/rabiasohail098/islamic-quiz-app",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:4,
        title:"Portfolio",
        des:"This is a Portfolio project which is made by using next.js and custom.css.",
        img:"/images/port-cus.png",
        link:"https://github.com/rabiasohail098/portfolio-custom-css",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:5,
        title:"Tour-Website",
        des:"This is a Tour website which is made by using next.js and tailwind.css.",
        img:"/images/tour.png",
        link:"https://github.com/rabiasohail098/next-tour-website",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:6,
        title:"Food Website",
        des:"This is a Food website which is made by using next.js and tailwind.css.",
        img:"/images/food.png",
        link:"https://github.com/rabiasohail098/food-website",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:7,
        title:"Figma Website",
        des:"This is a figma tamplete website which is made by using next.js and tailwind.css.",
        img:"/images/fig.png",
        link:"https://github.com/rabiasohail098/figma-website",
        tag:["React","Node","Restful API","SCSS"]
    },
    {
        id:8,
        title:"Governor Initiative website Clone",
        des:"This is a Governor Initiative website clone.",
        img:"/images/gov.png",
        link:"https://github.com/rabiasohail098/governor-initiative-website-clone",
        tag:[]
    },



]
const Projects = () => {
    useEffect(()=>{
        AOS.init({
            easing:"ease-out-back",
            duration:1200,
            delay:100,
            mirror:true,
            anchorPlacement:"bottom-bottom",
            offset:100,
        });
        AOS.refresh();
    },[])
  return (
    <section className="text-gray-600 bg-cover bg-fixed bg-center body-font" style={{backgroundImage:`url(/images/bg.jpg) `}}>
    <div data-aos="zoom-in-up" className='container pt-32'>
        <Heading title="My Projects"/>
        <div className='grid lg:gap-x-20 xl:gap-0 xl:gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
            {data.map((items)=>(
                <Cards 
                key={items.id}
                title={items.title}
                des={items.des}
                img={items.img}
                tag={items.tag}
                link={items.link}
                />
            ))}
        </div>
    </div>
    </section>
  )
}

export default Projects