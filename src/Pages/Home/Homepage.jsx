import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Container from '../../Components/UI/Container/Container';
import HomeHeader from './HomeHeader/HomeHeader';
import Translator from '../../Components/Translator';
import Markdown from 'markdown-to-jsx';
import PageMain from '../../Components/UI/PageMain/PageMain';
import PageSection from '../../Components/UI/PageSection/PageSection';
import PortfolioItem from '../../Components/PortfolioItem/PortfolioItem';
import dreamer from '../../Resources/undraw-dreamer.png';
import './Homepage.css';
import {useIcon} from '../../Utils/useIcon.jsx';
import { skills } from '../../Utils/icons';
import useFirebase from '../../Firebase/useFirebase';
import DataLoading from '../../Components/DataLoading/DataLoading';
import DataError from '../../Components/DataError/DataError';

function PageHomepage() {
  const {t} = useTranslation();
  const [firebaseData] = useFirebase(5);

  useEffect(()=>{
    document.title = 'Melissa Fernandes - Front End Dev';
  },[]);

  return (
    <Container>
      <HomeHeader />
      <PageMain>
        <PageSection>
          <h2><Translator str='home.title1' /></h2>
          <div className='about'>
            <div className='about-img'><img alt='ilustração de uma mulher sentada sobre uma arte de uma pintura de uma floresta à noite' src={dreamer} /></div>
            <Markdown className='about-txt' children={t('home.bio')} options={{forceBlock: true, overrides: {Link: {component: Link,},},}} />
          </div>
        </PageSection>
        <PageSection>
          <h2><Translator str='home.title2' /></h2>
          <div className='skills'>
            {skills.map((skill) => <div className='skills-div' key={skill.icon}><div className='skills-icon'>{useIcon(skill.icon)}</div><h3>{skill.name}</h3></div>)}
          </div>
        </PageSection>
        <PageSection>
          <h2><Translator str='home.title3' /></h2>
          <div className='portfolio-container'>
            {!firebaseData || firebaseData.length === 0 && <DataLoading />}
            {firebaseData.map((item) => 
              <PortfolioItem key={item.id} title={item.data.title} img={item.data.img} live={item.data.live} icon={useIcon(item.data.icon)} build={item.data.build} code={item.data.code} />
            )}
            {firebaseData.length > 0 && <Markdown className='portfolio-p' children={t('home.portfolio')} options={{forceBlock: true, overrides: {Link: {component: Link,},},}} />}
            {firebaseData === undefined && <DataError />}
          </div>
        </PageSection>
      </PageMain>
    </Container>
  )
};

export default PageHomepage;