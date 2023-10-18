import React from "react";

import ContactImage from "../../components/contactImage/ContactImage";
import ContactDesc from "../../components/contactDesc/ContactDesc";
import ContactForm from "../../components/contactForm/ContactForm";
import MapSection from "../../components/mapSection/MapSection";
import FooterImgSection from "../../components/footerimg/FooterImg";

function ContactUs() {
  return (
    <>
      <ContactImage />
      <ContactDesc />
      <ContactForm />
      <MapSection />
      <FooterImgSection />
    </>
  );
}

export default ContactUs;
