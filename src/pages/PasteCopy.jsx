import React, { useState } from 'react'

function PasteCopy() {
    const [text, setText] = useState("")

    const copy = () => {
        navigator.clipboard.writeText(text)
    }
    return (
        <div className='bg-red-500 p-[417px] flex justify-between'>
            {/* <input className='border-4 rounded-md border-gray-500 p-2' type="text" onChange={(e) => setText(e.target.value)} /> */}
            <textarea className='border-4 rounded-md border-gray-500 p-2'  onChange={(e) => setText(e.target.value)}></textarea>

            <input className='bg-blue-500 p-7 rounded-md text-white' type="button" value="copy" onClick={copy} />
            {/* <input className='border-4 rounded-md border-gray-500 p-2' type="text" /> */}
            <textarea className='border-4 rounded-md border-gray-500 p-2'  onChange={(e) => setText(e.target.value)}></textarea>
            
        </div>
    )
}

export default PasteCopy