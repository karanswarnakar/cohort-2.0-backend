import React from 'react'

const Button = ({ type, name }) => {
    return (
        <button type={type}
            className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            {name}
        </button>

    )
}

export default Button
