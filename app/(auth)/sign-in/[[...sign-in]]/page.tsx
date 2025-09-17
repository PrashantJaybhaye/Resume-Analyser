import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        
        <main className='bg-[url("/images/bg-main.svg")] bg-cover min-h-screen flex items-center justify-center'>
            <div className='gradient-border shadow-lg'>
                <section className='flex flex-col bg-white rounded-2xl p-1 md:p-10'>
                    <SignIn />
                </section>
            </div>
        </main>
    )
}