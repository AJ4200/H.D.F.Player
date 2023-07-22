import "./globals.css";
import "animate.css";
import "react-h5-audio-player/lib/styles.css";
import "./styles/home/mainpage.css";
import "./styles/home/navbar.css";
import "./styles/home/footer.css";
import "./styles/game/gameutils.css";
import "./styles/utils/resetbutton.css";
import "./styles/utils/chucknorrisjoke.css";
import "./styles/utils/shapes.css";
import "./styles/utils/search.css";
import "./styles/game/flash.css";
import "./styles/splash/splash.css";
import "./styles/splash/splashbackground.css";
import "./styles/splash/splashloader.css";
import "./styles/utils/music.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "H.D.F.Player",
  description: "browser emulator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="%PUBLIC_URL%/js-dos/js-dos.js"></script>
        <link rel="stylesheet" href="%PUBLIC_URL%/js-dos/js-dos.css" />
        <script>emulators.pathPrefix = "%PUBLIC_URL%/js-dos/";</script>
      </head>
      <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
      <script src="%PUBLIC_URL%/js-dos/js-dos.js"></script>
      <link rel="stylesheet" href="%PUBLIC_URL%/js-dos/js-dos.css" />
      <script>emulators.pathPrefix = "%PUBLIC_URL%/js-dos/";</script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
