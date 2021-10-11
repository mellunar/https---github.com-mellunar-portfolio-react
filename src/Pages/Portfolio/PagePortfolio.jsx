import React,{useEffect} from "react";
import { useTranslation } from "react-i18next";
import Container from '../../Components/UI/Container/Container';
import PageMain from '../../Components/UI/PageMain/PageMain';
import PageSection from '../../Components/UI/PageSection/PageSection';
import useFirebase from '../../Firebase/useFirebase';
import PageH1 from "../../Components/PageH1/PageH1.jsx";
import PortfolioGallery from '../../Components/PortfolioGallery/PortfolioGallery';

function PagePortfolio(){
  const {t} = useTranslation();
  const [firebaseData] = useFirebase();

  useEffect(()=>{
    document.title = 'Melissa Fernandes - Portfolio';
  },[]);

  return(
    <Container>
      <PageH1 heading='Portfolio' />
      <PageMain>
        <PageSection>
          <PortfolioGallery source={firebaseData} />
        </PageSection>
      </PageMain>
    </Container>
  )
};

export default PagePortfolio;