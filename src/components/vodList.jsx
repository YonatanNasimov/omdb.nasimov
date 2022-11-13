import React from 'react'
import VodItem from './vodItem'

function VodList(props) {
  return (
    <main style={{minHeight:"600px"}} className='container-fluid py-5'>
      <div className='container'>
        <h2>List of TV shows: </h2>
        <div className='row'>
          {props.vod_ar.map(item => {
            return(
              <VodItem key={item.imdbId} item={item} />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default VodList