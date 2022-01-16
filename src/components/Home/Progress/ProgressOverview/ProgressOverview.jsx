import React, {useState} from 'react'
import { ProgressOverviewCard } from './ProgressOverviewCard/ProgressOverviewCard';
import { Chart } from "react-google-charts";

export const ProgressOverview = () => {

    const [progress, setProgress] = useState ([
        {
            progressStatus: 'Completed',
            progressTime: 20,
        },
        {
            progressStatus: 'Left to go',
            progressTime: 30,
        },
    ]);

    const [data, setData] = useState ();
    
    const dataGraph = [["Progress", "Hours"]];
    
    progress.forEach((proData) => {
        const dataObject = Object.values(proData);
        dataGraph.push(dataObject);
    })

    const [dataCompleted, setDataCompleted] = useState (40);

    const setDataGraph = () => setData(dataGraph);
    React.useEffect(setDataGraph,[]);

    const [options, setOptions] = useState ({
        pieHole: 0.8,
        is3D: false,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none',
        backgroundColor	: 'none',
        colors: ['#FED200','#FF794F'],
        pieSliceBorderColor: 'none',
        pieSliceText: 'none',
        width: '100%',
        chartArea: {top: 10, bottom: 10},
    });

    return (
        <div className='progressOverview'>
            <h1>Progress Overview</h1>
            <div className='progressOverview__chart'>
                <Chart chartType="PieChart"
                height="190px"
                data={data}
                options={options}
                className='progressOverview__chartData'/>
                <div className='progressOverview__chartCompleted'>
                    <h1>{dataCompleted}</h1><p>%</p>
                </div>
            </div>
            <div className='progressOverview__card'>
                {progress.map( (progress,index) => <ProgressOverviewCard  key={index} progressStatus={progress.progressStatus} progressTime={progress.progressTime}/>)}
            </div>
        </div>
    )
}
