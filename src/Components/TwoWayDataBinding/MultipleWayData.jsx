import React,{useState} from 'react'

const MultipleWayData = () => {
    const [state,setState] = useState({name : '', price :0, city : '', stock :false});
    let handleName = (e) => {
            setState({
                Name : e.target.value,
                price : state.price,
                city : state.city,
                stock : state.stock
            }) 
    }
    let handlePrice = (e) => {
        setState({
            price :e.target.value,
            city : state.city,
            stock : state.stock,
            Name : state.name
        })
    }
    let handleCity = (e) => {
        setState({
            price :state.price,
            city : e.target.value,
            stock : state.stock,
            Name : state.name
        })
    }
    let handleStock = (e) => {
        setState({
            price :state.price,
            city : state.city,
            stock : e.target.checked,
            name : state.name
        })
    }
  return (
    <React.Fragment>
        <div className="container mt-4">
            <div className="row">
            <div className='col-6'>
                <dt>Name</dt>
                <dd><input type="text" onChange={handleName} /></dd>
                <dt>Price</dt>
                <dd><input type="text" onChange={handlePrice} /></dd>
                <dt>City</dt>
                <dd>
                    <select className='' onChange={handleCity}>
                        <option>Select</option>
                        <option>Delhi</option>
                        <option>hyd</option>
                    </select>
                </dd>
                <dd>
                    <input type="checkbox" onChange={handleStock} />Availble
                </dd>
                <dd>
                    <button className='btn btn-warning'>Register</button>
                </dd>
           
                </div>
        <div className="col-6">
            <dl>
                <dt>Name</dt>
                <dd>{state.name}</dd>
                <dt>Price</dt>
                <dd>{state.price}</dd>
                <dt>City</dt>
                <dd>{state.city}</dd>
                <dt>Stock</dt>
                <dd>{(state.stock===true) ? "Available" : "Out of Stock"}</dd>
            </dl>
        </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default MultipleWayData;
