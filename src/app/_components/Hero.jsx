import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="bg-gradient-to-r from-green-300 via-secondary to-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          AI Course Generator
  
          <span className="sm:block"> Custom Learning Paths, Powered by Ai </span>
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Unlock personalized education with Ai-driven course creation. Tailor your learning journey to fit your unique goals and pace
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/sign-up"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
