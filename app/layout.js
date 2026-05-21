import './globals.css'
import "./responsive.css";
import Header from "@/components/Header";

export const metadata = {
  title: 'Avinash AI Lab',
  description: 'AI, Machine Learning & DSA Learning Platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}