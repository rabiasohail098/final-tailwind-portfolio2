"use client"
import React from 'react'
import { useEffect } from 'react'
import Heading from '../components/heading'
import Cards from '../components/cards'
import AOS from "aos"
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import "aos/dist/aos.css"
import { GithubIcon } from '../components/icons'

  
  
const data = [
    {
        id:0,
        title:"Cli Based 13+ projects",
        des:"There are 13+ projects which is made by using typescript and inquirer.",
        img:"/images/cli.png",
        link:"https://github.com/rabiasohail098/cli-all-projects",
        link1:"",
        tag:["TypeScript","Node","Inquirer"]
    },
    {
        id:1,
        title:"Background Changer",
        des:"This is a background changer project which is made by using next.js and tailwind.css.",
        img:"/images/bg-chan.png",
        link: "https://github.com/rabiasohail098/bg-changer-project",
        link1:"https://bg-changer-project.vercel.app/",
        tag:["Next.js","Node","SCSS"]
    },
    {
        id:2,
        title:"Password Generator",
        des:"This is a password generator project which is made by using next.js and tailwind.css.",
        img:"/images/download.jpeg",
        link: 'https://github.com/rabiasohail098/password-generator',
        link1:"https://password-generator-phi-plum.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:3,
        title:"Quiz App",
        des:"This is a Islamic Quiz App which is made by using next.js and tailwind.css.",
        img:"/images/quiz.png",
        link: "https://github.com/rabiasohail098/islamic-quiz-app",
        link1:"https://figma-website-uy8l.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:4,
        title:"Portfolio",
        des:"This is a Portfolio project which is made by using next.js and custom.css.",
        img:"/images/port-cus.png",
        link: "https://github.com/rabiasohail098/portfolio-custom-css",
        link1:"https://portfolio-custom-css-rouge.vercel.app",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:5,
        title:"Tour-Website",
        des:"This is a Tour website which is made by using next.js and tailwind.css.",
        img:"/images/tour.png",
        link: "https://github.com/rabiasohail098/next-tour-website",
        link1:"https://next-tour-website.vercel.app",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:6,
        title:"Food Website",
        des:"This is a Food website which is made by using next.js and tailwind.css.",
        img:"/images/food.png",
        link: "https://github.com/rabiasohail098/food-website",
        link1:"https://food-website-lake.vercel.app",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:7,
        title:"Figma Website",
        des:"This is a figma tamplete website which is made by using next.js and tailwind.css.",
        img:"/images/fig.png",
        link: "https://github.com/rabiasohail098/figma-website",
        link1:"",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:8,
        title:"Governor Initiative website Clone",
        des:"This is a Governor Initiative website clone.",
        img:"/images/gov.png",
        link: "https://github.com/rabiasohail098/governor-initiative-website-clone",
        link1:"https://governor-initiative-website-clone-ten.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:9,
        title:"Blog Website",
        des:"This is a Next.Js all version blog website.",
        img:"/images/tech (2).png",
        Link: "https://github.com/rabiasohail098/blog-website.git",
        link1:"https://blog-website-xwaz.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:10,
        title:"Blog Website with Sanity",
        des:"This is a Tech blog website.",
        img:"/images/tech.png",
        link: "https://github.com/rabiasohail098/blog-website-with-sanity1.git",
        link1:"https://blog-website-with-sanity1-iiqj.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:11,
        title:"Rental Car",
        des:"This is a Rental Car website.",
        img:"/images/car.png",
        link: "https://github.com/rabiasohail098/sardar-qayum.git",
        link1:"https://sardar-qayum.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:12,
        title:"FoodTuck",
        des:"This is a Q-Commerce FoodTuck website.",
        img:"/images/foodtuck.png",
        link: "https://github.com/rabiasohail098/Q-Commerce-FoodTuck.git",
        link1:"https://q-commerce-food-tuck.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:13,
        title:"Tech Blog",
        des:"This is a Tech Blog website.",
        img:"/images/tech1.png",
        link: "https://github.com/rabiasohail098/blog-website-with-sanity1.git",
        link1:"https://blog-website-with-sanity1-iiqj.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:14,
        title:"Shopping Website",
        des:"This is a ststic Shopping website.",
        img:"/images/shop.png",
        link: "https://github.com/rabiasohail098/shopping-website.git",
        link1:"https://shopping-website-one-coral.vercel.app/",
        tag:["Next.Js","Node","SCSS"]
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
    <div data-aos="zoom-in-up" className='container pt-22'>
        <Heading title="My Projects"/>
        <div className='grid lg:gap-x-20 xl:gap-0 xl:gap-y-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center '>
                  {data.map((items) => (
                      <div className='border-4 border-b-sky-500 border-t-purple-400  border-l-pink-400 border-r-teal-400 py-4 w-[250px] px-4 gap-6  my-6' key={items.id}>
                <Image  src={items.img} alt={items.title} width={200} height={200} className="w-[240px] h-[200px]" />
                <Cards 
                key={items.id}
                title={items.title}
                des={items.des}
                              tag={items.tag}
                          />
                          <div className='flex px-3 gap-4 mt-4 '>
                          <a
            href={items.link}
            target="_blank"
            className="flex items-center gap-1 text-[14px] underline  font-bold text-blue-600 font-serif"
          >
            <GithubIcon className="h-5 w-5 text-black" /> Source code
          </a>
         
            <a
              href={items.link1}
              target="_blank"
              className="flex items-center gap-1  underline text-[14px] font-bold text-blue-600 font-serif"
            >
              <FiExternalLink className="h-5 w-5 text-black" /> Live
            </a>
                </div>
            
                         
                          </div>
            ))}
                          
        </div>
    </div>
    </section>
  )
}

export default Projects