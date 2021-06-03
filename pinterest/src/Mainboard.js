import React, { useEffect } from 'react'
import Post from './Post'
import './Mainboard.css'
import { useRecoilState } from 'recoil'
import { nextState, queryState } from './recoil/next'

const Mainboard = ({result, apicall, input}) => {

    const[next, setNext] = useRecoilState(nextState);
    const[query, setQuery] = useRecoilState(queryState);

    useEffect(() => {
    }, [query])

    const callNext = () =>{
        apicall("request");
    }

    console.log(result)

    return (
        <div className="mainboard">

            <div className="mainboard__gallery">
                {
                    (result.length!=0) ? (
                        result?.map( (image, i) => (
                            <Post 
                                key = {i}
                                imageURL = {image.urls}
                                description = {image.alt_description}
                            />
                        ))
                    ) : (
                        <h2>Search to view results</h2>
                    )
                }
            </div>

            <div className="mainboard__load">
                {
                    (next!=null) ? (
                         <h4 onClick={callNext}>Load More</h4> 
                        ): ( 
                            <></>
                        )
                }
            </div>

        </div>
    )
}

export default Mainboard
