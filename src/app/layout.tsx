import './globals.css'
import 'animate.css'
import './styles/home/mainpage.css';
import './styles/home/navbar.css'
import './styles/home/footer.css';
import './styles/game/gameutils.css'
import './styles/game/flash.css'
import './styles/splash/splash.css'
import './styles/splash/splashbackground.css'
import './styles/splash/splashloader.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'H.D.F.Player',
  description: 'browser emulator',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
