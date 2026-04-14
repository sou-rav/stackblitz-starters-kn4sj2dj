import './globals.css'

export const metadata = {
  title: 'My Project',
  description: 'A 10-day challenge',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}