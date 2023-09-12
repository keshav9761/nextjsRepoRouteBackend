'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const [navLink, setNavLink] = useState([])

  useEffect(() => {
    const nav = [
      { name: "--select--" },
      { name: "Login", path: "/login" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ]
    setNavLink(nav)
  }, [])
  // console.log("bbb", navLink)
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <h1>This is <mark>Home</mark> page</h1>
        <Link style={{ margin: "30px" }} href="/login">Login</Link>
        <Link style={{ margin: "30px" }} href="/about">About</Link>
        <Link style={{ margin: "30px" }} href="/contact">Login</Link>

        <br />
        <br />

        <select>
          {
            navLink?.map((v,i) => <option key={i}>{v.name}</option>)
          }
        </select>
        <br/>
        <be/>

      </div >
    </>
  )
}

