import React,{useState,useEffect} from 'react'
import Address from './Address';

export default function Name() {
    const [name,setName] = useState("")

    useEffect(()=>{
        const getName = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Fenisha")
            },4000)
        });
        getName.then(result=>{
            setName(result)
        })
    },[])

    if(!name){
        return <h2>Loading Name..</h2>
    }
  return (
    <>
    <h1>Name Title</h1>
    <h3>{name}</h3>
    <Address/>
    </>
  )
}
