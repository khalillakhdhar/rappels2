import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';
function Reactpage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
    setData(response.data);
    })
    .catch(error => {
    console.log(error);
    });
    }, []);
    return (
    <div>
    <h1>Liste des taches</h1>
    <table className="table table-bordered">
    <thead>
    <tr>
    <th>title</th><th>Completed</th>
</tr>
</thead>
<tbody>
{data.map(user => (
<tr key={user.id}>
<td>{user.title}</td>
<td>{user.completed.toString()}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}


export default Reactpage