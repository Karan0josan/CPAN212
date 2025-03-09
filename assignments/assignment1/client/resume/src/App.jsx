import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'

function App() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const eduResponse = await fetch('http://localhost:8000/getEdu');
        const eduData = await eduResponse.json();
        setEducation(eduData);

        const expResponse = await fetch('http://localhost:8000/getExp');
        const expData = await expResponse.json();
        setExperience(expData);

        const skillsResponse = await fetch ('http://localhost:8000/getSkills');
        const skillsData = await skillsResponse.json();
        setSkills(skillsData);

        const overviewResponse = await fetch ('http://localhost:8000/getOverview');
        const overviewData = await overviewResponse.json();
        setOverview(overviewData);
      } catch(error){
        console.log(`Error fetching data: ${error}`);
      }
    };
      fetchData();
    },[]);



  return (
    
      <div className="container">
       <h1 style={{  color:"blue", fontSize: "24px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"}} >
        My Online Portfolio
       </h1>
       <section >
        <h2 style={{  color:"blue", fontSize: "18px",marginBottom: "16px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"}}>Overview</h2>
        <ul >
        <li><strong>Name:</strong> {overview.name}</li>
        <li><strong>Phone:</strong> {overview.phone}</li>
        <li><strong>Email:</strong> {overview.email}</li>
        <li><strong>Linkedin:</strong> <a href={overview.linkedin} target="_blank"> {overview.linkedin}</a></li>
        <li><strong>Github:</strong> <a href={overview.github} target="_blank"> {overview.github}</a></li>
        </ul>

        <p >{overview.summery}</p>

       </section>
       <section>
        <h2  style={{  color:"blue", fontSize: "18px",marginBottom: "16px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"}}>Education</h2>
        {education.map((edu, index) =>(
          <div key={index}>
            <h3 style={{  color:"#555" , fontSize: "16px",marginBottom: "8px"}}>{edu.degree}</h3>
            <p><strong>Qualification: </strong>{edu.qualification}</p>
            <p><strong>Institution: </strong> {edu.institution}</p>
            <p><strong>Year: </strong> {edu.year}</p>
          </div>
        ))}
       </section>
       <section >
        <h2  style={{  color:"blue", fontSize: "18px",marginBottom: "16px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"}}>Experience</h2>
        {experience.map((exp, index)=>(
          <div key={index} >
            <h3 style={{  color:"#555" , fontSize: "16px",marginBottom: "8px"}}>{exp.title}</h3>
            <p><strong>Company: </strong>{exp.company}</p>
            <p><strong>Year: </strong>{exp.year}</p>
            <p><strong>Description: </strong><br />{exp.description}</p>
          </div>
        ))}
       </section>
       <section >
        <h2  style={{  color:"blue", fontSize: "18px",marginBottom: "16px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"}}>Skills</h2>

        <ul>
          {skills.map((skill, index)=>(
            <li key={index}>{skill}</li>
          ))}
        </ul>
       </section>
      </div>
 
   
  )
}

export default App
