import React,{useEffect} from "react";
import { useTranslation } from "react-i18next";
import {useIcon} from '../../Utils/useIcon.jsx';
import Container from '../../Components/UI/Container/Container';
import PageMain from '../../Components/UI/PageMain/PageMain';
import PageSection from '../../Components/UI/PageSection/PageSection';
import PortfolioItem from '../../Components/PortfolioItem/PortfolioItem';
import useFirebase from '../../Firebase/useFirebase';
import DataLoading from '../../Components/DataLoading/DataLoading';
import DataError from '../../Components/DataError/DataError';
import PageH1 from "../../Components/PageH1/PageH1.jsx";

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
          <div className='portfolio-container'>
            {!firebaseData || firebaseData.length === 0 && <DataLoading />}
            {firebaseData.map((item) => 
              <PortfolioItem key={item.id} title={item.data.title} img={item.data.img} live={item.data.live} icon={useIcon(item.data.icon)} build={item.data.build} code={item.data.code} />
            )}
            {firebaseData === undefined && <DataError />}
          </div>
        </PageSection>
      </PageMain>
    </Container>
  )
};

export default PagePortfolio;