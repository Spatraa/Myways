import { useState } from 'react';
import './App.css';

function App() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const handleSubmit=async(event)=>{
    event.preventDefault();
    const data={name,email,phone};
    const response=await fetch('https://test-api-v3.myways.ai/user?email=',{
      method:'POST',
      headers:{
        'Content-Type':'https://test-api-v3.myways.ai/user'
      },
      body:JSON.stringify(data)
    });
    const result=await response.json();
    alert('User created successfully');
    setName('');
    setEmail('');
    setPhone('');
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name="name" value={name} required onChange={(event)=>setName(event.target.value)}></input>
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" value={email} required onChange={(event)=>setEmail(event.target.value)}></input>
        <label htmlFor='phone'>Phone</label>
        <input type="tel" id="text" name='text' value={phone} required onChange={(event)=>setPhone(event.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
