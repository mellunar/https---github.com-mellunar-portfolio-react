import React, {useEffect,useState} from "react";

function ThemeButton({className}){
  const [icon,setIcon] = useState('moon');
  const docHtml = document.querySelector('html');
  const theme = docHtml.dataset.theme;

  useEffect(()=>{
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === "dark" || window.matchMedia('(prefers-color-scheme: dark)').matches && currentTheme !== "light") {
      setIcon('sun');
      docHtml.setAttribute("data-theme", "dark");
    };
  },[]);

  function themeSelector(bicon,color){
    setIcon(`${bicon}`);
    docHtml.setAttribute('data-theme', `${color}`);
    localStorage.setItem("theme", `${color}`);
  };

  function setTheme(){
    theme === 'light' ? themeSelector('sun','dark') : themeSelector('moon','light')
  };

  return(<button className={className} onClick={() => setTheme()} aria-hidden><i className={`bi bi-${icon}-fill`} /></button>)
};

export default ThemeButton