import React, { useState } from 'react'
import HeaderTabs from '../Components/HeaderTabs'
// import Compress from '../Components/Compressor/Compress'
// import generator from '../Components/Generator/generator'
import EnergyChart from '../Components/EnergyChart/EnergyChart'
import DataTable from '../Components/DataTable/DataTable'
import Cards from '../Components/Cards/Cards'
// import total from '../Components/Total/total'
// import Total from '../Components/Total/Total'

const Sustainabilty = () => {
    const [currentTab, setCurrentTab] = useState(1)
    const card = [
        { label: "generator fuel consumption", Value: '45678' },
        { label: "generator gas consumption", Value: '23433' },
        { label: "generator carbon consumption", Value: '65443' }

    ]
    const generatorData = [
        {
            assetName: "generator fcf", HealthStatus: "ok", Co2e: "5.56", total:"172"
        },
        {
            assetName: "generator asa", HealthStatus: "normal", Co2e: "1.56", total:"178"
        }
    ]
    const compressorData = [
        {
            assetName: "generator fedw", HealthStatus: "good", Co2e: "5.26", total:"169"
        },
        {
            assetName: "generator vsqa", HealthStatus: "bad", Co2e: "2.56", total:"170"
        }
    ]
    const totalData = [
        {
            date: "16 jan", generator: 6000, compressor: 1000
        },
        {
            date: "17 jan", generator: 4000, compressor: 8000
        },
        {
            date: "18 jan", generator: 2000, compressor: 7000
        },
        {
            date: "19 jan", generator: 7000, compressor: 3000
        },
        {
            date: "20 jan", generator: 8000, compressor: 2000
        }
    ]
    return (
        <>
            <HeaderTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {currentTab === 1 &&
                <div className='flex justify-between m-16'>
                    <div>
                        <Cards data={card} /> <br />
                        <h3 className='ml-10'>Total Energy Consumption(Wh)</h3><br />
                        <EnergyChart data={totalData} />
                    </div>
                    <div className='mr-10 my-30'>
                        <h1 className='text-2xl'>Generator</h1>
                        <DataTable title="Generator" data={generatorData} /> <br /><br />
                        <h1 className='text-2xl'>Compressor</h1>

                        <DataTable title="Compressor" data={compressorData} />
                    </div>


                </div>
            }
        </>

    )
}

export default Sustainabilty