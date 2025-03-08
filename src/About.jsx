const About = () => {
    const aboutText = `Hey there! 👋 I'm Victor Horlanyo Agbozo, a passionate full-stack developer with a love for creating dynamic and user-friendly web applications.

                I specialize in React and Node.js, constantly pushing myself to learn new technologies and improve my skills. Whether it's building efficient back-end systems with Express.js or crafting sleek front-end interfaces, I thrive on solving complex problems and bringing ideas to life.

                When I'm not coding, you’ll probably find me exploring new tech, playing games, or tweaking my setup to get the perfect workflow. I'm always eager to collaborate and create innovative solutions.

                Let's build something awesome together! 🚀`
        
    return ( 
      <div id="about" className="about">
          <div className="about-cont1">

            <div className="left">
                <h1>About Me</h1>

                <div id="aboutTxt" className="about-txt-cont"><p>
                        {aboutText}
                    </p></div>
            </div>

            <div className="right">
              <div className="img-cont"></div>
            </div>
          </div>
      </div>
     );
}
 
export default About;