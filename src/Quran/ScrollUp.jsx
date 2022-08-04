import React, { useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'

const ScrollUpBtn = styled.div`
width: 2.75rem;
height: 2.75rem;

position: fixed;
right: 1rem;
bottom: 1rem;


background-color: #2a453e;
color: #ddd7ac;
border: 1px solid #ddd7ac;

display: flex;
align-items: center;

cursor: pointer;
justify-content: center;

border-radius: 50%;
transition: all 0.2s ease;
&:hover{
  transform: scale(1.1);
}
&:active {
  transform: scale(0.8);
}


`

const ScrollUp = () => {
  const ref = useRef(null);

  const scrollTo = () => {
    let element = document.getElementById('nav');

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }



  useLayoutEffect(() => {
    if(window.scrollY > 300){
      ref.current.style.display = 'flex';
    }else{
      ref.current.style.display = 'none';
    }
  }, [])
  return (
    <>
      <ScrollUpBtn onClick={() => scrollTo()} ref={ref}>
        &#x2191;
      </ScrollUpBtn>
    </>
  )
}

export default ScrollUp