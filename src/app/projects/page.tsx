"use client"
import React from 'react'
import { useEffect } from 'react'
import Heading from '../components/heading'
import Cards from '../components/cards'
import AOS from "aos"
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import "aos/dist/aos.css"
type IconType = {
    className?: string;
  };
export const GithubIcon = (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 496 512"
      className={props.className}
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
  );
  
  
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
        link1:"",
        tag:["Next.js","Node","SCSS"]
    },
    {
        id:2,
        title:"Password Generator",
        des:"This is a password generator project which is made by using next.js and tailwind.css.",
        img:"/images/download.jpeg",
        link: 'https://github.com/rabiasohail098/password-generator',
        link1:"",
        tag:["Next.Js","Node","SCSS"]
    },
    {
        id:3,
        title:"Quiz App",
        des:"This is a Islamic Quiz App which is made by using next.js and tailwind.css.",
        img:"/images/quiz.png",
        link: "https://github.com/rabiasohail098/islamic-quiz-app",
        link1:"",
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
        link: "https://github.com/rabiasohail098/UI-UX-Hackathone.git",
        link1:"https://ui-ux-hackathone-atj1.vercel.app/",
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