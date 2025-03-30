import React, { useMemo } from 'react'
import {ProjectIdea} from '../../types'
import { DiVim } from 'react-icons/di'
import IdeaCard from './ideaCard'

type Props = {
    ideas:ProjectIdea[]
}



const ProjectsIdeas = ({ideas}: Props) => {

  const displaProjectIdeas=useMemo(()=>{
      return ideas.map((idea,key)=>{
        return <IdeaCard key={idea.id} idea={idea}/>
      })
  },[ideas])

  return  <div className='lg:pt-[80px] pt-[45px] px-[20px] lg:px-[90px] grid lg:grid-cols-3 gap-4'>
          {displaProjectIdeas}
        </div>

}

export default ProjectsIdeas