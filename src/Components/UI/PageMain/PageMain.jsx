import React from "react";
import './PageMain.css';

function PageMain({children}){
  return(
    <main className='page-main'>{children}</main>
  )
};

export default PageMain;