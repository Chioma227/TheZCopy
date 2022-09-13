import React, { useState } from 'react'

const Questions = ({question, answer}) => {
    const[showContent, setShowContent] = useState(false)
  return (
    <div className='lg:w-[44rem] md:w-[100%] mb-3 border-2 px-3 md:py-5 py-2 rounded-sm transition-all'>
      <header className='flex justify-between items-center gap-10 mb-2 md:py-3 '>
        <h2 className='font-bold md:text-[1.1rem] sm:text-[1.2rem] text-[1rem]  text-gray-700'>{question}</h2>
        <button onClick={()=>setShowContent(!showContent)}>{showContent ? <i class="fa fa-minus border-white" aria-hidden="true"></i> : <i class="fa fa-plus border-white" aria-hidden="true"></i>}</button>
      </header>
     {showContent &&  <p className='md:text-[1rem] sm:text-[1.2rem] text-[1rem] text-grey-100'>{answer}</p>}
    </div>
  )
}

export default Questions
