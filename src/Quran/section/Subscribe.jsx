import React from 'react'
import { GreenContainer, Semi } from '../ReUsable'
import {SiApple, SiGoogleplay} from 'react-icons/si'

const Subscribe = () => {
  return (
    <GreenContainer id='subscribe'>
      <section className="subscribe">
        <h4>Recitering listening quran is <br />
          more <Semi>easy</Semi> now
        </h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique earum alias harum error mollitia temporibus dicta modi pariatur dignissimos voluptatibus vero, itaque animi tempora rerum.</p>
        <div className="app">
          <a className="store" href='https://play.google.com/store/apps'>
            <div>
              <SiApple />
            </div>
            <div>
              <p>download</p>
              <h6>
                app store
              </h6>
            </div>
          </a>
          <a className="store" href='https://apple.com/app-store/'>
            <div className="play">
              <SiGoogleplay />
            </div>
            <div>
              <p>get it on</p>
              <h6>google play</h6>
            </div>
          </a>
        </div>
        npm i styled-components @react-icons
      </section>
    </GreenContainer>
  )
}

export default Subscribe