import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
:root{
  --black: #0f0e0e;
  --burlywood: gray;
  --grey: #866c55;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';

}

h1, h2, h3, h4, h5, p{
  color: var(--black);
}

a{
  // mix-blend-mode: difference;
  text-transform: uppercase;
  outline: none;
  text-decoration: none;
  font-weight: 800;
  cursor: pointer;
}

button{
  cursor: pointer;
  padding: 0.5rem  0.7rem;
  text-transform: capitalize;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  @media(max-width: 35em){
    padding: 0.3rem  0.5rem;
    font-size: 0.7rem;
  }

  &:hover{
    transform: scale(1.05);
  }

  &:active{
    transform: scale(0.9);
  }
  
}

li{
  list-style: none;
}

html{
}  overflow-x: hidden;


body{
  background-color: #ddd7ac;
  overflow-x: hidden;
}
`