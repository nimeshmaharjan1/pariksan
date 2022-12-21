import React from 'react'

const SmallCard: React.FC<{ className: string, children: React.ReactNode }> = ({ className, children }) => {
    return (
        <div className={`${className} bg-base-200 shadow-lg rounded p-2 absolute`}>
            {children}
        </div>
    )
}

export default SmallCard