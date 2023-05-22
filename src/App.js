import React from 'react';
import { Routes,Link,Route } from 'react-router-dom';
import Reactpage from './pages/Reactpage';
import Nodepage from './pages/Nodepage';
import { Mongoosepage } from './pages/Mongoosepage';
import { Navbar } from './pages/layout/Navbar';
import MyForm from './pages/MyForm';
import Imc from './pages/Imc';
export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Reactpage/>}/>
      <Route path="/node" element={<Nodepage></Nodepage>}/>
      <Route path="/mongoose" element={<Mongoosepage/>}></Route>
      <Route path="/form" element={<MyForm/>}></Route>
      <Route path="/indice" element={<Imc/>}></Route>



    </Routes>
    </>
  );
}
