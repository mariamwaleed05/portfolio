import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../Supabase';

const Test = () => {
const [Services , setServices] = useState([
    {
id:"",
icon:"",
Name_EN:"",
Name_AR:""

}
]);
    useEffect(()=>{
        async function callGetAPI(){
           const res =  await supabase.from("Services").select("*");
           setServices(res.data)
           console.log(res.data[0]);
        }
        callGetAPI();
    },[]);

    return ( 
        <>
<p className="">{Services[0].id}</p>
{/* <img src={Services[0].icon} /> */}
 {/* <p>{Services[0].Name_EN}</p>
<p>{Services[0].Name_AR}</p> */}
{ 
  Services[0].Tag_EN.map((c)=>{
    return <h1>{c}</h1>})

}
 
  </>
     );
}
 
export default Test;