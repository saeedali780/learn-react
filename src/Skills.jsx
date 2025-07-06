import React,{useState} from 'react';

const Skills = () => {
    const [skills,setSkills] = useState([]);
    const handleSkills = (e) => {
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setSkills([...skills, e.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }
    }
  return (
    <div>
        <h1>Select your skills</h1>
        <input onChange={handleSkills} type="checkbox" id="html" name="skill" value="HTML" />
        <label htmlFor="html">HTML</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="css" name="skill" value="CSS" />
        <label htmlFor="css">CSS</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="javascript" name="skill" value="JavaScript" />
        <label htmlFor="javascript">JavaScript</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="react" name="skill" value="React" />
        <label htmlFor="react">React</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="nodejs" name="skill" value="Node.js" />
        <label htmlFor="nodejs">Node.js</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="mongodb" name="skill" value="MongoDB" />
        <label htmlFor="mongodb">MongoDB</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="express" name="skill" value="Express" />
        <label htmlFor="express">Express</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="nextjs" name="skill" value="Next.js" />
        <label htmlFor="nextjs">Next.js</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="tailwind" name="skill" value="Tailwind" />
        <label htmlFor="tailwind">Tailwind</label>
        <br/> <br/>
        <input onChange={handleSkills}  type="checkbox" id="typescript" name="skill" value="TypeScript" />
        <label htmlFor="typescript">TypeScript</label>
        <br/> <br/>

        <h1>Selected Skills: {skills.toString()}</h1>
    </div>
  )
}

export default Skills