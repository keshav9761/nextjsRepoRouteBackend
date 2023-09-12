"use client"

import { useState } from "react"

export default function Login() {
  const [items, setItems] = useState("")
  const [task, setTask] = useState([])

  const inputHandler = (e) => {
    setItems((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTask((pre) => ([...pre, items]))
    setItems("")
  }

  const removeItem = (index) => {
    const remove = task?.filter((_, i) => i != index);
    setTask(remove || [])
  }
  return (
    <>

      <h1 className="text-center text-2xl text-blue-500 ">Welcome my TodoList</h1><br />
      <form onSubmit={submitHandler} >

        <input type="text" className='text-2xl rounded border-black-800 ml-4'
          placeholder='Enter task Here'
          name='itemName'
          value={items?.itemName}
          onChange={inputHandler}
        />

        <button type="submit" className='bg-sky-700 rounded text-white px-5 mx-4' >ADD</button>
      </form>
      <br /><br />
      {
        task?.map((v, i) => {
          return <ul key={i}>
            <li>{v?.itemName} <span></span>
              <button onClick={() => removeItem(i)}>Delete</button>
            </li>
          </ul>
        })
      }
    </>
  )
}
