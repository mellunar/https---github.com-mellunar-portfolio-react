import React from "react";
import './DataLoading.css';
import timeManagement from '../../Resources/undraw-time-management.png';
import { useTranslation } from "react-i18next";

function DataLoading(){
  const {t} = useTranslation();

  return(
    <div className='component-loading'>
      <img alt={t('base.loading')} src={timeManagement} />
      <h3>{t('base.loading')}</h3>
    </div>
  )
};

export default DataLoading;