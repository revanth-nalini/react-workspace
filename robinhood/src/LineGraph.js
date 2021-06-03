import React, { useEffect, useState } from 'react'
import './LineGraph.css'
import { Line } from 'react-chartjs-2'

function LineGraph() {

    const[graphData,setGraphData] = useState([]);
    useEffect(() => {
        createMockData();
    }, [])

    const createMockData = () =>{
        let data = [];
        let value = 50;
        for(let i=0;i<366;i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value+=Math.round(Math.random()<0.5?1:0) * Math.random()*10
            data.push({x:date,y:value})
        }
        setGraphData(data);
    }

    return (
        <div className="lineGraph">
            <Line 
                data={{
                    datasets: [{
                        type: "line",
                        data: graphData,
                        backgroundColor: "black",
                        borderColor: "#5AC53B",
                        borderWidth: 2,
                        pointBorderColor: 'rgba(0,0,0,0)',
                        pointBackgroundColor: 'rgba(0,0,0,0)',
                        pointHoverBorderColor: '#5AC53B',
                        pointHoverBackgroundColor: '#000000',
                        pointBorderWidth: 4,
                        pointHoverRadius: 6
                    }]
                }} 
                options={{
                    maintainAspectRatio: false,
                    legend:{
                        display: false
                    },
                    tooltips:{
                        mode:"index",
                        intersect: false
                    },
                    scales:{
                        xAxes:[{
                            type:"time",
                            time:{
                                format:"MM/DD/YY",
                                tooltipFormat:"ll"
                            },
                            ticks: {
                                // beginAtZero: true
                                display: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                // beginAtZero: true
                                display: false
                            }
                        }]
                    }
                }}
              />
        </div>
    )
}

export default LineGraph

