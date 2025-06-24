// app/layout.tsx
import { Roboto, Prompt, Rajdhani, Sora } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import { Chat } from '@/components/chat/Chat'

import '@/styles/globals.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-prompt',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata = {
  title: "Ivan Dario Gomez Jimenez - Profile",
  description: "Ivan Dario Gomez Jimenez full profile and projects",
  keywords: "idgomezj",
  openGraph: {
    title: "Ivan Dario Gomez Jimenez - Profile",
    description: "Ivan Dario Gomez Jimenez full profile and projects",
    url: "https://www.idgomezj.com",
    type: "website",
    images: [
      {
        // url: "https://avatars.githubusercontent.com/u/64369661?v=4",
        url:"https://thesccleaning.com/wp-content/uploads/2025/06/Ivan-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Ivan Dario Gomez Jimenez - Profile Preview"
      }
    ]
  },
  robots: "index, follow",
  authors: [{ name: "idgomezj" }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${prompt.variable} ${rajdhani.variable} ${sora.variable}`}>
      <body>
        {children}
        <Chat />
        <Footer />
      </body>
    </html>
  )
}
