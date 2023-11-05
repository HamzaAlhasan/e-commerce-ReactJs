import React from 'react'
import './Card.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../../Redux-toolkit/Reducer-actions/cart-reducer';
import { Link } from 'react-router-dom';
function Card({ product }) {
    const dispatch = useDispatch();
    return (
            <div className="card h-100 btn btn-dark">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-dark" >Details</Link>
                    <div className='ca' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <svg style={{ color: 'red' }} xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <button className='btn btn-dark' style={{ width: '120px', height: '40px', marginRight: '40px' }} onClick={()=>{dispatch(addCart(product))}}>Add to cart</button>
                    </div>
                </div>
            </div>
    )
}

export default Card
