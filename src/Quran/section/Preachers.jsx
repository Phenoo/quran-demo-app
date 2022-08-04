import React from 'react'
import { GreenContainer, Semi } from '../ReUsable'

import Item1 from '../../assets/assetsquran/item1.jpeg'
import Item2 from '../../assets/assetsquran/item2.jpeg'
import Item3 from '../../assets/assetsquran/item12.jpeg'

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Preachers = () => {
  return (
    <GreenContainer id='preachers'>
      <div className="container">
        <h4>
          Listen by your <br />
          favorite <Semi>Reciters</Semi>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit a, vero sed expedita amet debitis, similique inventore quisquam repudiandae beatae harum quasi, ab illum!
        </p>
        <div className='pagination-btns'>
          <button className='first-btn'>
            <FaChevronLeft />
          </button>
          <h5>...</h5>
          <button className='second-btn'>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src={Item1} alt="" />
        <img src={Item2} alt="" />
        <img src={Item3} alt="" />
      </div>
      
    </GreenContainer>
  )
}

export default Preachers