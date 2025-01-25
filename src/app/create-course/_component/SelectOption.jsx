import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../components/components/ui/select"
  

const SelectOption = () => {
  return (
    <div className='px-10 md:px-20 lg:px-44'>
      <div className='grid grid-cols-2'>
      <Select>
  <SelectTrigger className="">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

      </div>
    </div>
  )
}

export default SelectOption
