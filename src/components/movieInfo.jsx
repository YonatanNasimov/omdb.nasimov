import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function MovieInfo(props) {
    const params = useParams();
    const nav = useNavigate();
    const [item,setItem] = useState({});

    useEffect(() => {
        doApi();
    },[])

    const doApi = async() => {
        let myUrl = `http://www.omdbapi.com/?i=${params["id"]}&apikey=5a292f28`;
        let resp = await fetch(myUrl);
        let data = await resp.json();
        console.log(data);
        setItem(data)
      }

    return (
        <main style={{ minHeight: "600px" }} className='container p-2'>
            <div className='col-md-9 mx-auto p-5'>
                <div style={{borderRadius:"4px",justifyContent:"space-between"}} className='border shadow row bg-dark p-0'>
                    <div className='col-md-5 p-0 m-0'>
                        <img style={{borderRadius:"4px"}}className='w-100 h-100' src={item.Poster} alt={item.Title} />
                    </div>
                    <div className='col-md-7 h-100 p-3 text-white '>
                        <h3 className='text-center'>{item.Title}</h3>
                        <p><strong>Runtime: </strong>{item.Runtime}</p>
                        <p><strong>Rating: </strong>{item.imdbRating}</p>
                        <p><strong>Ganere: </strong>{item.Genre}</p>
                        <p><strong>plot: </strong>{item.Plot}</p>
                        <button onClick={() =>{
                            nav(-1)
                        }} className='btn btn-warning'>Go Back</button>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default MovieInfo
