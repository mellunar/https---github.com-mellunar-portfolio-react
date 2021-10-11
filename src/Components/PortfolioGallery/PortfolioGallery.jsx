import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useIcon } from "../../Utils/useIcon";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import DataError from "../DataError/DataError";
import DataLoading from "../DataLoading/DataLoading";
import './PortfolioGallery.css';
import Markdown from "markdown-to-jsx";

function PortfolioGallery({source}){
  const {t} = useTranslation();
  const location = useLocation();
  return(
    <div className='portfolio-container'>
      {!source || source.length === 0 && <DataLoading />}
      {source.map((item) => 
        <PortfolioItem key={item.id} title={item.data.title} img={item.data.img} live={item.data.live} icon={useIcon(item.data.icon)} build={item.data.build} code={item.data.code} />
      )}
      {source.length > 0 && location.pathname === '/' && <Markdown className='portfolio-p' children={t('home.portfolio')} options={{forceBlock: true, overrides: {Link: {component: Link,},},}} />}
      {source === undefined && <DataError />}
    </div>
  )
};

export default PortfolioGallery;