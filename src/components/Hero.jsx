import Me from '../images/me.png';
import '../css-files/hero.css';

function Hero() {

  return (
    <section id='hero-section' className='hero-section'>
      <div className='pic'>
        <img src={Me} alt='Me' className='me' />
      </div>

     <div>
       <aside className='hero-text'>
       <div>
         <h1 className='hero-name'>
          Hi, I am Peter John,
        </h1>
       </div>
       <div>
        <p>
          Full Stack Developer 🙋‍♂️
        </p>
       </div>
       <div>
        <p>
          Full-Stack Developer transitioning ideas into working MERN apps
        </p>
       </div>
       <div className='btns'>
        <a className='click' href='#project'>[ My Projects ]</a>
      </div>
      </aside>
      
     </div>
    </section>
  );
}

export default Hero;