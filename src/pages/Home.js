import React from 'react';
import "../styles/Home.css"
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Profile from '../assets/profile.jpeg'
import ProfileAbout from '../assets/AnimatedMe.png'


          //*********************Hero Section *****************/
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

           //*********************About Section *****************/    
            function SectionTwo() {
              return (
               <>
                  <section className='About-section'>
                    <Container>
                        <Row className='about-main'>
                        <Col sm={6} className='about-content'>
                          <img src={ProfileAbout} alt="" />
                          <p>I'm a Graphic and Web Designer from Agan Ligaya General Santos City. I have over almost 2 years of 
                            freelance experience in the various fields of graphic design.</p>
                          </Col>
                        </Row>
                    </Container>
   
                  </section>
               </>
              );
            }

           //*********************Servie Section *****************/
            function SectionThree(){
              return(
                  <>
                  
                  <section className='Service-section'>
                    <Container>

                    <Row>
                      <Col lg={6} className='left-text'>
                          <h1>What we Offer</h1>
                          <div className='box-line'></div>
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
                      <img src={require('../assets/coding.png')} alt=""/>
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

             //*********************Project Section *****************/
            function SectionFour(){
              return(
                  <>
                  <section className='Project-section'>
                      <Container>
                        <Row>
                            <div className='text-project'>
                            <Col sm={6}>
                                <h1>My Project</h1>
                            </Col>
                            <Col sm={6}>
                                    <p>Presson team is constantly striving for perfection. 
                                      We are lucky to work with notable and known clients. 
                                      </p>
                            </Col>
                            </div>
                            </Row>
                            <Row>
                            <div className='img-main'>
                                <Col sm={12} className='img-project'>
                                    <Col className='left-img'>
                                    <img src={require('../assets/GraphicFrameSample.png')} alt=""/>
                                    </Col>
                                    <Col className='right-img'>
                                    <img src={require('../assets/GraphicFrameSample.png')} alt=""/>
                                    <img src={require('../assets/WebFrameSample.png')} alt=""/>
                                    <img src={require('../assets/LogoFrameSample.png')} alt=""/>
                                    </Col>
                                </Col>
                            </div>
                            </Row>
                            <Row>
                              <div className='project-description'>
                                  <Col lg={6}>
                                    <h1>Graphics Design Project</h1>
                                  </Col>
                                  <Col lg={6}>
                                    <p>Equipped with air conditioning, private pool, 3 on-suite bedrooms and a 
                                      spacious open living room kitchen area, Sunshine Bay Residences are an excellent 
                                      choice for anyone dreaming of their own safe haven. Located in a peaceful, 
                                      child-friendly neighborhood, Sunshine Bay has all the amenities that you could
                                       expect from a suburb voted 'best in the state' for 3 running years. Whether you want
                                       to play soccer with your kids on the lawn, or invite friends over for 
                                      dinner, there's space for it at Sunshine Bay.</p>
                                  </Col>
                              </div>
                            </Row>
                       
                      </Container>
                  </section>
                  
                  </>

              )
            }

            function SectionFive(){
              return(
                <>
                <section className='other-project'>
                  <Container>
                  <Row className='other-text'>
                      <Col>
                          <h1>Other Project</h1>
                      </Col>
                      <Col>
                          
                      </Col>
                  </Row>
                  <Row >
                      <Col className='other-image' >
                      <img src={require('../assets/Day.png')} alt=""/>
                      <img src={require('../assets/Night.png')} alt=""/>
                      </Col>
                  </Row>
                    <Row>
                      <Col className='see-button'>
                          <li><a href='/'>See Sample</a></li>
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
                   {/* project Section */}
                   <SectionFour/>
                    {/* other project Section */}
                    <SectionFive/>
                </div>
              );
            }

export default Section;
