import React, { useState } from 'react'

import HomePriceSection from "../../components/homePriceSection/HomePriceSection";
import HomeSalesSection from "../../components/homeSalesSection/HomeSalesSection";
import HomeSectionText from "../../components/homeSectionText/HomeSectionText";
import HomeColSection from "../../components/homeColSections/HomeColSection";
import HomeAccordionSection from "../../components/homeAccordionSection/HomeAccordionSection";
import HomeToolsSection from "../../components/homeToolsSection/HomeToolsSection";
import FooterImgSection from "../../components/footerimg/FooterImg";
import HomeToggleButtons from '../../components/homeTogglebuttons/HomeToggleButtons';
import HomeCarousel from '../../components/HomeCarousel';
import HomeMultiCardSlider from '../../components/HomeMultiCardSlider';



function HomePage() {
    const [lastHovered, setLastHovered] = useState("PRICING ANALYSIS");
  return (
    <div>
      <HomeCarousel />
      <div style={{
        marginTop:"-169px",
        zIndex:99,
        position:"relative",
      }}>
        <HomeMultiCardSlider />
      </div>
        <HomeToggleButtons lastHovered={lastHovered} setLastHovered={setLastHovered} />
        {
        lastHovered === "PRICING ANALYSIS" ? <HomePriceSection /> : <HomeSalesSection /> 
        }
        <HomeSectionText />
        <HomeColSection />
        <HomeAccordionSection />
        <HomeToolsSection />
        <FooterImgSection />

    </div>
  )
}

export default HomePage