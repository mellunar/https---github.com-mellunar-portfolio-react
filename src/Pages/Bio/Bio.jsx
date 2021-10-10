import React,{useEffect} from 'react';
import { useTranslation } from "react-i18next";
import './Bio.css';
import Markdown from 'markdown-to-jsx';
import Container from '../../Components/UI/Container/Container';
import PageMain from '../../Components/UI/PageMain/PageMain';
import PageSection from '../../Components/UI/PageSection/PageSection';
import PageH1 from "../../Components/PageH1/PageH1.jsx";
import moonlight from '../../Resources/undraw-moonlight.png';

function PageBio() {
  const {t} = useTranslation();

  useEffect(()=>{
    document.title = 'Melissa Fernandes - Bio';
  },[]);

  return (
    <Container>
      <PageH1 heading={t('bio.title')} />
      <PageMain>
        <PageSection>
          <div className='bio-container'>
            <img alt={t('bio.alt')} src={moonlight} />
            <Markdown children={t('bio.text')} options={{forceBlock: true,}} />
          </div>
        </PageSection>
      </PageMain>
    </Container>
  )
};

export default PageBio;
