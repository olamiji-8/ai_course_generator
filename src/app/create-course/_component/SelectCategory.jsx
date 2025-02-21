import React, { useContext } from 'react'
import CategoryList from '../../_shared/CategoryList'
import Image from 'next/image'
import { UserInputContext } from '../../_context/UserInputContext'

const SelectCategory = () => {
    const {userCourseInput, setUserCourseInput}= useContext(UserInputContext)

    const handleCatgoryChange=(category)=>{
        setUserCourseInput(prev=>({
            ...prev,
            category:category
        }))
    }
  return (
    <div className='px-10 md:px-20'>
         <h2 className='my-5'>Select the Course Category</h2>
    
    <div className='grid grid-cols-3 gap-10'>
      {CategoryList.map((item, index)=>{
        <div className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-secondary cursor-pointer ${userCourseInput?.category==item.name&& "border-primary bg-primary"}`} onClick={()=>handleCatgoryChange(item.name)}>
            <Image src={item.icon} width={50} height={50}/>
            <h2>{item.name}</h2>
        </div>
      })}
    </div>
    </div>
  )
}

export default SelectCategory
