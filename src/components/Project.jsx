import {projects} from './projects';
import '../css-files/projects.css';

function Project() {

  return (
    <section id='project' className='project'>
      <div>
        <h1>Things I've Built⚡</h1>
      </div>
      <div className='proj-container'>
        {projects.map((p, i) => (
          <div key={i} className='proj-cards'>
            <img src={p.image} alt={p.name} className='picture' />
              <div className='proj-text'>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <a href={p.url} target='_blank'  rel="noopener noreferrer" >Click</a>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Project;