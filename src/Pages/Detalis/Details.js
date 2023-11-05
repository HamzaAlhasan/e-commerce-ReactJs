import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addCart } from '../../Redux-toolkit/Reducer-actions/cart-reducer'
import { getDet } from '../../Redux-toolkit/Reducer-actions/home-reducer'
import {useParams} from 'react-router-dom'
function Details() {
  const {productId} =useParams();
  console.log(productId);
    const products = useSelector((state)=>state.home.det)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getDet(productId))
    },[dispatch])
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 style={{fontSize:'50px',fontWeight:"700"}}>Details</h2>
          <div className="card mb-3 btn btn-dark">
          <div className="row g-0">
            <div className="col-md-4">
      <img src={products.image} className="img-fluid rounded-start" alt={products.title} style={{height:'400px',width:'500px'}} />
      </div>
      <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <h3>{products.price} $</h3>
        <button onClick={()=>{dispatch(addCart(products))}} className='btn btn-dark' style={{ width: '120px', height: '40px', marginRight: '40px' }}>Add to cart</button>
      </div>
      </div>
    </div>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Details
