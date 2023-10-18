import React from 'react'

import AboutImageSection from '../../components/aboutImage/AboutImageSection'

import AboutIntro from '../../components/aboutintro/AboutIntro';
import BusinessPoints from '../../components/businessPoints/BusinessPoints';
import VisionSection from '../../components/visionSection/VisionSection';
import HelpBusiness from '../../components/helpBusiness/HelpBusiness';
import FooterImgSection from '../../components/footerimg/FooterImg';


function AboutPage() {
  return (
    <div>

    <AboutImageSection />
    
    <div style={{color:"#383c47",fontSize:"14px",fontWeight:600,padding:"25px",marginLeft:"20px"}} >
      <span>WHAT WE DO</span>
    </div>
    <AboutIntro />
    <VisionSection />
    <HelpBusiness />
    <BusinessPoints />
    <FooterImgSection />


    </div>
  )
}

export default AboutPage