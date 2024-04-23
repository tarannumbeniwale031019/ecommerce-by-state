import React, { useState } from 'react'
import Rating from '@mui/material/Rating';

const Home = (props) => {
  let [str,setStr]=useState("")
  let fun=(e)=>{
    setStr(e.target.value)

  }
  let clr=()=>{
    setStr("")
    props.search("")
  }

  return (<>
  <input type='text' placeholder='enter prod' onChange={fun} value={str} />
  <button onClick={()=>props.search(str)}>serach</button>
  <button onClick={clr}>clearfilter</button>
      <div className='con'>
    {
      props.data.map((item)=>{
        return(<div className='prod'>
          <div className='img'>
            <img src={item.images[0]}/>
          </div>
          <p>Name:{item.title}</p>
          <p>Desc:{item.description}</p>
          <p>Price:{item.price}</p>
          <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
          <p>Category:{item.category}</p>
          <button onClick={()=>props.addprod(item)}>AddCart</button>
        </div>)
      })
    }
  </div>
  </>
 )
}

export default Home