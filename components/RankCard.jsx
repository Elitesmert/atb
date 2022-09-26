import React from 'react'
import { MdDeleteForever, MdEdit } from 'react-icons/md'

const RankCard = (props) => {
    const { children } = props
    return (
        <div className='p-2 m-2 border flex items-stretch border-white border-solid '>
            <div className='flex-1  '>
                {children}
            </div>
            <div className='flex items-center'>
                <MdEdit className='duration-300 hover:rotate-45 cursor-pointer'></MdEdit>
                <MdDeleteForever className='duration-300 hover:scale-125 cursor-pointer'></MdDeleteForever>
            </div>
        </div>
    )
}

export default RankCard