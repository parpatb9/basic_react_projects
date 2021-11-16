import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [que,setQue] = useState(data);
 // const {id,title,info} = data;
  const [show,setShow] = useState('');

  
  
  return <main>
    <div className="container">
      <h3>question and answer</h3>
      <section className="info"> 
      {
        que.map((q)=>{
         // const {id,title,info} = q;
          return <SingleQuestion key={q.id} {...q}/>
            
          

        })
      }
      </section>
    </div>



 

  </main>;
}

export default App;
