import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Sound from '../Sound'
const Nav = styled.nav`
width: 85%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
border-bottom: 2px solid #2a453e;
position: relative;


@media(max-width: 64em){
  width: 95%;
  border-bottom: 1px solid #2a453e;

  .star{
    display: none;
  }
}


`

const Menu = styled.ul`
display: flex;
gap: 1rem;
color: #2a453e;


@media(max-width: 64em){
  display: flex;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  z-index: 10;
  background-color: #2a453e;
  backdrop-filter: blur(2px);
  margin: 0;
  padding: 3rem 2rem;


  transform: ${props => props.click ? 'translateY(0%)' : 'translateY(1000%)'} ;
  transition: all 0.3s ease;
  flex-direction: column;

  touch-action: none;   
}
`
const MenuItem = styled.li`
  cursor: pointer;
  font-weight: 700;
  &:hover{
    color: orange;
  }

@media(max-width: 64em){
  color: #fff;
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 900;
  transition: 0.3s ease;

  &:hover{
    color: orange;
  }
}

@media(max-width: 31em){
  font-size: 1.25rem;
}
`

const MenuBtn = styled.span`
width: 1.5rem;
height: 2px;
background:${props => props.click ? ' #fff' : '#2a453e'};

position: absolute;
top: 1.25rem;
right: 0;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'} ;

display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.3s ease;
z-index: 100;


&::after, &::before{
  content: ' ';
  width:${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
  background:${props => props.click ? ' #fff' : '#2a453e'};
  position: absolute;
  transition: all 0.3s ease;
}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'} ;
}

&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'} ;
}




@media(max-width: 64em){
  display: flex;
}

@media(min-width: 64em){
  display: none;
}


`


const Navigation = () => {
  const [click, setClick] = useState(false);

    const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    setClick(!click);
  }
  return (
    <Nav id='nav'>
      <Logo />
      <Menu click={click}>
        <MenuItem onClick={() => scrollTo('home')}>home</MenuItem>
        <MenuItem onClick={() => scrollTo('about')}>about</MenuItem>
        <MenuItem onClick={() => scrollTo('translation')}>translation</MenuItem>
        <MenuItem onClick={() => scrollTo('blog')}>blog</MenuItem>
        <MenuItem onClick={() => scrollTo('subscribe')}>download</MenuItem>
      </Menu>
      <MenuBtn click={click} onClick={() => {setClick(!click)}}>
        &nbsp;
      </MenuBtn>        

      <div className='star'>
        <Sound />
      </div>  
    </Nav>
  )
}

export default Navigation