import React, { useEffect, useState } from 'react'
import { FaChevronUp} from 'react-icons/fa'
import { Container, Header, MoreBtn, PrimaryBtn, Semi, Tophead } from './ReUsable'
import { Link } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import Logo from './Logo';
import Sound from './Sound'

const Surah = () => {
    const [data, setData] = useState([]);
    const [ascend, setAscend] = useState(false);

  const SortHandler = () => {
    setAscend(!ascend);
  }
    useEffect(() => {
      const fetchQuranData = async () => {
        const quranData = await fetchData(`https://api.alquran.cloud/v1/surah`);
        if(ascend){
          const mata = quranData.data;
          setData(mata.reverse());
        }
        const mata = quranData.data;
        setData(mata);
      }
        fetchQuranData();
    }, [ascend])
  return (
    <Container>
      <Header>
        <Logo />
        <Sound />
      </Header>
    <div className="translation">
      <div>
      <Tophead>
        Read holy quran with <br />
        <Semi>
          translations
        </Semi>
      </Tophead>
      </div>
      <div className="nav">
        <div className="btn-con">
          <PrimaryBtn>surah</PrimaryBtn>
        </div>
        <div className="div">
          <p onClick={SortHandler}>sort by <strong>ascending</strong> <FaChevronUp /></p>
        </div>
      </div>
      <div className="translate-container">
      {
        data.map((item, index) => {
          return (
            <Link to={`/wholesurah/${item.number}`} key={index} className='card'>
              <div className="number">
                <h5>
                  {item.number}
                </h5>
              </div>
              <div className="whole">
                <div className="part">
                  <h6>
                    {item.englishName}
                  </h6>
                  <p>{item.englishNameTranslation}</p>
                </div>
                <div className="part">
                  <h6>
                    {item.name}
                  </h6>
                  <p>{item.numberOfAyahs} verses</p>
                </div>
              </div>
            </Link>
          )
        })
      } 
      </div>
      <Link to='/'>
        <MoreBtn>
          Back
        </MoreBtn>
      </Link>
    </div>
  </Container>
  )
}


export default Surah