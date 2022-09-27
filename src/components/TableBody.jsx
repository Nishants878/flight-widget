import { useEffect, useState } from "react";

import TableRow from './TableRow'


const TableBody=() =>{
  const[flights,setFlights]=useState(null);

  const getFlights = () =>{
    fetch('http://localhost:8000/flights').then(res => res.json()).then(flightsData => setFlights(Object.values(flightsData?.data))).catch(err => console.log(err))
  };

  useEffect(()=>{
    getFlights()
  },[]);

  console.log(flights)
    return (
     <tbody>
    {flights?.map((flight,_index)=>(
      <TableRow key={_index} flight={flight}/>
    ))}
     </tbody>
    );
  }
  
  export default TableBody;
  