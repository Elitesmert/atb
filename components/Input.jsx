import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Input = ({ label, type = "text", ...props }) => {
    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)


    useEffect(() => {
        if (show) {
            setType("text")
            inputRef.current.focus()
        }
        else if (type === "password") {
            setType("password")
            inputRef.current.focus()
        }
    }, [show,type])

    return (
        <label className=" relative flex bg-zinc-50 rounded h-[38px]">
            <input ref={inputRef} required={true} type={inputType} className=" bg-transparent w-full outline-none px-2 text-black peer valid:pt-3 font-bold text-sm" {...props} />
            <small className="absolute text-gray-500 left-2 top-1/2 -translate-y-1/2 text-base cursor-text pointer-events-none peer-valid:text-xs peer-valid:top-1.5 transition-all">{label}</small>
            {type === 'password' && props?.value && (
                <button type="button" className="pr-2 flex items-center text-gray-600" onClick={() => setShow(!show)}>
                    {show ? 'Gizle' : 'Goster'}
                </button>
            )}
        </label>
    )
}

export default Input