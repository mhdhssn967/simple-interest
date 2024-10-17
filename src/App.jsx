import { TextField, Stack, Button } from '@mui/material'

import './App.css'
import { useState } from 'react'

function App() {

  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [invalidPrinciple,setInvalidPrinciple]=useState(false)
  const [invalidRate,setInvalidRate]=useState(false)
  const [invalidYear,setInvalidYear]=useState(false)



  const validateInputs=(inputTag)=>{
    console.log(typeof inputTag);
    const {name,value}=inputTag
    console.log(name,value);
    console.log((!!value.match(/^\d*\.?\d+$/)));
    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }
    else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
    }
    else if(name=='year'){
      setYear(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
    }
  }
  const calculateInterest=(e)=>{
    e.preventDefault()
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }
    else{
      alert("Fill the form completely!!!")
      
    }
  }
  
  const resetValues=()=>{
    setInterest(0)
    setPrinciple('')
    setRate('')
    setYear('')
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }




  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3>Simple Interest App</h3>
      <p>Calculate your simple interest easily!</p>
      <div className="bg-warning text-light p-5 rounded text-center">
        <h1>&#8377; {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
      </div>
      <form className='mt-5'>
        {/* principle */}
        <div className="mb-3">
        <TextField name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="&#8377; Principle Amount" variant="outlined" value={principle}/>
        </div>
        {/* Invalid Principle */}
        {invalidPrinciple && <div className='mb-3 text-danger fw-bolder'>
          Invalid Principle amount!!!
        </div>}
        {/* Rate */}
        <div className="mb-3">
        <TextField name='rate' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" value={rate}/>
        </div>
        {/* Invalid Rate */}
        {invalidRate && <div className='mb-3 text-danger fw-bolder'>
          Invalid Rate!!!
        </div>}
        {/* Year */}
        <div className="mb-3">
        <TextField name='year' value={year} onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
        </div>
        {/* Invalid Year */}
        {invalidYear && <div className='mb-3 text-danger fw-bolder'>
          Invalid Year!!!
        </div>}

      <Stack direction="row" spacing={2}>
      <Button type='submit' disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" className='w-50 bg-dark' style={{height:'70px'}} onClick={calculateInterest}>CALCULATE</Button>
      <Button variant="outlined" onClick={resetValues}className='w-50 border border-dark text-dark' >RESET</Button>
      </Stack>
      </form>
    </div>
    </div>
  )
}

export default App
