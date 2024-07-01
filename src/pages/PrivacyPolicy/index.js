import React from 'react'
import styles from "./privacy.module.css"
import { Col, Container, Row } from 'react-bootstrap'

const PrivacyPolicy = () => {
  return (
    <div>
    <Container fluid>
    <Row>
    <Col sm={12} style={{ position: 'relative',padding:'0px' }}>
        <img src="/assets/privacypolicy.WebP" alt="provacy logo" style={{ width: '100%', height: '267px',objectFit:"cover" }} />
        <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white',  zIndex: '1' }}>
          <span className={`${styles.salesheading}`} >Privacy Policy</span>
        </div>
    </Col>
    </Row>
    <div style={{ color: "#6d6d6d"}}>
        <Container>
          <Row>
            <Col xs={12}>
              <h4
                className="mt-5"
                style={{
                  fontWeight: "800",
                  fontSize: "24px",
                  color: "#1b1d21",
                }}
              >
                PRIVACY POLICY
              </h4>
              <p className="mt-4" style={{ fontSize: "16px" }}>
                Orbio solutions is one of the leading technology company that
                redefines your business with technology, design, and data.
              </p>
              <p className="mt-4">
                Our integrity has been established through the many years that
                we have provided a world class confidential service to our
                clients. This privacy policy sets out how the Orbio uses and
                protects any information that you give Orbio when you use this
                website or communicate with us, Orbio is committed to ensuring
                that your privacy is protected. We have implemented technology
                along with management procedures and policies to ensure client
                confidentiality. Orbio may update or change this policy from
                time to time updating this page. You should check this page from
                time to time to ensure you are happy with any changes.
              </p>
              <h6 className="mt-5" style={{ fontWeight: "700" }}>
                WE ARE COMMITTED TO PROTECTING YOUR PRIVACY.
              </h6>
              <p className="mt-4">
                We collect the minimum amount of information about you that is
                commensurate with providing you with a satisfactory service.
                This Policy indicates the type of processes that may result in
                data being collected about you. Your use of this website gives
                us the right to collect that information.
              </p>
              <h6 className="mt-5" >INFORMATION WE COLLECTED:</h6>
              <p className="mt-4">
                We may collect any or all of the information that you give us
                depending on the type of transaction you enter into, including
                your name, address, telephone number, fax number and email
                address, together with data about your use of the website. Other
                information that may be needed from time to time to process a
                request may also be collected as indicated on the website.
              </p>
              <h6 className="mt-5" style={{ fontWeight: "700" }}>
                HOW WE USE YOUR INFORMATION
              </h6>
              <p className="mt-4">
                We use the information collected primarily to process the task
                for which you visited the website. All reasonable precautions
                are taken to prevent unauthorised access to this information.
                This safeguard may require you to provide additional forms of
                identity should you wish to obtain information about your
                account details.
              </p>
              <h6 className="mt-5" style={{ fontWeight: "700" }}>
                COOKIES:
              </h6>
              <p className="mt-4">
                A cookie is a small file which asks permission to be placed on
                your computer’s hard drive. Once you agree, the file is added
                and the cookie helps analyses web traffic or lets you know when
                you visit a particular site. Cookies allow web applications to
                respond to you as an individual. The web application can tailor
                its operations to your needs, likes and dislikes by gathering
                and remembering information about your preferences.
              </p>
              <p className="mt-4">
                Usage of a cookie is not linked to any personally identifiable
                information. We do not seek to associate cookies with the
                completion of online forms. We use cookies to track how visitors
                move through our sites and how often they visit. On most
                browsers, you can elect to decline to accept cookies. Should you
                decline to accept cookies your browsing experience will not be
                degraded.
              </p>
              <p className="mt-4">
                We use IP addresses to analyse trends, administer our websites,
                track user’s movement, and gather broad demographic information
                for aggregate use. IP addresses are not linked to personally
                identifiable information.
              </p>
              <p className="mt-4">
                An IP address is an identifier for a computer or device on a
                Transmission Control Protocol/Internet Protocol (TCP/IP)
                network, such as the World Wide Web. Networks use the TCP/IP
                protocol to route information based on the IP address of the
                destination. In other words, an IP address is a number that is
                automatically assigned to your computer whenever you are surfing
                the Web, allowing Web servers to locate and identify your
                computer. Computers require IP addresses in order for users to
                communicate on the Internet, browse and utilise online forms and
                processes.
              </p>
              <h6 className="mt-5" style={{ fontWeight: "700" }}>
                CONTACTING US:
              </h6>
              <p className="mt-4">
                If you have any questions about our Privacy Policy, or if you
                want to know what information we have collected about you,
                please email us at <a href="mailto:info@orbiosolutions.com">info@orbiosolutions.com</a>. You can also correct
                any factual errors in that information or require us to remove
                your details from any list under our control.
              </p>
            </Col>
          </Row>
        </Container>
          <Container fluid>
          <Row className='mt-4'>
                <hr />
          </Row>
          </Container>
      </div>
    </Container>
    </div>
  )
}

export default PrivacyPolicy