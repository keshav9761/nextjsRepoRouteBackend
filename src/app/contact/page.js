'use client'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'

export default function Contact() {
    const nav = useRouter()
    const pages = (path) => {
        nav.push(path)
    }
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "20%" }}>
                <h1>This is <mark>Contact</mark> page</h1><br /><br />
                <button onClick={() => pages('/')}>Back to Home</button> <br /><br />
                <button onClick={() => pages('/about')}>Back to About</button> <br /><br />
                <button onClick={() => pages('/login')}>Back to Login</button> <br /><br />
            </div>
        </>
    )
}
