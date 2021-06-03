import React, { useEffect, useState } from 'react'
import './Result.css'
import VideoCard from './VideoCard'
import axios from './axios'
import FlipMove from 'react-flip-move'

function Result({selectedOption}) {

    const[movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(selectedOption);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    },[selectedOption])

    return (
        <div className="result">
            {
                (movies.length>0) ? (
                    <FlipMove>
                        {
                            movies.map(movie =>(
                                <VideoCard key={movie.id} movie={movie} />
                            ))
                        }
                    </FlipMove>
                ) : (
                    <h1 className="result_noData">Select genere to view movies</h1>
                )
            }
        </div>
    )
}

export default Result
