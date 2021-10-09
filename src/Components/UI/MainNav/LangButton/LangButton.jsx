import React, {useEffect,useState} from "react";
import { useTranslation } from "react-i18next";

function LangButton({className}){
  const [lang,setLang] = useState('EN');
  const docHtml = document.querySelector('html');
  const language = docHtml.getAttribute('lang');
  const { i18n } = useTranslation();

  useEffect(()=>{
    const currentLang = localStorage.getItem('lang');
    if (currentLang === "en-US" || navigator.language.includes('en') && currentLang !== 'pt-BR') {
      docHtml.setAttribute("lang", "en-US");
      setLang('PT')
    }
  },[]);

  function langSelector(iso){
    docHtml.setAttribute('lang',`${iso}`);
    localStorage.setItem("lang", `${iso}`);
    i18n.changeLanguage(iso)
  };

  function setLangIso(){
    language === 'pt-BR' ? langSelector('en-US') : langSelector('pt-BR');
    language === 'pt-BR' ? setLang('PT') : setLang('EN');
  };

  return(<button className={className} onClick={() => setLangIso()} aria-label={lang === 'PT' ? 'Alterar idioma para português' : 'Change language to English'}>{lang}</button>)
};

export default LangButton;