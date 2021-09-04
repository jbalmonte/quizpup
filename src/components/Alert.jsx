import React from 'react'
import { FcInfo } from 'react-icons/fc'

function Alert({ type, message, setError = null, setSuccess = null }) {
    const color = type === 'SUCCESS' ? 'green' : type === 'INFO' ? 'blue' : 'red'
    const handleClick = e => {
        setSuccess && setSuccess("")
        e.target.closest('div').classList.add('invisible');
        setError && setError("");
    }

    return (
        <div className={`bg-${color}-100 border border-${color}-300 text-${color}-500 px-4 rounded relative`} role="alert" >
            <span className="block sm:inline pointer-events-none">{message}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4" >
                {
                    type === 'INFO' ? <FcInfo className="h-6" /> :
                        <svg onClick={handleClick} className={`fill-current h-6 w-6 text-${color}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                }
            </span>
        </div>
    )
}

export default Alert
