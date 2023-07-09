import React,{useState} from 'react'
import './App.css';
const Buttonscomponent = () => {
  const [input,setInput]= useState(" ");
  const [result,setResult]= useState(0);
  const hanlde = (e)=>
  {
    setInput(e.target.value);
  }
  return (
<>
<h1 className='flex justify-center'>
        Calculator Using React without EVAL function</h1>
        <br/>
        <div className='flex items-center justify-center bg'>
        <div>
            <input type='text' name='input' value={input} onChange={hanlde} className='bg-[#DEDEDE] border-solid border-2 border-sky-500 w-3/4'/>
          <div>
        <div>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-1.5 rounded-md' onClick={()=>setInput(" ")} value={'AC'}>AC</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-1.5 rounded-md' onClick={()=>setResult(eval(input))}>=</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-1.5 rounded-md' onClick={()=>setInput()} value={'/'}>/</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-1.5 rounded-md' onClick={()=>setInput()} value={'%'}>%</button>
      </div>
      <div>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'9')} value={9}>9</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'8')} value={8}>8</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'7')} value={7}>7</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'+')} value={'+'}>+</button>
      </div>
      <div>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'6')} value={6}>6</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'5')} value={5}>5</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'4')} value={4}>4</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'-')} value={'-'}>-</button>
      </div>
      <div>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'3')} value={3}>3</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'2')} value={2}>2</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'1')} value={1}>1</button>
        <button className='border-solid border-2 border-sky-500 bg-orange-500/100 px-4 mx-2 rounded-md' onClick={()=>setInput(input+'*')} value={'*'}>*</button>
      </div>
        <h1>Result is {result}</h1>
        </div>
    </div>
    </div>
</>
  )
}

export default Buttonscomponent;
