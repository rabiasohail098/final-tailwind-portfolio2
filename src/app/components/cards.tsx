
import React from 'react'
import Image from 'next/image';




interface propsType{
    title:string;
    des:string;
  link: string;
  link1: string;
    tag:string[];
}
const Cards:React.FC<propsType> = ({title,des,link,link1,tag}) => {
  return (
   
  

      <div className='space-y-3'>
        <h2 className="text-lg text-blue-600 font-semibold font-serif mt-2">{title}</h2>
        <p>{des}</p>
      <button className='text-[10px] border border-accent px-2 py-2'>{link}</button>
      <button className='text-[10px] border border-accent px-2 py-2'><span className='text-blue-700 font-semibold'>Vercel Link:</span> {link1}</button>
    
        <div className='flex gap-3 px-4'>
            {tag.map(el=><button className='tags  border border-accent text-[8px] px-2 py-1'
        key={el}
        >{el}</button>)}
        </div>
     
    </div>


  )
}

export default Cards