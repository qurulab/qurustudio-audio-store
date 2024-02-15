import NavBar from '@/components/nav/NavBar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quru Studio',
  description: 'Quru Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <div className='flex flex-col w-full min-h-screen'>
          <NavBar />
          <main className='flex-grow bg-slate-200'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
