import '../css-files/nav.css';

function NavBar() {

  return (
     <nav>
        <div>
          <h1 className='text-logo'>Hi!, I'm Peter 👋</h1>
        </div>
        <ul className='text-container'>
          <li><a className='nav-text' href='#hero-section'>Home</a> </li>
          <li><a className='nav-text' href='#skills'>Skills</a> </li>
        </ul>
      </nav>
  );
}

export default NavBar;