import React from 'react';
import profilePic from "../../assets/cover/profilePic.jpg";


function About() {
  return (
    <section className='my-5'>
      <h1 id="about">About Me</h1>
      <img src={profilePic} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
        I am a full stack web developer. I am proficient in Front-End and Back-End development. I am a high-school writing teacher and have been certified to teach AP Computer Science. I have grown a passion for coding 
        and am looking for ways to further advance my knowledge of these skills. I am a hard worker who strives to find the answers to questions I don't know yet. I always say there is still more to learn and with that 
        growth-mindset I have been able to do so much and learn so much in the process.       </p>
      </div>
    </section>
  );
}

export default About;