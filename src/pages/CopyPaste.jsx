import React, { useState } from 'react'

function CopyPaste() {
    const [text, setText] = useState("")

    const copy = () => {
        navigator.clipboard.writeText(text)
    }
    return (
        <div className='bg-yellow-300 p-[433px] flex justify-between'>
            <input className='border-4 rounded-md border-gray-500 p-2' type="text" onChange={(e) => setText(e.target.value)} />
            <input className='bg-blue-500 p-2 rounded-md text-white' type="button" value="copy" onClick={copy} />
            <input className='border-4 rounded-md border-gray-500 p-2' type="text" />
        </div>
    )
}

export default CopyPaste