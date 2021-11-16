import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people,setPeople] = useState(data);

  let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
    
    
  
  return <main>
    <section className="container">
      <h3>{people.length} birthday today</h3>
      <List people={people}/>
      <button className="btn" onClick={()=>setPeople([])}>clear all</button>
      <h3> {date}-{month}-{year}</h3>
    </section>
    </main>;
}

export default App;
