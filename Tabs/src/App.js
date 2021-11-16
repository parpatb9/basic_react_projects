import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () =>{
    const response = await fetch(url);
    const newData = await response.json();
   
    setJobs(newData);
    setLoading(false);
  }
  console.log(jobs);
  


  useEffect(() => {
    fetchJobs();
  }, []);
  
  if(loading === true){
    return <section className="loading">
      Loading...

    </section>

  }
  

  const { company, dates, duties, title } = jobs[value];
 



  return <section className="section">
    <div className="title">
      <h2>experience</h2>
      </div>
    <div className="underline"></div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
      {jobs.map((item, index) => {
        return <button key={item.id}
          onClick={() => setValue(index)}
          className={`job-btn ${index === value && 'active-btn'}`}>
          {item.company}

        </button>
      })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return <div className="job-desc" key={index}>
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
           <p> {duty}</p>
          </div>
        })}
      </article>

    </div>
    
    

  </section>
  
}


export default App
