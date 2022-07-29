import React, { useState,useEffect } from 'react'

const ShoppingComponent = () => {
    const [categorys,setCategorys] = useState([]); 
    const [product,setProduct] = useState([])
    let LoadCategirys = () =>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data =>{
            data.unshift("All")
            setCategorys(data)
        });
    };

    let LoadProducts = () => {
        fetch("http://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data =>{
            setProduct(data)
        })
    }
    useEffect(()=>{
        LoadCategirys();
        LoadProducts();
    },[])
  return (
    <React.Fragment>
        <div className="container-fluid">
            <header className='bg-warning text-center text-white'>
                <h1>shopping cart</h1>
            </header>
           <section className='row'>
            <nav className='col-3'>
                <div>
                    <label>Select a Category</label>
                </div>
                <select className='form-select'>
                    {
                        categorys.map(value=>
                            <option key={value}>{value}</option>
                            )
                    }
                </select>
            </nav> 
            <main className='col-9 d-flex flex-wrap'>
                    { 
                        product.map(val =>
                            <div  key={val.id}className='card m-2 w-25'>
                                <img src={val.image} height="150" width={200} alt=""/>
                                <div className='card-header'>
                                    <p>{val.title.slice(0,10)}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{val.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{val.rating.rate}</dd>
                                            <button className='btn btn-success'>Add to Cart</button>
                                    </dl>
                                </div>
                            </div>
                            )
                    }
            </main>
           </section>
        </div>
    </React.Fragment>
  )
}

export default ShoppingComponent;