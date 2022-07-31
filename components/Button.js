import React from "react"

export default function Button({children, className , ...props}){
    return (
        <button {...props} className={`${
            className ? className : "bg-blue-600 focus:ring-blue-200 hover:bg-blue-700 "}
        px-6 py-3 text-sm font-medium text-white transition duration-200 rounded focus:outline-none border-transparent focus:ring border`}>{children}</button>
    )
}