import React from 'react'

export default function Admin() {
    const GetData = async()=>{
        await axios({
        method: "get",
        url: "http://localhost:8000/getDATA",
      }).then(data=>{
        console.log(data)
      })
    }
  return (
    <div className='w-screen h-screen grid place-items-center text-gray-5'>
        Admin
    </div>
  )
}