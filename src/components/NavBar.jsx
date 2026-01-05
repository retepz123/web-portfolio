import '../css-files/nav.css';

function NavBar() {

  return (
     <nav>
        <div>
          <h1 className='text-logo'>Hi!, I'm Peter 👋</h1>
        </div>
        <ul className='text-container'>
          <li className='nav-text'>Home</li>
          <li className='nav-text'>Projects</li>
          <li className='nav-text'>Contacts</li>
        </ul>
      </nav>
  );
}

export default NavBar;