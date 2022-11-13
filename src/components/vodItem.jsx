import React from 'react'
import { Link } from 'react-router-dom';

function VodItem(props) {

    let item = props.item;


    let image = item.Poster
    if (item.Poster == 'N/A') {
        image = 'https://m.media-amazon.com/images/M/MV5BYTUyNjZkMj…jUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_SX300.jpg'
    }
    
    return (
        
        <article className='col-md-3 p-2'>
            <div className='border shadow h-100 overflow-hiden'>
                <img src={image} className='me-2 w-100' alt={item.Title} />
                <div className='p-2'>
                    <h4>{item.Title}</h4>
                    <p><strong>Year:</strong> {item.Year}</p>
                    <Link to={"/info/" + item.imdbID} className='btn btn-dark'>More info</Link>
                </div>
            </div>
        </article>
        
    )
}

export default VodItem