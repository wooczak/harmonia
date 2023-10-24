import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-semibold mt-5 mb-10 text-center">Harmonia</h1>
        {children}
      </body>
    </html>
  )
}
