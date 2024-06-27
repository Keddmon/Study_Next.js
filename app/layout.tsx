import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/cart/payment">Payment</Link>
        </div>
        {children}
      </body>
    </html>
  )
}