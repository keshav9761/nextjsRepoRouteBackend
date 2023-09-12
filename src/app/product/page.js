'use client'

import { useEffect, useState } from "react"

export default function Product() {
    const [apiValue, setApiValue] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const productData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setApiValue(data)
        console.log(data)
    }
    useEffect(() => {
        productData()
    }, [])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);

    };
    // console.log(searchQuery)
    return (
        <>
            <div>

                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                />

                {
                    apiValue?.filter((c) => {
                        if (searchQuery == '') {
                            return c;
                        }
                        else if (c.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                         {
                            return c;
                        }


                    })
                    
                        ?.map((v, i) => {
                            return <div key={i} style={{ marginBottom: "20px", textAlign: "center" }}>
                                <div style={{ color: "blue", fontWeight: "bolder", textTransform: "capitalize" }}> {`Name: ${v.name}`}</div><br />
                                {`SurName : ${v.username}`}<br />
                                {`Address :${v.address.city}`} <br />
                                {`Company name: ${v.company.name}`}

                            </div>
                        })
                       
                }
            </div>
        </>
    )
}
