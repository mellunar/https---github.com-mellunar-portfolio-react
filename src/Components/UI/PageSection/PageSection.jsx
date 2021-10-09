import React from "react";
import './PageSection.css';

function PageSection({children}){
  return(
    <section className='page-section'>{children}</section>
  )
};

export default PageSection;