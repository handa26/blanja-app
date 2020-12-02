import React from "react";
import Header from "../../components/navbar/header";
import Featured from "../../components/featured/featured";
import Category from "../../components/category/category";
import CollectionPreview from "../../components/collection-preview/collection-preview"

const Homepage = () => {
  return(
    <>
      <Header />
      <Featured />
      <Category />
      <CollectionPreview />
    </>
  )
}

export default Homepage;