import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const { locale, asPath } = useRouter()
  const changeTo = locale === 'en' ? 'ro' : 'en'

  return (
    <>
      <nav className="navbar">
        <div className="logo">Serenova</div>
        <ul className="menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Link href={asPath} locale={changeTo}>
          <button className="lang-switch">{changeTo.toUpperCase()}</button>
        </Link>
      </nav>
      <main>{children}</main>
      <footer className="footer">© Serenova {new Date().getFullYear()}</footer>
    </>
  )
}
