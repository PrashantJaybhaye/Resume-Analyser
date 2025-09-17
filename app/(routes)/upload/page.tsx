'use client'

import FileUploader from '@/components/FileUploader'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // form submission logic here
}

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState('')

    return (
        <main className='bg-[url("/images/bg-main.svg")] bg-cover'>
            <Navbar />
            <section className='main-section'>
                <div className='page-heading py-16'>
                    <h1>Smart Feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <Image src={'/images/resume-scan.gif'} alt='processiing logo' className='w-full' width={70} height={70} />
                        </>
                    ) : (
                        <>
                            <h2>Drop your resume for an ATS & Improvement tips</h2>
                        </>
                    )}
                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                            <div className='form-div'>
                                <label htmlFor='company-name'>Company Name</label>
                                <input type='text' name='company-name' id='company-name' placeholder='Compant Name' required />
                            </div>
                            <div className='form-div'>
                                <label htmlFor='job-title'>Job Title</label>
                                <input type='text' name='job-title' id='job-title' placeholder='Job Title' required />
                            </div>
                            <div className='form-div'>
                                <label htmlFor='job-description'>Job Description</label>
                                <textarea rows={5} name='job-description' id='job-description' placeholder='Job Description' required />
                            </div>
                            <div className='form-div'>
                                <label htmlFor='uploader'>Upload Resume</label>
                                <FileUploader />
                            </div>

                            <button type='submit' className='primary-button'>
                                Analyze Resume
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Upload