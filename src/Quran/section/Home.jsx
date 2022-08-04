import React from 'react'
import { FaBook, FaVoicemail } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {Container, MoreBtn, Semi, TransBtn} from '../ReUsable'
import Item10 from '../../assets/assetsquran/item9.jpeg' 
import Item4 from '../../assets/assetsquran/item4.jpeg'


const Home = () => {
  return (
    <Container id="home">
      <div className="home-text">
        <h4>
          Make self-purification by reading <Semi>quran</Semi>
        </h4>
        <p>Make self-purification by reading Quran. This website  is all about holy quran. You <br /> can
          read, you can listen and you can learn so many things about islam.
        </p>
        <div className="btn">
          <Link to='/surah'>
            <MoreBtn>
              <FaBook/>
              <p>read quran</p>
            </MoreBtn>
          </Link>
          <Link to='/juz'>
            <TransBtn>
              <FaVoicemail />
              <p>quran audio</p>
            </TransBtn>
          </Link>
        </div>
      </div>
      <div className="home-image">
        <img src={Item10} alt="" />
        <img src={Item4} alt="" />
      </div>
    </Container>
  )
}

export default Home