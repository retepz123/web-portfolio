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
        <p>You should hire me because I have strong full-stack fundamentals and a fast-learning mindset. I’ve built real MERN applications using React, Node.js, and MongoDB, turning requirements into working features. As a career shifter, I’m highly motivated, disciplined, and comfortable collaborating, debugging, and improving through feedback.</p>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;