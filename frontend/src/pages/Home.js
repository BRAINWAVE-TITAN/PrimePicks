import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';
function Home() {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={'airpodes'} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={'earphones'} heading={"Top's earphones"}/>
      <HorizontalCardProduct category={'printers'} heading={"Top's printers"}/>
      <HorizontalCardProduct category={'mobiles'} heading={"Top's mobiles"}/>
      <HorizontalCardProduct category={'Mouse'} heading={"Top's Mouse"}/>
      <HorizontalCardProduct category={'camera'} heading={"Top's camera"}/>
      <HorizontalCardProduct category={'speakers'} heading={"Top's speakers"}/>
      <HorizontalCardProduct category={'trimmers'} heading={"Top's trimmers"}/>
      <HorizontalCardProduct category={'watches'} heading={"Top's watches"}/>
      <VerticalCardProduct category={'airpodes'} heading={"Airpodes"}/>
      <VerticalCardProduct category={'earphones'} heading={"earphones"}/>
      <VerticalCardProduct category={'mobiles'} heading={"mobiles"}/>
      <VerticalCardProduct category={'Mouse'} heading={"Mouse"}/>
      <VerticalCardProduct category={'speakers'} heading={"speakers"}/>
      <VerticalCardProduct category={'camera'} heading={"camera"}/>
      <VerticalCardProduct category={'trimmers'} heading={"trimmers"}/>
    </div>
  )
}

export default Home;
