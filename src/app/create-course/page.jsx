import React from 'react'

const CreateCourse = () => {
    const StepperOptions = [
        {
        id:1,
        name:"Category",
        icon: "icons"
    },
    {
        id:1,
        name:"Category",
        icon:"icons"
    },
    {
        id:1,
        name:"Category",
        icon:"icons"
    }
    
]
  return (
    <div>
    <div className='flex flex-col justify-center items-center mt-10'>
        <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
        <div className='flex mt-10'>
            {StepperOptions.map((item, index) =>{
                <div className='flex items-center'>
                    <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                        <div className='bg-gray-200 p-3 rounded-full text-white'>
                        {item.icon}
                        </div>
                        <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                    </div>
                    (index!=StepperOptions?.length-1&& <div className='h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300'>)

                    </div>
                </div>
            })}
        </div>
    </div>
            <div>
                
            </div>
    </div>
  )
}

export default CreateCourse
