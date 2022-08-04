import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Logo from '../Logo'
import { FooterContainer} from '../ReUsable'

const Footer = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <FooterContainer>
      <div className="footer">
        <div className="foot">
          <Logo />
          <p>&copy; 2022 all rights reserved.</p>
          <div className="media">
            <div className="media-link">
              <a href="#a">
                <FaFacebook/>
              </a>
            </div>
            <div className="media-link">
              <a href="#a">
                <FaLinkedin/>
              </a>
            </div>
            <div className="media-link">
              <a href="#a">
                <FaTwitter/>
              </a>
            </div>
          </div>
        </div>
        <div className="foot grid">
          <div className="footer-lists">
            <h6>navigate</h6>
            <ul>
              <li  onClick={() => scrollTo('home')}>
                <a href="#a">
                home
                </a>
              </li>
              <li onClick={() => scrollTo('about')}>
                <a href="#a">
                about us
                </a>
              </li>
              <li onClick={() => scrollTo('translation')}>
                <a href="#a">
                reciters
                </a>
              </li>
              <li onClick={() => scrollTo('blog')}>
                <a href="#a">
                blog
                </a>
              </li>
              <li onClick={() => scrollTo('subsrcibe')}>
                <a href="#a">
                download
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <h6>network</h6>
            <ul>
              <li>
                <a href="#a">
                  quranaudio.com
                </a>
              </li>
              <li>
                <a href="#a">
                  salah.com
                </a>
              </li>
              <li>
                <a href="#a">
                  sunnah.com
                </a>
              </li>
              <li>
                <a href="#a">
                  legacyquran.com
                </a>
              </li>
              <li>
                <a href="#a">
                  previous.quran.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <h6>network</h6>
            <ul>
            <li>
                <a href="#a">
                  ayatul kursi
                </a>
              </li>
              <li>
                <a href="#a">
                  yaseen
                </a>
              </li>
              <li>
                <a href="#a">
                  al-musik
                </a>
              </li>
              <li>
                <a href="#a">
                  al-rahman
                </a>
              </li>
              <li>
                <a href="#a">
                  al-waqiah
                </a>
              </li>
              <li>
                <a href="#a">
                  al-kahf
                </a>
              </li>
              <li>
                <a href="#a">
                  al-muzzammil
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <h6>resources</h6>
            <ul>
            <li>
                <a href="#a">
                  mobile apps 
                </a>
              </li>
              <li>
                <a href="#a">
                  developers
                </a>
              </li>
              <li>
                <a href="#a">
                  product updates
                </a>
              </li>
              <li>
                <a href="#a">
                  feedback
                </a>
              </li>
              <li>
                <a href="#a">
                  help
                </a>
              </li>
            </ul> 
          </div>

        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer