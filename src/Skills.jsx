const Skills = () => {
    const skillsText = `I specialize in full-stack web development, combining React for dynamic front-end experiences with Node.js and Express for robust back-end solutions. My expertise includes building responsive and interactive web applications, integrating APIs, and optimizing performance for seamless user experiences.

I also have a strong foundation in JavaScript, allowing me to write efficient and scalable code. Additionally, I'm proficient in EJS for templating, MongoDB for database management, and Nodemon for efficient development workflows.

Beyond web development, I am always exploring new technologies to expand my skill set and improve my problem-solving abilities.`
        
    return ( 
      <div id="skills" className="about">
          <div className="about-cont1">

            <div className="left">
                <h1>My Skills</h1>

                <div id="aboutTxt" className="about-txt-cont"><p>
                        {skillsText}
                    </p></div>
            </div>

            <div className="right">
              <div className="img-cont"></div>
            </div>
          </div>
      </div>
     );
}
 
export default Skills;