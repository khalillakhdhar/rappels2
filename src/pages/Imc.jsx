import React from 'react';
// import useeffects from 'useeffects';
 import { useState,useEffect } from 'react';
import MyForm from './MyForm';
export default function Imc() {
    // states for imc MyForm
    const [form, setForm] = useState({poid:70,taille:1.7})
    const [message, setMessage] = useState("")
    const [imcv, setImcv] = useState(0)
    // use effect if imc< 20 message = "maigre" 
    // use effect if imc> 20 and imc<=25 message = "normal"
    // use effect if imc> 25 and imc<=30 message = "surpoids"
    // use effect if imc> 30 message = "obese"
    const handleSubmit = (e) => {
        console.log("form",form);
        e.preventDefault();
        // read form data
        console.log(form);
        // calculate imc
        let indice = form.poid / (form.taille * form.taille)
        console.log("indice",indice);
        indice=Math.round(indice)
        setImcv(indice)
        // detect imc
        if (indice < 20) {
            alert("maigre "+indice)
        }
        else if (indice > 20 && indice <= 25) {
            alert("normal")
        }
        else if (indice > 25 && indice <= 30) {
            alert("surpoids "+indice)
        }
        else {
            alert("obese "+indice)
        }
    }
    useEffect(() => {
        // read form data
        console.log(form);
        // calculate imc
        let indice = form.poid / (form.taille **2)
        indice=Math.round(indice)
        console.log("indice",indice);
        setImcv(indice)
        // detect imc
        if (imcv < 20) {
            setMessage("maigre "+imcv)
        }
        else if (imcv <= 25) {
            setMessage("normal "+imcv)
        }
        else if (imcv > 25 && imcv <= 30) {
            setMessage("surpoids "+imcv)
        }
        else {
            setMessage("obese "+imcv)
        }
    }, [form, form.poid, form.taille, imcv])


  return (
    <>
{/*} imc with poids  */}
<form onSubmit={handleSubmit}  >
        Poid:<input type="number"  name="poid" value={form.poid} onChange={(e)=>setForm({...form,poid:e.target.value})}/>
        <br></br>taille<input required min="1" type="number" name="taille" value={form.taille} onChange={(e)=>setForm({...form,taille:e.target.value})}/>
        
        
        </form>
        <button type="submit">Evaluer</button>
        {/*} show message if poid and taille are not null  */}
        <p>{message}</p>

    
    </>
  );
}
