'use client'
import "./style.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getTodoList, postTodoList } from './servies'

export default function Page() {
    const [list, setList] = useState('')
    const [Data, getData] = useState([])


    const handleInput = (e) => {
        setList((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    }

    // get API
    const getApiHandle = async () => {
        const fetchData = await getTodoList();
        getData(fetchData?.data)
    }
    // post api
    const postApiHandle = async () => {
        const sendData = await postTodoList(list)
    }
    const listItemRemove = (id) => {
        alert("Are you sure")
        const remv = axios.delete(`http://localhost:8080/tolist?id=${id}`)
        getApiHandle();
    }
    useEffect(() => {
        getApiHandle();
    }, [])
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("first", list)
    // }
    return (<>
        <div className='md:container text-center bg-purple-300'>
            <h1 className="text-center">My TodoList App</h1><br />

            <form onSubmit={postApiHandle} className='mt-3'>
                <input type="text"
                    className="placeholder-gray-500 rounded-full px-3 pl-8 py-1 transition duration-700 ease-in-out focus:shadow-outline hover:w-64"
                    placeholder="Enter your task here..."
                    name="task"
                    value={list?.task}
                    onChange={handleInput} />

                <button type='submit'
                    className='bg-indigo-500 mx-3 px-3 rounded-md w-20 text-lg text-white'
                >ADD</button>
            </form>
            <div className='py-3'>
                {
                    Data?.map((v) => {
                        return (
                            <div key={v?.id} className='mt-10 bg-gray-300 p-2 mx-2'>
                                <div className='flex justify-between px-2'>
                                    <div> <input type="text" className='p-2 rounded-md' value={v?.task} /></div>
                                    <div>
                                        <button onClick={() => listItemRemove(v.id)}
                                            class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>

                                            Delete
                                        </button>
                                    </div>
                                    <div>
                                        <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                                            <svg class="h-8 w-8 text-white-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>

                                            edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    </>
    )
}
