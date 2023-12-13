import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/index.css";
import "/styles/globals.css";

import { Providers } from "./providers";
//import Cal from "./components/cal";
export const metadata = {
  title: {
    default: "Lexington BlockNative WEB3 Demo",
    template: "%s | Lexington BlockNative WEB3 Demo",
  },
  description:
    "A Lexington WEB3 Demo built with NextJS + Onboard Block Native.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
