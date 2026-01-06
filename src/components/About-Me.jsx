import '../css-files/aboutMe.css';

function AboutMe() {

  return (  
    <div className='container'>
      <div className='about-me'>
        <h1>ABOUT ME</h1>
      </div>

      <div className='line1'>
      </div>

      <div className='text-text'>
          <div className='about-text'>
        <p>
          I’m a career shifter who transitioned into web development through a
full-stack bootcamp. I enjoy building interactive, user-friendly apps
and solving real-world problems.
        </p>
      </div>
      
      <div className='hire'>
        <p>You should hire me because I bring a strong learning mindset, solid full-stack fundamentals, and the ability to turn requirements into working features. I’ve trained in building real MERN applications—handling frontend UI with React, backend logic with Node.js, and data with MongoDB. As a career shifter, I’m highly motivated, disciplined, and used to learning quickly. I focus on writing clean, maintainable code and I’m comfortable collaborating, debugging, and improving based on feedback.</p>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;