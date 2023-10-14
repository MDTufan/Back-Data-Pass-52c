
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[user,setUser]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(data => setUser(data))
    
  },[]);

  const handelsubmit=(e)=>{
    e. preventDefault()
    const form=e.target;
    
    const name=form.name.value;
    const email=form.email.value;
    console.log(name,email);
  }
  
  return (

    
    <div className='all-1'>
    
    {
      user.map(sUser => <h1 key={sUser.id}>{sUser.name}</h1>)
    }

    <form action=""  onSubmit={handelsubmit}>
    <input type="text" name="name" id="" />
    <br />
    <input type="email" name="email" id="" />
    <br />
    <button type='submit'>Click</button>

    </form>

    </div>
     
    
      
  )
}
    
export default App
