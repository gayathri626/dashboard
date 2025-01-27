import React from 'react'
import {CartesianAxis, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const EnergyChart = ({data}) => {
  return (
    <div className='border-1 border-gray-400 bg-gray-200 rounded-xl p-5 mx-12'>
    <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="date"/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="generator" stroke="#8884d8" />
    <Line type="monotone" dataKey="compressor" stroke="#82ca9d" />
  </LineChart>  
    </div>
     )
}

export default EnergyChart