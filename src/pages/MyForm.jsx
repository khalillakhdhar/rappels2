import React  from 'react';
import { useState,useEffect } from 'react';
export default function MyForm() {
    // use effect to form with data name age and adresse
   const [form, setForm] = useState({name:"",age:18,adresse:""})
   const [message, setMessage] = useState("")
   // use effect if age< 18 message = "you are not allowed"
    // use effect if age> 18 message = "you are allowed"
    useEffect(() => {
        // read form data
        console.log(form);
        // detect age 
        if (form.age < 18) {
            setMessage("you are not allowed")
        }
        else {
            setMessage("you are allowed")
        }
    }, [form.age])
    // arrow function handleSubmit event prevent default
    const handleSubmit = (e) => {
        e.preventDefault();
        // read form data
        alert(JSON.stringify(form));
        // detect age
    }

  return (
    <>
    
    <form onSubmit={handleSubmit}>
        Name:<input type="text" pattern="[A-Z a-z]{3,50}" name="name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <br></br>Age<input required min="1" type="number" name="age" value={form.age} onChange={(e)=>setForm({...form,age:e.target.value})}/>
        <br></br>Adresse<input required type="text" name="adresse" value={form.adresse} onChange={(e)=>setForm({...form,adresse:e.target.value})}/>
        <button type="submit">Evaluer</button>
        </form>
        <p>{message}</p>
    
    </>
  );
}
