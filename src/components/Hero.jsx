import Me from '../images/me.png';
import '../css-files/hero.css';

function Hero() {

  return (
    <section className='hero-section'>
      <div className='pic'>
        <img src={Me} alt='Me' className='me' />
      </div>

      <aside className='hero-text'>
       <div>
         <h1>
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
      </aside>
     
    </section>
  );
}

export default Hero;