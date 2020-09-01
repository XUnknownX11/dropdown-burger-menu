import React, {useState, useEffect, useRef} from 'react'
import './App.css';

const logo = "logo"

const Burger = ({ open, setOpen, ...props }) => {

  return (
    <button  aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </button>
  )
  
}

const BurgerMenu = ({ open, navHeight=60, children, ...props }) => {

  let style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '2rem',
    backgroundColor: 'gray',
    position: 'absolute',
    marginTop: window && navHeight + window.pageYOffset, 
    transform: open ? `translateY(0)` : `translateY(-100%)`,
    top: 0,
    right: 0,
    transition: 'transform 0.3s ease-in-out',
  }


  return (
    <nav style={style} aria-hidden={!open} {...props}>
      {children}
    </nav>
  )
}

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const node = useRef();

  const hideBar = () => {
    setOpen(false)
  }

  useEffect(() => {
    hideBar()
    window.addEventListener("scroll", hideBar, { passive: true });
    return () => {
      window.removeEventListener("scroll", hideBar);
    };
  }, []);

  const style={
      display: 'flex',
      width: '100%',
      background: 'white',
      height: 80,
      position: "fixed",
      zIndex: 50,
      transition: ".3s"
  }

  return (
    <div ref={node}>  
      <BurgerMenu open={open}>
        <a href="/">link1</a>
          <a href="/">link2</a>
          <a href="/">link3</a>
          <a href="/">link4</a>
          <a href="/">link5</a>
          <a href="/">link6</a>
      </BurgerMenu>
      <nav
        style={style}
      >
        <Burger open={open} setOpen={setOpen} />
      </nav>
    </div>
  )
}

const ReactLogoAndStuff = () => (
  <header className="App-header">
    
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
)

function App() {

  return (
    <div className="App">
    <Navbar />
      <ReactLogoAndStuff />
      <ReactLogoAndStuff />
      <ReactLogoAndStuff />
      <ReactLogoAndStuff />
    </div>
  );
}



export default App;
