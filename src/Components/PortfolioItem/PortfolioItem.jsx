import React from "react";
import { useTranslation } from "react-i18next";
import './PortfolioItem.css';

function PortfolioItem({title, img, icon, build, code, live}){
  const {t} = useTranslation();
  return(
    <article className='portfolio-item'>
      <div className='portfolio-item-container'>
        <img alt={title} src={img} />
        <div className='portfolio-item-info'>
          <div className='portfolio-item-subinfo'>
            <div className='portfolio-item-icon-build'>{icon}<div className='portfolio-item-build'>{build}</div></div>
            <div className='portfolio-item-icon-code'>
              <i className="bi bi-code-slash" /><a href={code} className='linkfill' />
              <div className='portfolio-item-code'>{t('portfolio.code')}</div>
            </div>
            <a href={live} className='linkfill' />    
          </div>
        </div>
        <a href={live} className='linkfill' />
      </div>
      <a href={live} className='portfolio-item-link'><h3 className='portfolio-item-title'>{title}</h3></a>
    </article>
  )
};

export default PortfolioItem;