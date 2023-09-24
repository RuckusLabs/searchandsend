import './globals.css'

export const metadata = {
  title: 'Search and Send',
  description: 'Search and Send program by Staffing Fitness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap" rel="stylesheet" />
    </head>
      <body>{children}</body>
    </html>
  )
}
