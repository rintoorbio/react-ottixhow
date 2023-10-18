import React, { useState } from 'react'

import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import HomeToggleButtons from '../../components/homeTogglebuttons/HomeToggleButtons';
import HomePriceSection from "../../components/homePriceSection/HomePriceSection";
import HomeSalesSection from "../../components/homeSalesSection/HomeSalesSection";
import HomeSectionText from "../../components/homeSectionText/HomeSectionText";
import HomeColSection from "../../components/homeColSections/HomeColSection";
import HomeAccordionSection from "../../components/homeAccordionSection/HomeAccordionSection";
import HomeToolsSection from "../../components/homeToolsSection/HomeToolsSection";
import FooterImgSection from "../../components/footerimg/FooterImg";
import HomeMultiCardSlider from '../../components/homeMultiCardSlider/HomeMultiCardSlider';


function HomePage() {
    const [lastHovered, setLastHovered] = useState("PRICING ANALYSIS");
  return (
    <div>
    
      <div>
        <HomeCarousel />
      </div>
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