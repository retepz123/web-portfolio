import '../css-files/skills.css';
import {skills} from '../components/skill';

function Skills() {

  return (  
    <section id='skills' className='skills'>
      <div>
        <h1>Expertise</h1>
      </div>
      <div className='cards'>
        {skills.map((x, i) => (
          <div key={i} className='skill-cards'>
            <img src={x.image} alt='x.name' className='icons' />
            <div className='skill-text'>
              <p className='skill-title'>{x.name}</p>
              <p>{x.description}</p>
              </div>
            </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;