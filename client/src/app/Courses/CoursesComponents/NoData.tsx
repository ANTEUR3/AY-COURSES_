import React from 'react'

type Props = {}

const NoData = (props: Props) => {
  return (
    <div className='w-full flex justify-center items-center  col-span-4 lg:text-xl font-bold  text-red-500 lg:py-[30px]'>No courses !!</div>
  )
}

export default NoData