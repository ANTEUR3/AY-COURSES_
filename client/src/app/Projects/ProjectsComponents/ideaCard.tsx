import { ProjectIdea } from '@/app/types'
import React from 'react'

type Props = {
    idea:ProjectIdea
}

const IdeaCard = ({idea}: Props) => {
  return (
    <div key={idea.id} className='rounded-lg relative'>
            <img src={idea.image} alt="" className='w-full lg:h-[230px]' />
            <h1 className='lg:text-xl  lg:mb-1 lg:mt-1 font-bold'>{idea.title}</h1>
            <p className='font-semibold text-gray-900 lg:text-xl mb-1'>{idea.level} level</p>
            <div className='w-[90%] grid grid-cols-3 gap-x-2 lg:mb-3 relative gap-2'>
              <Requirements  Requirements={idea.requirements} />
            </div>
            <h3 className=''>{idea.description}</h3>
            <div className='w-full flex justify-start items-center gap-x-3'>
                <h3 className='mt-1 font-semibold  text-lg'>Priod :</h3>
                <div className='mt-1 font-semibold  text-lg'>
                    {`${idea.period[0]} day - ${idea.period[1]} week ${idea.period[2]} month  ` }
                </div>
            </div>
    </div>
  )
}

export default IdeaCard

const Requirements=({Requirements}:{Requirements:string[]})=>{
    return Requirements.map((r,key)=>{
        return <div key={key} className='lg:rounded-lg  lg:py-1 bg-gray-950 text-white font-semibold flex justify-center '>
            {r}

        </div>
    })

}