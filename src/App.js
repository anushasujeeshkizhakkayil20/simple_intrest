import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const[interest,setInterest] = useState(0)
  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[isPrinciple , setIsPrinciple] = useState(true)
  const[isRate , setIsRate] = useState(true)
  const[isYear , setIsYear] = useState(true)
   
  const getValidate = (e)=>{
  const { name,value}=e.target

  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
    if(name==='principle')
    {setPrinciple(value)
      setIsPrinciple(true)}
      else if(name==='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)

      }

    }
    else{
      if(name==='principle')
      {setPrinciple(value)
        setIsPrinciple(false)}
        else if(name==='rate'){
          setRate(value)
          setIsRate(false)
        }
        else{
          setYear(value)
          setIsYear(false)
        }

        }
      
    }

    const handleCalculate = (e)=>{
      e.preventDefault()
      if(!principle || !rate || !year){
        alert('please fill in the form')
      }
      else{
        //alert('submited')
        setInterest(principle*rate*year/100)
      }
    } 
    const handleReset = (e)=>{
      setInterest(0)
      setPrinciple(0)
      setRate(0)
      setYear(0)
      setIsPrinciple(true)
      setIsRate(true)
      setIsYear(true)

    }
  


  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded'>
      <h1>Simple Intrest App</h1>
      <p>Calculate simple interest Easily</p>
      <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4  shadow'>
        <h1>₹ {' '}{interest}</h1>
        <p>Total simple Interst</p>
      </div>
      <form class='mt-5' onSubmit={handleCalculate}>
        <div className='mb-3'>
           <TextField name='principle' value={principle || ""}onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Principal Amount" variant="outlined" />
        </div>
        { !isPrinciple &&
        <div>
          <p className='text-danger fw-bolder'>Invalid input</p>
        </div>
          
        }
        <div className='mb-3'>
           <TextField name='rate' value={rate || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Rate of Intrest(p.a) %" variant="outlined" />
        </div>
        { !isRate &&
        <div>
          <p className='text-danger fw-bolder'>Invalid input</p>
        </div>
        }

        <div className='mb-3'>
           <TextField name='year' value={year || ""} className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" onChange={(e)=>getValidate(e)}  />
        </div>
        { !isYear &&
        <div>
          <p className='text-danger fw-bolder'>Invalid input</p>
        </div>
        }
        <Stack direction="row" spacing={2} className='mt-5'>
        <Button type='Submit'disabled={isPrinciple && isRate && isYear?false:true} className='bg-success'style={{width:'200px' , height:'50px'}} variant="contained">Calculate</Button>
         <Button onClick={handleReset} variant="outlined" style={{width:'200px' , height:'50px'}} >Reset</Button>
           </Stack>
      </form>
    </div>
    </div>
  );
}

export default App;
