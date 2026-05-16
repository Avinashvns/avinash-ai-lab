import './globals.css'

export const metadata = {
  title: 'Avinash AI Lab',
  description: 'AI, Machine Learning & DSA Learning Platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}