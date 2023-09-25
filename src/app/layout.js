import './globals.css'

export const metadata = {
  title: 'Search & Send by Staffing Fitness',
  description: 'Find your next fitness studio hire with Search & Send by Staffing Fitness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap" rel="stylesheet" />

        <meta property="og:title" content="Search & Send by Staffing Fitness" />
        <meta property="og:url" content="https://searchandsend.staffingfitness.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og/share.jpg" />
        <meta property="og:description" content="Find your next fitness studio hire with Search & Send by Staffing Fitness" />

      </head>
      <body>{children}</body>
    </html>
  )
}
