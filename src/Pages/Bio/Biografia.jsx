import React,{useEffect} from 'react';
import Container from '../../Components/UI/Container/Container';

function PageBio() {
  useEffect(()=>{
    document.title = 'Melissa Fernandes - Bio';
  },[]);

  return (
    <Container>
      Bio
    </Container>
  )
};

export default PageBio;
