import React from "react";
import MainNav from "../MainNav/TopNav";
import MainFooter from "../MainFooter/MainFooter";

function Container({children}){
  return(
    <>
      <MainNav />
      {children}
      <MainFooter />
    </>
  )
};

export default Container;