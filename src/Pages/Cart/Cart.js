import React from 'react'
import Navbar from '../../Layout/Header/Navbar/Navbar'
import {useDispatch,useSelector} from 'react-redux' 
import { clearCart, removeCart } from '../../Redux-toolkit/Reducer-actions/cart-reducer';
function Cart() {
    const dispatch = useDispatch();
    let CartItems = useSelector((state)=>state.cart.items)
    let Totalprice = 0;
    const totalprice = CartItems.map((i)=>{return Totalprice = Totalprice + i.price})
    console.log(CartItems)
return (
    <div>
    <Navbar />
            <div className='cart'>
                <h2>Cart</h2>
                {CartItems.map((item)=>{
                        return <>
                        <table className="table">
                        <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                    <th scope='col'>remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td><h2>{item.title}</h2></td>
                                    <td><h2>{item.price} $</h2></td>
                                    <td>< img src = { item.image } alt = { item.title } style={{height:'200px'}}/></td>
                                    <td><button className='btn btn-dark' onClick={()=>{dispatch(removeCart(item))}}>Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                    })}
                <h3 style={{fontSize:'50px',fontWeight:'700'}}>Total price : {Totalprice} $</h3>
                <button className='btn btn-dark' onClick={()=>{dispatch(clearCart())}}>Clear</button>
            </div>
    </div>
  )
}

export default Cart
