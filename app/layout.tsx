import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from './components/bootstrapClient'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './styles/globals.css'

const rubik = Rubik({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Nk-online-mall',
  description: 'Your ultimate online shopping destination. Shop now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
