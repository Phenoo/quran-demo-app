import React from 'react'
import { Box, Container, MoreBtn, Semi, Tophead } from '../ReUsable'

import Item1 from '../../assets/assetsquran/item8.jpeg'
import Item2 from '../../assets/assetsquran/item3.jpg'

const About = () => {
  return (
    <Container id='about'>
      <div className="about">
        <Box className='about-image'>
        <div className="first">
            <img src={Item1} alt="quran" />
          </div>
          <div className="second">
            <img src={Item2} alt="quran" />
          </div>
        </Box>
        <Box className='about-text'>
        <Tophead>
            <Semi>about</Semi> holy quran
          </Tophead>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dicta maxime neque fugiat sint. Dolorem ratione numquam quae pariatur nesciunt nihil cumque 
            fugiat consectetur quas obcaecati omnis quia veritatis autem vel.
            Dicta maxime neque fugiat sint. Dolorem ratione numquam quae pariatur nesciunt 
            nihil cumque fugiat consectetur quas obcaecati omnis quia veritatis autem vel.
          </p>
          <p className='second'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta rerum illum quam nihil!</p>
          <MoreBtn>
            learn More
          </MoreBtn>
        </Box>
      </div>
    </Container>
  )
}

export default About