'use client'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import React from 'react'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
    
}

const FileUploader = ({onFileSelect}: FileUploaderProps) => {
    const [file, setFile] = useState()
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        const file = acceptedFiles[0] || null
        
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })



    return (
        <div className='w-full gradient-border'>
            <input {...getInputProps()} />
            <div className='space-y-4 cursor-pointer '>
                <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                    <img src="/icons/info.svg" alt="Upload" className='size-20' />
                </div>
                {file ? (
                    <div>

                    </div>
                ): (
                    <div>
                        <p className='text-lg text-gray-500'>
                            <span className='font-semibold'>Click to Upload</span>
                            or drag and drop
                        </p>
                        <p className='text-sm text-gray-400'>
                             JPG (20 MB)
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FileUploader