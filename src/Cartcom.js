import React from 'react'
import Rating from '@mui/material/Rating';
const Cartcom = (props) => {
  return (<>
   {props.cart.length==0&&<div>Cart is empty</div>}
   {props.cart.length>0&& <div className='con'>

     { props.cart.map((item,index)=>{
        return(      
       <div className='prod'>
          <div className='img'>
            <img src={item.images[0]}/>
          </div>
          <p>Name:{item.title}</p>
          <p>Desc:{item.description}</p>
          <p>Price:{item.price}</p>
          <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
          <p>Category:{item.category}</p>
          <p>
            <button onClick={()=>props.decqty(index)}>-</button>
            {item.qty}
            <button onClick={()=>props.incqty(index)}>+</button>
            <p>Totalamt:{item.totalamt}</p>
          </p>
          <button onClick={()=>props.delprod(index)}>DeleteCart</button>
        </div>
        )
      })
    }
   <div>totalcart amout:{props.ctotal}</div> 
  </div>}
  </>)
}

export default Cartcom