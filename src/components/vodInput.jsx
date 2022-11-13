import React,{useRef} from 'react'
import {useNavigate} from "react-router-dom"

function VodInput() {
  const inputRef = useRef();
  const nav = useNavigate();

  const onKeyboardClick = (e) =>{
    if(e.key == "Enter"){
      onSearchClick();
    }
  }

  const onSearchClick = () => {
    let input_val = inputRef.current.value;
    nav(`/?s=${input_val}`)
  }


  return (
    <header style={{background:"black"}} className='container-fluid p-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo col-auto border'>
            <h2 className='text-white'>V.O.D</h2>
          </div>
          <nav className='d-flex col-md-11'>
            <input onKeyDown={onKeyboardClick} ref={inputRef} placeholder='search for movie or game...' type={'search'} className="form-control" />
            <button onClick={onSearchClick} className='btn btn-warning'>Search</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default VodInput