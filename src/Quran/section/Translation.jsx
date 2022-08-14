import React, {useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchData } from '../../utils/fetchData'
import { Container, MoreBtn, PrimaryBtn, Semi, Tophead, TransBtn } from '../ReUsable'


const Translation = () => {
  const [data, setData] = useState([]);
  const [ascend, setAscend] = useState(false);


  const SortHandler = () => {
    setAscend(!ascend);
  }

  

  useEffect(() => {
    const fetchQuranData = async () => {
        const quranData = await fetchData(`https://api.alquran.cloud/v1/surah`);
        const mata = quranData.data
        if(ascend){
        setData(mata.filter((item) => item.number > 83));
        console.log('meta')
        }
        else{
        setData(mata.filter((item) => item.number < 16));
        }

    }    
      fetchQuranData();
  }, [ascend])
  return (
    <Container id='translation'>
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
            <Link to='/juz'>
              <TransBtn>
                Juz
            </TransBtn>
            </Link>
          </div>
          <div className="div">
            <p onClick={SortHandler}>sort by <strong>ascending</strong> <FaChevronUp /></p>
          </div>
        </div>
        <div className="translate-container">
        {
          data.map((item, index) => {
            const { number, englishName, englishNameTranslation, numberOfAyahs, name} = item;
            return (
              <Link to={`/wholesurah/${number}`} key={index} className='card'>
                <div className="number">
                  <h5>
                    {number}
                  </h5>
                </div>
                <div className="whole">
                  <div className="part">
                    <h6>
                      {englishName}
                    </h6>
                    <p>{englishNameTranslation}</p>
                  </div>
                  <div className="part">
                    <h6>
                      {name}
                    </h6>
                    <p>{numberOfAyahs} verses</p>
                  </div>
                </div>
              </Link>
            )
          })
        } 
        </div>
        <Link to='/surah'>
          <MoreBtn>
            Show more
          </MoreBtn>
        </Link>
      </div>
    </Container>
  )
}


export default Translation