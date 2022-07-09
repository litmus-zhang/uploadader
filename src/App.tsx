import React from 'react';
import logo from './logo.svg';
import './App.css';
import Papa from 'papaparse'
import duplicate from './helper'

//Function for removing duplicate objects with the same email in an array

function App()
{
  const [highlighted, setHighlighted] = React.useState(false);
  const [contact, setContact] = React.useState([]);
  return (
    <div className="App">
      <h1 className='text-3xl'>File Uploader</h1>
      <div className={`p-6 my-2 mx-auto max-w-md border-2 rounded-md ${
        highlighted ? 'border-green-600 bg-green-200' : 'bg-gray-100'
      }`}
        onDragEnter={()=>setHighlighted(true) }
        onDragLeave={()=>setHighlighted(false) }
        onDragOver={(e) =>
        {
          e.preventDefault()
         }}
        onDrop={(e) =>
        {
          e.preventDefault()
          setHighlighted(false)
          // console.log(e.dataTransfer.files)
          Array.from(e.dataTransfer.files).filter(file => file.type === 'text/csv').forEach((file) =>
          {
          // console.log(file)
            Papa.parse<Object>(file, {
              header: true,
              complete: (results) =>
              {
                console.log(results.data, typeof (results))
                const result = duplicate(results.data, "email")
                console.log(result)
                setContact(result)
              }
            })
        
           })
         }}
      > 
        DROP HERE
      </div>
      <ul>
        {contact.map((contact, index) => <li>
          <strong key={index}>{contact.name}</strong>: {contact.email}
          

        </li>)}
      </ul>
    </div>
  );
}

export default App;
