import React,{useState,useEffect} from 'react'

const Fetching = () => {
    const [state,setState] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data =>{
            setState(data)
        })
    },[])
  return (
    <React.Fragment>
        <div className="container mt-3">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>USER id</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                    </tr>
                </thead> 
               <tbody>
               {
                    state.map(value=>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.body}</td>
                        </tr>
                        )
                }   
                </tbody>
            </table>
        </div>
    </React.Fragment>
  )
}

export default Fetching;