import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <div className="home1-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home1-navbar-interactive"
        >
          <span className="logo">DOWNLOADS</span>
          <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
            <nav className="home1-links">
              <span className="home1-nav12 bodySmall">Home</span>
              <span className="home1-nav2 bodySmall">Downloads</span>
              <span className="home1-nav3 bodySmall">Support</span>
              <span className="home1-nav4 bodySmall">FAQ</span>
              <span className="home1-nav5 bodySmall">Contact</span>
            </nav>
            <div className="home1-buttons">
              <button className="home1-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home1-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home1-mobile-menu1 mobileMenu"
          >
            <div className="home1-nav">
              <div className="home1-top">
                <span className="logo">DOWNLOADS</span>
                <div data-thq="thq-close-menu" className="home1-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home1-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home1-links1">
                <span>Home</span>
                <span className="home1-nav21 bodySmall">Downloads</span>
                <span className="home1-nav31 bodySmall">Support</span>
                <span className="home1-nav41 bodySmall">FAQ</span>
                <span className="home1-nav51 bodySmall">Contact</span>
              </nav>
              <div className="home1-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home1-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home1-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home1-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home1-hero">
        <div className="heroContainer home1-hero1">
          <div className="home1-container01">
            <h1 className="home1-hero-heading heading1">
              Download the Best Software
            </h1>
            <span className="home1-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Your go-to source for reliable and secure software downloads
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home1-btn-group">
              <button className="buttonFilled">Get Started</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-features">
        <div className="featuresContainer">
          <div className="home1-features1">
            <div className="home1-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home1-features-heading heading2">
                Discover the Features
              </h2>
              <span className="home1-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Experience the benefits of our software downloading
                      platform
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home1-container03">
              <FeatureCard
                heading="Fast and Reliable Downloads"
                subHeading="Download software quickly and securely"
              ></FeatureCard>
              <FeatureCard
                heading="Wide Range of Software"
                subHeading="Access a vast library of software for various needs"
              ></FeatureCard>
              <FeatureCard
                heading="User-Friendly Interface"
                subHeading="Navigate and download software with ease"
              ></FeatureCard>
              <FeatureCard
                heading="Regular Updates"
                subHeading="Stay up-to-date with the latest software releases"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-pricing">
        <div className="pricingContainer">
          <div className="home1-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose the Right Plan for You</h2>
            <span className="home1-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the full potential of our software downloading platform
                  with our flexible pricing options.
                </span>
              </span>
            </span>
          </div>
          <div className="home1-container05">
            <div className="freePricingCard home1-pricing-card">
              <div className="home1-container06">
                <span className="home1-text36 heading3">Free</span>
                <span className="bodySmall">
                  A professional website for software downloading
                </span>
              </div>
              <div className="home1-container07">
                <span className="home1-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home1-free-plan-price">0</span>
              </div>
              <div className="home1-container08">
                <div className="home1-container09">
                  <span className="home1-text40">✔</span>
                  <span className="bodySmall">
                    Unlimited software downloads
                  </span>
                </div>
                <div className="home1-container10">
                  <span className="home1-text41">✔</span>
                  <span className="bodySmall">Basic customer support</span>
                </div>
              </div>
              <button className="home1-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home1-pricing-card1">
              <div className="home1-container11">
                <span className="home1-text42 heading3">BASIC</span>
                <span className="bodySmall">
                  A professional website for software downloading
                </span>
              </div>
              <div className="home1-container12">
                <span className="home1-text43">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home1-basic-plan-pricing">9.99</span>
                <span className="home1-text46">/ month</span>
              </div>
              <div className="home1-container13">
                <div className="home1-container14">
                  <span className="home1-text47">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home1-container15">
                  <span className="home1-text49">✔</span>
                  <span className="bodySmall">
                    Unlimited software downloads
                  </span>
                </div>
                <div className="home1-container16">
                  <span className="home1-text50">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
                <div className="home1-container17">
                  <span className="home1-text51">✔</span>
                  <span className="bodySmall">Advanced analytics</span>
                </div>
                <div className="home1-container18">
                  <span className="home1-text52">✔</span>
                  <span className="bodySmall">Customizable branding</span>
                </div>
              </div>
              <button className="home1-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home1-pricing-card2">
              <div className="home1-container19">
                <span className="home1-text53 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  A professional website for software downloading
                </span>
              </div>
              <div className="home1-container20">
                <span className="home1-text56">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home1-pro-plan-pricing">19.99</span>
                <span className="home1-text59">/ month</span>
              </div>
              <div className="home1-container21">
                <div className="home1-container22">
                  <span className="home1-text60">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home1-container23">
                  <span className="home1-text62">✔</span>
                  <span className="bodySmall">
                    Unlimited software downloads
                  </span>
                </div>
                <div className="home1-container24">
                  <span className="home1-text63">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
                <div className="home1-container25">
                  <span className="home1-text64">✔</span>
                  <span className="bodySmall">Advanced analytics</span>
                </div>
                <div className="home1-container26">
                  <span className="home1-text65">✔</span>
                  <span className="bodySmall">Customizable branding</span>
                </div>
                <div className="home1-container27">
                  <span className="home1-text66">✔</span>
                  <span className="bodySmall">API access</span>
                </div>
                <div className="home1-container28">
                  <span className="home1-text67">✔</span>
                  <span className="bodySmall">White-labeling</span>
                </div>
              </div>
              <button className="home1-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-banner">
        <div className="bannerContainer home1-banner1">
          <h1 className="home1-banner-heading heading2">
            Discover a World of Software
          </h1>
          <span className="home1-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Explore our vast collection of software applications for all
                  your needs. From productivity tools to entertainment software,
                  we have it all.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Browse Categories</button>
        </div>
      </div>
      <div className="home1-faq">
        <div className="faqContainer">
          <div className="home1-faq1">
            <div className="home1-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home1-text85 heading2">Common questions</h2>
              <span className="home1-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home1-container30">
              <Question1
                answer="To download the software, simply click on the 'Download' button on the website and follow the instructions."
                question="How do I download the software?"
              ></Question1>
              <Question1
                answer="Yes, our software is compatible with Windows, Mac, and Linux operating systems."
                question="Is the software compatible with all operating systems?"
              ></Question1>
              <Question1
                answer="Yes, we offer a free trial version of the software for you to try before making a purchase."
                question="Can I try the software before purchasing?"
              ></Question1>
              <Question1
                answer="We accept major credit cards, PayPal, and other secure online payment methods."
                question="What payment methods do you accept?"
              ></Question1>
              <Question1
                answer="Yes, we provide technical support for our software. You can reach out to our support team via email or phone."
                question="Is technical support available for the software?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-footer">
        <footer className="footerContainer home1-footer1">
          <div className="home1-container31">
            <span className="logo">DOWNLOADS</span>
            <nav className="home1-nav1 bodySmall home1-nav1">
              <span className="home1-nav11 bodySmall">Home</span>
              <span className="home1-nav22 bodySmall">Downloads</span>
              <span className="home1-nav32 bodySmall">Support</span>
              <span className="home1-nav42 bodySmall">FAQ</span>
              <span className="home1-nav52 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home1-separator"></div>
          <div className="home1-container32">
            <span className="bodySmall home1-text89">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home1-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home1-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home1-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home1-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home1
