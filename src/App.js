import './App.css';
import React,{useState} from 'react';
function App() {
  const [result,setResult]= useState("");
  const hanlde = (e)=>
  {
    setResult(result.concat(e.target.value));
  }

  const calc= (e)=>{
    setResult(eval(result))
  }
  return (
    <div className="App">
      <h1 className='text-center'>
        Calculator Using React with EVAL function</h1>
        <br/>
        <div className='container flex flex-col items-center justify-center '>
          <div className='w-2/5 bg-[#DEDEDE] rounded-md ' id='inputs'>
            <form onSubmit={result}>
            <input type='text' name='input' value={result} onChange={hanlde} className='w-full bg-[#DEDEDE] h-[40px] border-4 border-orange-500 text-right text-xl font-bold tracking-wide rounded-md'/>
            </form>
            </div>
          <div className='bg-[#DEDEDE] flex flex-col items-center justify-center w-2/5 rounded-md ' id='buttons'>
        <div>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 my-1 mx-2 rounded-md w-24 font-bold' onClick={()=>setResult('')} value={'AC'}>AC</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 my-1 mx-2 rounded-md w-24 font-bold' onClick={hanlde}>/</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 my-1 mx-2 rounded-md w-24 font-bold' onClick={hanlde}>*</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 my-1 mx-2 rounded-md w-24 font-bold' onClick={calc}>=</button>
      </div>
      <div>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={9}>9</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={8}>8</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={7}>7</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={'+'}>+</button>
      </div>
      <div>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={6}>6</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={5}>5</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={4}>4</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={'-'}>-</button>
      </div>
      <div>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={3}>3</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={2}>2</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={1}>1</button>
        <button className='border-solid border-4 border-sky-500 bg-orange-500/100 px-4 mx-2 my-1 rounded-md w-24 font-bold' onClick={hanlde} value={0}>0</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
