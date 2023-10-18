import React from "react";

function MapSection() {
  return (
    <div style={{ maxWidth: "100%", overFlow: "hidden" }}>
      <iframe
      title="Orbio Solutions"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.984856070895!2d77.651953!3d12.908208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148453748f87%3A0x5092ab9f9194a949!2sOrbio%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1697463147028!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: "0" }}
        // allowfullscreen=""
        // referrerpolicy="no-referrer-when-downgrade"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapSection;
