import React from 'react'

const Cards = ({ data }) => {
    return (
        <div className='border-1 border-gray-400 bg-gray-200 rounded-xl p-6 m-10'>
            <div className='flex'>
            {data.map((item) =>
                <div className='border-1 border-red-600 ml-11 rounded-xl p-1.5'>
                    <h1 className='text-2xl text-red-600 px-16'>{item.Value}</h1>
                    <h1>{item.label}</h1>
                </div>
            )}

        </div>
        </div>
        
    )
}

export default Cards