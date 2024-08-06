'use client';
import React, { useRef, useState } from 'react';

const page = () => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();
    settitle("")
    setdescription("")
    setTask([...task, {title, description}])
 
  }

  const deleteTask = (i) => {
    let copytask = [...task]
    copytask.splice(i, 1)
    setTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  
  if(task.length != 0){
    renderTask = task.map((task, i) => {
      return (
      <li key= {i} className='flex justify-between items-center mb-4'>
      <div className='flex text-2xl  font-semibold mb-3 justify-between w-2/3'>
        <u><h1>TASK {i}</h1></u>
        <h3>{task.title}</h3>
        <h3>{task.description}</h3>
      </div>
      <button onClick={()=>{
        deleteTask(i)
      }} className='text-white border-2 border-gray-300 px-3 py-2 rounded-md bg-red-500 mx-3 font-bold hover:bg-red-600 hover:text-white'>Delete</button>
      </li>
      )
    
          
    })
  }
  
 
  const deleteAll = (e) => {
    e.preventDefault();
    setTask([]);
  };

  return (
    <>
      <h1 className="text-6xl text-center  font-bold bg-slate-900 text-yellow-200 p-2">
        Todo List
      </h1>

      <form onSubmit={submitHandler} >

        <input
          type="text"
          placeholder="Title"
          className="p-2 my-10 mx-10 border-s-slate-950 rounded-lg font-bold"
          value={title}

          onChange={(e) => {
            
            settitle(e.target.value)
            
          }}
        />

        <input
          type="text "
          placeholder="Description"
          className="p-2 my-10 mx-10 border-s-slate-950 rounded-lg font-bold"
          value={description}

          onChange={(e)=>{

            setdescription(e.target.value)

          }}
        />

        <button className="text-white border-2 border-slate-950 px-3 py-2 rounded-md bg-slate-800 font-bold hover:bg-slate-900 hover:text-yellow-200">
          Add Todo
        </button>
        <button onClick={deleteAll}
        className="text-white border-2 border-slate-950 px-3 py-2 rounded-md bg-red-500 mx-3 font-bold hover:bg-red-600 hover:text-white">Delete All</button>
      </form>

      <hr className='border-slate-900'/>          
      <div  className="p-8 w-full h-full my-7 text-white bg-slate-800">
       <ul>
        {renderTask}
       </ul>
    
      </div>
    </>
  );
};

export default page;
