import Navbar from '@/components/Navbar'
import ResumeCard from '@/components/ResumeCard'
import { resumes } from '@/constants'
import React from 'react'

function Home() {
  return (
    <main className='bg-[url("/images/bg-main.svg")] bg-cover'>
      <Navbar />
      <section className='main-section'>
        <div className='page-heading py-16'>
          <h1>Track Your Application and Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        {resumes.length > 0 && (
          <div className='resumes-section'>
            {resumes.map((resumes) => (
              <ResumeCard key={resumes.id} resume={resumes} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home