import React,{useEffect} from 'react';
import { useTranslation } from "react-i18next";
import './NotFound.css';
import Container from '../../Components/UI/Container/Container';
import serverDown from '../../Resources/undraw-server-down.png';

function PageNotFound() {
  const {t} = useTranslation();

  useEffect(()=>{
    document.title = 'Melissa Fernandes - 404';
  },[]);

  return (
    <Container>
      <div className='pagenotfound'>
        <div className='pagenotfound-img'><img alt={t('p404.title')} src={serverDown} /></div>
        <h1>404 - {t('p404.title')}</h1>
      </div>
    </Container>
  )
};

export default PageNotFound;
