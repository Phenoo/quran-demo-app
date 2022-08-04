import React, {useRef, useState} from 'react'
import { FaStarAndCrescent } from 'react-icons/fa'
import styled from 'styled-components'
import music from '../assets/assetsquran/allahakbar.mp3'

const Soundbar = styled.div`
cursor: pointer;
color: #2a453e;
`

const Sound = () => {
  const [click, setClick] = useState(false)
  const ref = useRef();

  const handleClick = () => {
    setClick(!click);

    if(!click) {
      ref.current.play();
    }
    else{
      ref.current.pause();
    }
  }
  return (
    <Soundbar onClick={handleClick}>
      <FaStarAndCrescent click={click} />
      <audio src={music} ref={ref} />
    </Soundbar>
  )
}

export default Sound