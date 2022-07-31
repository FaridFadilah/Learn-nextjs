import React from "react"

export default function Layout({children}){
    return (
        <div className="justify-center flex items-center min-h-screen bg-gray-100 antialiased font-sans tracking-tighter ">
            <div className="">
                {children}
            </div>
        </div>
    )
}