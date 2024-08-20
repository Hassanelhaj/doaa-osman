import React from 'react'
import { list } from '../../../Data'

import SubTitle from '../../SubTitle'
import VedioCard from './VedioCard'

const VedioList = () => {

  return (
    <div >
        <SubTitle title ="ريلز" />
        <div className='flex justify-center items-center p-4 gap-2 flex-wrap'>
        {list.map((project)=>{
            return<VedioCard data={project} />
        })}
        </div>
    </div>
  )
}

export default VedioList
