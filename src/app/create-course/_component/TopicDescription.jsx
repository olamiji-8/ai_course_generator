import React from 'react'
import {Input} from "../../../components/components/ui/input"
import {Textarea} from "../../../components/components/ui/textarea"

const TopicDescription = () => {
  return (
    <div className='mx-20 lg:mx-44'>
      <div className='mt-5'> 
        <label>Write the topic for which you want to generate a course (e.g. Python Course, Yoga, etc.):</label>
        <Input placeholder='Topic'/>
      </div>
      <div className='mt-5 '>
        <label>Tell us more about your course, what you want to include in the course (Optional)</label>
        <Textarea placeholder="About your course"/>
      </div>
    </div>
  )
}

export default TopicDescription
