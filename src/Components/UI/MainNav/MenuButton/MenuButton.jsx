import React, {useEffect,useState} from "react";

function MenuButton({className, menu, close}){
  const [status,setStatus] = useState('closed');
  
  useEffect(()=>{
    menu(status);
  },[status]);

  useEffect(()=>{
    setStatus(close);
  },[close]);

  function setMenu(){
    setStatus('opened');
  }

  return(<button className={className} onClick={() => setMenu()}><i className='bi bi-list' /></button>)
};

export default MenuButton;