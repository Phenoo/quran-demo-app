import React from 'react'
import {FaQuran} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const LogoComponent = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: capitalize;
  color: #2a453e;

  h6{
    font-size: 1.3rem;

    @media(max-width: 31em){
      font-size: 1rem;
    }
  }

  &:hover{
    color: #2a453e;
  }
`

const Logo = () => {
  return (
    <LogoComponent id='logo' to='/'>
      <FaQuran />
      <h6>
        quran
      </h6>
    </LogoComponent>
  )
}

export default Logo