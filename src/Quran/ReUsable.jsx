import styled from 'styled-components'

const color = '#2a453e';

export const Container = styled.div`
width: 85%;
margin: 2rem auto;

@media(max-width: 64em){
  width: 90%;
}

@media(max-width: 50em){
  width: 95%;
}

.home-text{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;
  color: ${color};

  h4{
    font-size: 2.5rem;
    font-weight: 600;
    width: 80%;
    color: ${color};
  }
  p{
    font-size: 0.8rem;
  }

  .btn{
    display: flex;
    gap: 1rem;

    button{
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      text-transform: capitalize;
    }
  }

  @media(max-width: 64em){
    width: 100%;
  h4{
    font-size: 1.5rem;
  }
    p{
    font-size: 0.8rem;
    }
  }
}

.home-image{
  width: 100%;
  height: 400px;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  img{
    height: 100%;
    width: 50%;
    object-fit: cover;
    border-radius: 5px;
  }

  @media(max-width: 800px){
    height: 200px;
  }
}

.about{
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
}

.about-image{
  display: flex;
  gap: 1rem;

@media(max-width: 50em){
  display: none;
}

  div{
    width: 50%;
    height: 300px;
  }

  .second{
    margin-top: 1.5rem;
  }

  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
}

.about-text{
  p{
    line-height: 1.5rem;
  }  
  .second{
    margin: 1rem 0;
  }

  @media(max-width: 50em){
    h4{
      text-align: center;
    }
    p{
      font-size: 0.7rem;
      line-height: 1.2rem;
    }
  }
}

.translation{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h4{
    text-align: center;
  }
  
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p{
      color: #2a453e;
      cursor: pointer;

      @media(max-width: 50em){
        font-size: 0.8rem;
      }
      
    }
    .btn-con{
      display: flex;
      gap: 10px;
      margin-top: 1rem;
    }
  }
  
.translate-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media(max-width: 55em){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 30em){
    grid-template-columns: 100%;
  }
  .card{
    background-color: #fff;
    display: flex;
    gap: 1rem;
    padding: 1rem 10px;
    color: #2a453e;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
      background-color: ${color};
      color: #fff;
      .number{
        background-color: #fff;
        color: ${color}
      }
      p{
        color: #fff;
      }
    }
    .number{
      background-color: rgba(42, 69, 62, 0.15);
      padding: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      border-radius: 3px;
    }

    .whole{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      h6{
        font-size: 0.9rem;
      }
      p{
        font-size: 0.7rem;
      }

      @media(max-width: 57em){
        h6{
          font-size: 0.7rem;
        }
        p{
          font-size: 0.6rem;
        }
      }
      @media(max-width: 50em){
        h6{
          font-size: 0.6rem;
        }
        p{
          font-size: 0.5rem;
        }
      }
    }
  }

}
}




.blogs{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  p{
    font-size: 0.8rem;
    text-align: center;
  }

  .blog-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    button{
      text-align: center;
      width: 100%;
    }
    .blog{
      border: 1px solid #2a453e;
      padding: 10px;
      display: flex;
      gap: 1rem;
      color: #2a453e;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover{
        transform: scale(0.9);
      }

      h6{
        font-size: 0.9rem;
      }

      p{
        text-align: left;
      }
      img{
        width: 150px;
        height: 150px;
        object-fit: cover;
      }

      a{
        margin-top: 2rem;
        color: #2a453e;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 0.65rem;

        &:hover{
          color: orange;
        }
      }

      @media(max-width: 50em){
        h6{
          font-size: 0.7rem;
        }
        p{
          font-size: 0.6rem;
        }
        img{
          width: 125px;
          height: 125px;
        }
      }
      @media(max-width: 40em){
        flex-direction: column;
        div{
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
    }
    @media(max-width: 30em){
      grid-template-columns: 100%;
    }
  }
}



.juz-con{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  text-transform: capitalize;
  text-align: center;

  h1{
  color: ${color};
    font-size: 4rem;
  }
  h4{
    color: ${color};
    font-weight: 400;
  }
}

`

