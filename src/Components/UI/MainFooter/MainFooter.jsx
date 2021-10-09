import React from "react";
import { Link } from "react-router-dom";
import './MainFooter.css';
import { contacts } from "../../../Utils/contacts";
import { useTranslation } from "react-i18next";

function MainFooter(){
  const {t} = useTranslation();

  return(
    <footer className='main-footer'>
      <h6 className='footer-mel'><Link to='/'>[Melissa Fernandes]</Link></h6>
      <div className='footer-contacts'>{contacts.map((contact) => <a href={contact.href} key={contact.title}><i className={`bi bi-${contact.icon}`} aria-label={contact.title} /></a>)}</div>
    </footer>
  )
};

export default MainFooter;