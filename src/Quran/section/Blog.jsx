import React from 'react'
import { Container, MoreBtn, Semi, Tophead } from '../ReUsable'

import Item1 from '../../assets/assetsquran/item7.jpeg'
import Item2 from '../../assets/assetsquran/item5.jpeg'
import Item3 from '../../assets/assetsquran/item10.jpeg'
import Item4 from '../../assets/assetsquran/item11.jpeg'

const Blog = () => {
  return (
    <Container id='blog'>
      <div className="blogs">
      <Tophead>
        latest islamic <Semi>blog</Semi>
      </Tophead>
      <p>Read top free islamic articles & blog posts on the internet <br /> and know about isalm </p>
        <div className="blog-container">
          <div className="blog">
            <div>
              <img src={Item1} alt="" />
            </div>
            <div>
              <h6>How many bismilah repeated in Quran?</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusamus tempora quae consectetur animi
              </p>
              <a href="#read">
                Read more
              </a>
            </div>
          </div>
          <div className="blog">
            <div>
              <img src={Item2} alt="" />
            </div>
            <div>
              <h6>How many bismilah repeated in Quran?</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusamus tempora quae consectetur animi
              </p>
              <a href="#read">
                Read more
              </a>
            </div>
          </div>
          <div className="blog">
            <div>
              <img src={Item3} alt="" />
            </div>
            <div>
              <h6>How many bismilah repeated in Quran?</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusamus tempora quae consectetur animi
              </p>
              <a href="#read">
                Read more
              </a>
            </div>
          </div>
          <div className="blog">
            <div>
              <img src={Item4} alt="" />
            </div>
            <div>
              <h6>How many bismilah repeated in Quran?</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusamus tempora quae consectetur animi
              </p>
              <a href="#read">
                Read more
              </a>
            </div>
          </div>
        </div>
        <MoreBtn>
            read all
          </MoreBtn>
      </div>
    </Container>
  )
}

export default Blog