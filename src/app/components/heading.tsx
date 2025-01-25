import React from 'react'
interface propsType{
    title:string;
}
const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
        <p className='border-b-4 text-blue-600 font-bold font-serif border-b-pink-500 inline-block pb-2'>{title}</p>
    </div>
  )
}

export default Heading