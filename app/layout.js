export const metadata = {
  title: 'Finntech',
  description: 'Empowering Your Future',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
