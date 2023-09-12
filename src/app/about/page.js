import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <>
            <div style={{textAlign:"center",marginTop:"20%"}}>
                <h1>This is <mark>About</mark> page</h1>
                <Link href="/contact">Contact</Link>
            </div>
        </>
    )
}
