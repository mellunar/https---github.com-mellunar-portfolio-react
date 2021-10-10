import React from "react";
import './DataError.css';
import serverDown from '../../Resources/undraw-server-down.png';
import { useTranslation } from "react-i18next";

function DataError(){
  const {t} = useTranslation();

  return(
    <div className='component-data-error'>
      <img alt={''} src={serverDown} aria-hidden />
      <h3>{t('base.error')}</h3>
      <p>{t('base.try')}</p>
    </div>
  )
};

export default DataError;