import React, {useEffect,useState} from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import './TopNav.css';
import ThemeButton from "./ThemeButton/ThemeButton";
import LangButton from "./LangButton/LangButton";
import MenuButton from "./MenuButton/MenuButton";

function TopNav(){
  const location = useLocation();
  const [apage,setPage] = useState('');
  const [status,setStatus] = useState('closed');
  const pages = ['bio','portfolio'];
  const body = document.querySelector('body');

  function getData(data){
    setStatus(data);
  }

  useEffect(()=>{
    pageSelector();
  }, [location.pathname]);

  useEffect(()=>{
    if(window.innerWidth < 1024){
      if(status === 'opened'){body.classList.add('menu-opened')}
    }
    window.addEventListener("resize", windowOnResize);
    return () => {
      window.removeEventListener("resize", windowOnResize);
    }
  }, [status]);

  function windowOnResize(){
    if(window.innerWidth > 1023){
      if(status === 'opened'){closeMenu()}
    }
  };

  function pageSelector() {
    return setPage(location.pathname)
  };

  function closeMenu(){
    setStatus('closed');
    body.classList.remove('menu-opened')
  }

  return(
    <nav className='topnav'>
      <MenuButton className='topnav-button topnav-button-menu mobonly' menu={getData} close={status} />
      <div className='topnav-logo'><Link to='/' className='topnav-link'>[Melissa Fernandes]</Link></div>
      <ul className='topnav-pagelist' data-menu={status}>
        <button className='mobonly topnav-pagelist-close' onClick={()=>closeMenu()}><i className='bi bi-x-lg' /></button>
        {pages.map((pg) => (<li key={pg}><Link to={`/${pg}`} className={`topnav-item${apage === `/${pg}` ? ' topnav-item-selected' : ''}`}>{pg}</Link></li>))}
      </ul>
      <LangButton className='topnav-button margin-left-auto' />
      <ThemeButton className='topnav-button' />
    </nav>
  )
};

export default TopNav;