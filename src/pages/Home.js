import React from 'react';
import "../styles/Home.css"
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Profile from '../assets/profile.jpeg'

              function SectionOne() {
                return (<>

                  <section className='Hero'>
                      <Container>
                          <Row className='hero-main'>
                            <Col lg={6}>
                                <h5>Hello, My Name is!</h5>
                                <h1>Jasbar Legaspina</h1>
                                <h2>Graphic/Web Designer</h2>
                            </Col>
                            <Col lg={6}>
                            <img src={Profile} alt="" />
                            </Col>
                          </Row>
                      </Container>
                
                  </section>
                  </>
                )

              }
            function SectionTwo() {
              return (
               <>
                  <section className='About-section'>
                    <Container>
                        <Row className='about-main'>
                        <Col sm={6} className='about-content'>
                          <img src={Profile} alt="" />
                          <p>I'm a Graphic and Web Designer from Agan Ligaya General Santos City. I have over almost 2 years of 
                            freelance experience in the various fields of graphic design.</p>
                          </Col>
                        </Row>
                    </Container>
   
                  </section>
               </>
              );
            }


            function SectionThree(){
              return(
                  <>
                  
                  <section className='Service-section'>
                    <Container>

                    <Row>
                      <Col lg={6}>
                          <h1>What we Offer</h1>
                      </Col>
                      <Col lg={6}>
                      <div className=" service-description">
                    <div className="service-text">
                      <img src={require('../assets/illustration.png')} alt=""/>
                      <div>
                        <h3>Graphic Design</h3>
                      <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion 
                        and creative vision for every project we put our hands on. </p>
                      </div>
                  </div>
                  <div className="service-text">
                      <img src={require('../assets/web-design.png')} alt=""/>
                      <div>
                        <h3>UX/UI Web Design</h3>
                      <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion 
                        and creative vision for every project we put our hands on. </p>
                      </div> 
                  </div>
                  <div className="service-text">
                      <img src={require('../assets/illustration.png')} alt=""/>
                      <div>
                        <h3>Web Developer</h3>
                      <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion 
                        and creative vision for every project we put our hands on. </p>
                      </div>
                  </div>
                </div>
                      </Col>
                    </Row>

                    </Container>

                  </section>
                  
                  
                  </>

              )
            }


            function Section() {
              return (
                <div>
                  {/* Hero Section */}
                  <SectionOne/> 
                   {/* About Section */}
                  <SectionTwo/>
                   {/* Service Section */}
                  <SectionThree/>
                </div>
              );
            }

export default Section;
