import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getcategories, getproducts, getsinglecatgorey } from '../../Redux-toolkit/Reducer-actions/home-reducer'
import Card from '../../components/Card/Card'
import Navbar from '../../Layout/Header/Navbar/Navbar'
function Home() {
    const products = useSelector((state) => state.home.products)
    const catgories = useSelector((state)=>state.home.categories);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getproducts())
        dispatch(getcategories())
    }, [dispatch])
    return (
        <>
        <Navbar />
        <div className="container">
            <button  className='btn btn-dark' onClick={()=>{dispatch(getproducts())}}>All products</button>
            {catgories.map((c) => { return (<button key={c.id} className='btn btn-dark'
            onClick={()=>{dispatch(getsinglecatgorey(c))}}>{c}</button>) })}
            <div className="row">
                {products.map((product) => {
                    return <div className="col-3">
                        <Card  product={product} />
                    </div>
                })} 
            </div>
        </div>
        </>
    )
}

export default Home
