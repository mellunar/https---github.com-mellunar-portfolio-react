import React from "react";
import './HomeHeader.css';
import Translator from '../../../Components/Translator';
import { contacts } from "../../../Utils/contacts";

function HomeHeader(){

  return(
    <header className='home-header'>
      <div className='home-avatar'><img aria-label='Uma foto minha' src='https://live.staticflickr.com/65535/51349705852_7df4bd604b_o.jpg' /></div>
      <p className='home-p1'><Translator str='home.header1' /></p>
      <h1 className='home-name'>Melissa Fernandes</h1>
      <p className='home-p2'><Translator str='home.header2' /></p>
      <div className='home-contacts'>{contacts.map((contact) => <a href={contact.href} key={contact.title}><i className={`bi bi-${contact.icon}`} aria-label={contact.title} /></a>)}</div>
    </header>
  )
};

export default HomeHeader;