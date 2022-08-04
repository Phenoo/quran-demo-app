import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { fetchData } from '../utils/fetchData'
import { Container, TransBtn, PrimaryBtn, MoreBtn, Header } from './ReUsable'
import { Link } from 'react-router-dom';
import Logo from './Logo'
import Sound from './Sound'



const SurahContainer = styled.div`

h2{
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 1.5rem;

  span{
    font-size: 0.9rem;
    margin-left: 1rem;
  }
}
h4{
  font-size: 1.75rem;
  text-align: center;
}

h6{
  font-size: 1.1rem;
  font-weight: 400;
}
.btn-con{
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav, .header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
`

const AyahContainer = styled.div`

`

const Ayah = styled.div`
display: flex;
align-items: center;
gap: 5px;
border: 2px solid #2a453e;
margin: 1rem 0;
padding: 1rem 10px;

p{
  font-size: 1.15rem;
}

span{
  font-size: 0.75rem;
}


@media(max-width: 50em){
  p{
    font-size: 1rem;
  }
  span{
    font-size: 0.6rem;
  }
}

`

const WholeSurah = () => {
  const [data, setData] = useState([])
  const [ayahs, setAyahs] = useState([])
  const [engayahs, setEngAyahs] = useState([])
  const [english, setEnglish] = useState(true)


  const {number} = useParams()
  useEffect(() => {
    const fetchAyah = async () => {
      const ayahData = await fetchData(`https://api.alquran.cloud/v1/surah/${number}-/en.asad`);
      setEngAyahs(ayahData.data.ayahs)
    }
    const fetchSurah = async () => {
      const quranData = await fetchData(`https://api.alquran.cloud/v1/surah/${number}-`);
      setData(quranData.data)
      setAyahs(quranData.data.ayahs)
    }
    fetchAyah();
    fetchSurah();
  }, [number]);
  return (
    <Container>
      <Header>
        <Logo />
        <Sound />
      </Header>
      <SurahContainer>
        <h2>
          <span>{number}</span>
            {data.name}
          </h2>
        <div className="nav">
          <h6>
          '{data.englishName}'
          </h6>
        <div className="btn-con">
            <PrimaryBtn onClick={() => setEnglish(true)}>ARA</PrimaryBtn>
            <TransBtn onClick={() => setEnglish(false)}>EN</TransBtn>
          </div>
        </div>
        <div className="header">
          <h6>({data.englishNameTranslation})</h6>
          <h6>{data.revelationType}</h6>
        </div>
      
      </SurahContainer>
      <AyahContainer>
        {
          english ? 
          
            ayahs.map((item) => {
              return (
                <Ayah key={item.number} >
                  <span>{number}.{item.numberInSurah}</span>
                  <p>{item.text}</p>
                </Ayah>
              )
            })
          
          :
            engayahs.map((item) => {
              return (
                <Ayah key={item.number} >
                  <span>{number}.{item.numberInSurah}</span>
                  <p>{item.text}</p>
                </Ayah>
              )
            })
          } 
        
      </AyahContainer>
      <Link to='/'>
        <MoreBtn>
          Back
        </MoreBtn>
      </Link>
    </Container>
  )
}

export default WholeSurah