export const GreenContainer = styled.div`
background-color: #2a453e;
padding: 2rem 0;
display: flex;
gap: 1rem;

h4{
  font-size: 2rem;
  color: #fff;
  font-family: 'Poppins';
}
p{
  color: #fff;
  font-size: 0.7rem;
}
.image-container{
  display: flex;
  gap: 1rem;
  overflow: hidden;
  img{
    width: 12rem;
    height: 18rem;
    object-fit: cover;
  }
}

.container{
  padding: 0 1rem;
  p{
    margin: 1rem 0;
    width: 80%;
  }
  .pagination-btns{
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 1rem;
  }

  h5{
    color: #fff;
    letter-spacing: 10px;
    font-size: 1.5rem;
    display: flex;
  }

  button{
    padding: 5px;
    display: flex;
    align-items: center;
    svg{
      font-size: 1rem;
    }
  }
  .first-btn{
    border: 1px solid #fff;
    color: #fff;
    background: none;
  }
  .second-btn{
    background-color: #fff;
    color: #2a453e;
    border: none;
  }

  @media(max-width: 30em){
    h4{
      font-size: 1.25rem;
    }
  }
}


.subscribe{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  width: 100%;
  padding: 2rem 0;

  p{
    width: 50%;
    @media(max-width: 50em){
      font-size: 0.7rem;
      width: 90%;
    }
  }

}


.app {
  display: flex;
  gap: 10px;
  margin-top: 1rem;
  .store {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 2px 10px;
      text-transform: capitalize;
      color: #000;
      background-color: #fff;
      border-radius: 5px;
      cursor: pointer;
      text-align: left;
      svg {
          font-size: 1.4rem;
      }
      .play {
          svg {
              color: #adff2f;
          }
      }
      h6{
        font-size: 12px;
      }
      p {
          font-weight: 500;
          color: #000;
          width: 100%;
          font-size: 10px;
      }
  }
}
`

export const Semi = styled.span`
border: 2px solid orange;
border-radius: 40%;
text-transform: capitalize;
`

export const StatsComponent = styled.div`
background-color: #2a453e;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 2rem 0;
gap: 2rem;

h2{
  font-size: 2rem;
  color: orange;
}

p{
  font-size: 0.8rem;
  color: #fff;
  font-weight: 300;
  text-transform: capitalize;
}

@media(max-width: 50em){
  h2{
    font-size: 1.25rem;
  }
}

@media(max-width: 50em){
  flex-direction: column;
}

`
export const Box = styled.div`
width: 50%;
p{
  font-size: 0.8rem;
}

@media(max-width: 50em){
  width: 100%;
}
`

export const Tophead = styled.h4`
font-size: 1.5rem;
color: ${color};
text-transform: capitalize;

@media(max-width: 45em){
  font-size: 1.25rem;
}
`

export const MoreBtn = styled.button`
background-color: orange;
color: #2a453e;
`

export const PrimaryBtn = styled.button`
background-color: ${color};
color: #fff;
`

export const TransBtn = styled.button`
background: none;
color: ${color};
border: 1px solid #2a453e;
`


export const FooterContainer = styled.footer`
width: 85%;
margin: 2rem auto;

@media(max-width: 64em){
  width: 90%;
}

@media(max-width: 64em){
  width: 95%;
}

.footer{
  display: flex;
  gap: 10rem;

  @media(max-width: 60em){
    flex-direction: column;
    gap: 2rem;
  }



  .foot{
    text-transform: capitalize;
    color: ${color};

    a{
      text-transform: capitalize;
      color: ${color};
      font-size: 14px;
      transition: 0.3s ease;
      font-weight: 400;


      &:hover{
        color: orange;
        font-weight: 600;
      }
    }
    p{
      font-size: 14px;
      color: ${color};
    }

    .footer-lists{
      h6{
        font-size: 1.1rem;
      }

      li{
        margin-top: 10px;
      }
    }

    .media{
      display: flex;
      gap: 10px;
      margin-top: 10px;
      .media-link{

        a{
          z-index: 10;
          background: none;
          display: flex;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.2);
          padding: 10px;
          border-radius: 50%;
          transition: 0.3s ease;
          &:hover{
            background-color: orange;
            color: ${color};
          }

          svg{
            font-size: 1.25rem;
          }
        }
      }
    }
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    
    @media(max-width: 50em){
      grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 42em){
      grid-template-columns: 100%;
    }

  }
}
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

svg{
  color: ${color};
}
`
