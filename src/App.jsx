import { useState } from 'react'

import './App.css'

function App() {
  const [personList, setPersonList] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault();

    setPersonList([...personList, {
      name: name,
      age: age,
      country: country

    }])
      //setPersonList((prevPersonList)=>[...prevPersonList, {
       // name: name,
      //  age: age,
      //  country: country

     // }]), {

      
    setName("");
    setAge(0);
    setCountry("");
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="name">Name:</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} id="name" type="text" />
        </div>
        <div className="inputContainer">
          <label htmlFor="age">Age:</label>
          <input value={age} onChange={(e)=>setAge(e.target.value)} id="age" type="number" />
        </div>
        <div className="inputContainer">
          <label htmlFor="country">Country:</label>
          <input value={country} onChange={(e)=>setCountry(e.target.value)} id="country" type="country" />
        </div>
        <button>Submit</button>


      </form>
    </>
  )
}

export default App
