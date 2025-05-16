import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const Rootlayout = async ({children}:{children:ReactNode}) => {

  const isUserAuthenticated = await isAuthenticated();

   if(!isUserAuthenticated) redirect('/sign-in')
  
  
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2' >
         <Image src="/logo.svg" alt="logo" width={38} height={32}/>
         <h1 className='text-primary-100'>MentorHub</h1>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout