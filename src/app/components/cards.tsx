
import React from 'react'





interface propsType{
    title:string;
    des:string;
    tag:string[];
}
const Cards:React.FC<propsType> = ({title,des,tag}) => {
  return (
   
  

      <div className='space-y-3'>
        <h2 className="text-lg text-blue-600 font-semibold font-serif mt-2">{title}</h2>
      <p>{des}</p>
     
    
    
        <div className='flex gap-3 px-4'>
            {tag.map(el=><button className='tags  border border-accent text-[8px] px-2 py-1'
        key={el}
        >{el}</button>)}
        </div>
     
    </div>


  )
}

export default Cards