import React from 'react'

function AboutImageSection() {
  return (
    <>
    <div sm={12} style={{ position: 'relative',padding:'0px' }}>
      <img src="/assets/about.jpg" alt="about logo" style={{ width: '100%', height: 'auto',maxHeight: '450px' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white',  zIndex: '1' }}>
        <h1 style={{fontWeight: '600'}} >About Us</h1>
      </div>
    </div>
      </>
  )
}

export default AboutImageSection